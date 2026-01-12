/**
 * Google Sheet 資料載入模組
 * 負責從 Google Apps Script Web App 載入題庫資料
 */

const SheetLoader = {
    // Google Apps Script Web App URL（部署後填入）
    SHEET_URL: 'https://script.google.com/macros/s/AKfycbyn4OpjTedvRMA1DiViOq8Vzlfr2xtdP166CwfNIU3e3bx954RTj8zoQgZRCAkhX5Y9/exec',

    // 快取鍵名
    CACHE_KEYS: {
        questions: 'quizGame_questions_cache',
        matching: 'quizGame_matching_cache',
        lastUpdate: 'quizGame_cache_timestamp'
    },

    // 快取有效期（24小時，毫秒）
    CACHE_DURATION: 24 * 60 * 60 * 1000,

    // 是否已初始化
    initialized: false,

    // 載入的資料
    data: {
        questions: null,
        matching: null
    },

    // 回調函數
    callbacks: {
        onProgress: null,
        onComplete: null,
        onError: null
    },

    /**
     * 設定 Google Sheet URL
     * @param {string} url - Google Apps Script 部署網址
     */
    setSheetUrl(url) {
        this.SHEET_URL = url;
    },

    /**
     * 設定回調函數
     */
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
    },

    /**
     * 初始化載入題庫
     * @returns {Promise<boolean>} 是否成功
     */
    async init() {
        if (this.initialized && this.data.questions) {
            return true;
        }

        // 如果沒有設定 URL，使用快取或內建資料
        if (!this.SHEET_URL) {
            console.log('未設定 Google Sheet URL，使用內建題庫');
            return this.loadFromBuiltin();
        }

        try {
            this.updateProgress('正在載入題庫...');

            // 嘗試從遠端載入
            const success = await this.loadFromRemote();

            if (success) {
                this.initialized = true;
                this.updateProgress('題庫載入完成');
                if (this.callbacks.onComplete) {
                    this.callbacks.onComplete(this.data);
                }
                return true;
            }
        } catch (error) {
            console.error('遠端載入失敗:', error);
        }

        // 遠端失敗，嘗試從快取載入
        this.updateProgress('正在從快取載入...');
        const cacheSuccess = this.loadFromCache();

        if (cacheSuccess) {
            this.initialized = true;
            this.updateProgress('從快取載入完成');
            if (this.callbacks.onComplete) {
                this.callbacks.onComplete(this.data);
            }
            return true;
        }

        // 快取也失敗，使用內建資料
        console.log('快取載入失敗，使用內建題庫');
        return this.loadFromBuiltin();
    },

    /**
     * 從遠端 Google Sheet 載入
     */
    async loadFromRemote() {
        try {
            const response = await fetch(this.SHEET_URL, {
                method: 'GET',
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // 處理並儲存資料
            this.data.questions = this.processQuestions(data.questions || []);
            this.data.matching = this.processMatching(data.matching || []);

            // 存入快取
            this.saveToCache();

            return true;
        } catch (error) {
            console.error('從遠端載入失敗:', error);
            if (this.callbacks.onError) {
                this.callbacks.onError(error);
            }
            return false;
        }
    },

    /**
     * 處理選擇題資料，轉換為應用程式格式
     */
    processQuestions(rawData) {
        const processed = {};

        rawData.forEach(row => {
            const grade = String(row.grade);
            const subject = row.subject;
            const publisher = row.publisher;

            // 建立巢狀結構
            if (!processed[grade]) {
                processed[grade] = {};
            }
            if (!processed[grade][subject]) {
                processed[grade][subject] = {};
            }
            if (!processed[grade][subject][publisher]) {
                processed[grade][subject][publisher] = [];
            }

            // 轉換題目格式
            const question = {
                id: row.id,
                type: row.type || 'choice',
                question: row.question,
                options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean),
                answer: row.answer,
                hint: row.hint || '',
                exam: row.exam || 'all'  // 考試範圍：midterm/final/all
            };

            processed[grade][subject][publisher].push(question);
        });

        return processed;
    },

    /**
     * 處理配對題資料
     */
    processMatching(rawData) {
        const processed = {
            chinese: {},
            english: {},
            math: {}
        };

        rawData.forEach(row => {
            const grade = String(row.grade);
            const subject = row.subject;

            if (!processed[subject]) {
                processed[subject] = {};
            }
            if (!processed[subject][grade]) {
                processed[subject][grade] = [];
            }

            processed[subject][grade].push({
                a: row.item_a,
                b: row.item_b,
                exam: row.exam || 'all'  // 考試範圍：midterm/final/all
            });
        });

        return processed;
    },

    /**
     * 從 localStorage 快取載入
     */
    loadFromCache() {
        try {
            const lastUpdate = localStorage.getItem(this.CACHE_KEYS.lastUpdate);

            // 檢查快取是否過期
            if (lastUpdate) {
                const cacheAge = Date.now() - parseInt(lastUpdate);
                if (cacheAge > this.CACHE_DURATION) {
                    console.log('快取已過期');
                    return false;
                }
            } else {
                return false;
            }

            const questionsCache = localStorage.getItem(this.CACHE_KEYS.questions);
            const matchingCache = localStorage.getItem(this.CACHE_KEYS.matching);

            if (questionsCache) {
                this.data.questions = JSON.parse(questionsCache);
            }
            if (matchingCache) {
                this.data.matching = JSON.parse(matchingCache);
            }

            return this.data.questions !== null;
        } catch (error) {
            console.error('快取讀取失敗:', error);
            return false;
        }
    },

    /**
     * 儲存資料到 localStorage 快取
     */
    saveToCache() {
        try {
            if (this.data.questions) {
                localStorage.setItem(
                    this.CACHE_KEYS.questions,
                    JSON.stringify(this.data.questions)
                );
            }
            if (this.data.matching) {
                localStorage.setItem(
                    this.CACHE_KEYS.matching,
                    JSON.stringify(this.data.matching)
                );
            }
            localStorage.setItem(this.CACHE_KEYS.lastUpdate, Date.now().toString());
            console.log('題庫已快取');
        } catch (error) {
            console.error('快取儲存失敗:', error);
        }
    },

    /**
     * 使用內建題庫（fallback）
     */
    loadFromBuiltin() {
        // QuestionBank.data 是原本 questions.js 的內建資料
        if (typeof QuestionBank !== 'undefined' && QuestionBank.builtinData) {
            this.data.questions = QuestionBank.builtinData;
            this.data.matching = QuestionBank.builtinMatching;
            this.initialized = true;

            if (this.callbacks.onComplete) {
                this.callbacks.onComplete(this.data);
            }
            return true;
        }

        console.error('無法載入內建題庫');
        if (this.callbacks.onError) {
            this.callbacks.onError(new Error('無可用題庫'));
        }
        return false;
    },

    /**
     * 更新載入進度
     */
    updateProgress(message) {
        console.log(message);
        if (this.callbacks.onProgress) {
            this.callbacks.onProgress(message);
        }
    },

    /**
     * 強制重新載入（清除快取）
     */
    async forceReload() {
        localStorage.removeItem(this.CACHE_KEYS.questions);
        localStorage.removeItem(this.CACHE_KEYS.matching);
        localStorage.removeItem(this.CACHE_KEYS.lastUpdate);
        this.initialized = false;
        this.data.questions = null;
        this.data.matching = null;
        return await this.init();
    },

    /**
     * 取得題庫資料
     */
    getQuestions() {
        return this.data.questions;
    },

    /**
     * 取得配對資料
     */
    getMatching() {
        return this.data.matching;
    },

    /**
     * 檢查是否有遠端資料
     */
    hasRemoteData() {
        return this.initialized && this.data.questions !== null;
    }
};
