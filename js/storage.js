/**
 * 本地儲存服務模組
 * 處理遊戲記錄與設定的儲存
 */

const StorageService = {
    // 儲存鍵名
    KEYS: {
        THEME: 'learningGame_theme',
        STATS: 'learningGame_stats',
        HISTORY: 'learningGame_history',
        SETTINGS: 'learningGame_settings',
        STUDENT: 'learningGame_student'
    },

    /**
     * 儲存資料
     * @param {string} key - 鍵名
     * @param {any} data - 資料
     */
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('儲存失敗:', error);
            return false;
        }
    },

    /**
     * 讀取資料
     * @param {string} key - 鍵名
     * @param {any} defaultValue - 預設值
     * @returns {any} 儲存的資料或預設值
     */
    load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('讀取失敗:', error);
            return defaultValue;
        }
    },

    /**
     * 刪除資料
     * @param {string} key - 鍵名
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('刪除失敗:', error);
            return false;
        }
    },

    // ===== 主題設定 =====

    /**
     * 取得主題設定
     * @returns {string} 'light' 或 'dark'
     */
    getTheme() {
        return this.load(this.KEYS.THEME, 'light');
    },

    /**
     * 儲存主題設定
     * @param {string} theme - 主題名稱
     */
    setTheme(theme) {
        return this.save(this.KEYS.THEME, theme);
    },

    // ===== 統計資料 =====

    /**
     * 取得統計資料
     * @returns {Object} 統計資料
     */
    getStats() {
        return this.load(this.KEYS.STATS, {
            totalGames: 0,
            totalCorrect: 0,
            totalQuestions: 0,
            bestScore: 0,
            totalPlayTime: 0
        });
    },

    /**
     * 更新統計資料
     * @param {Object} gameResult - 遊戲結果
     */
    updateStats(gameResult) {
        const stats = this.getStats();

        stats.totalGames++;
        stats.totalCorrect += gameResult.correct || 0;
        stats.totalQuestions += gameResult.total || 0;
        stats.totalPlayTime += gameResult.timeUsed || 0;

        if (gameResult.score > stats.bestScore) {
            stats.bestScore = gameResult.score;
        }

        return this.save(this.KEYS.STATS, stats);
    },

    /**
     * 計算平均正確率
     * @returns {number} 百分比
     */
    getAverageAccuracy() {
        const stats = this.getStats();
        if (stats.totalQuestions === 0) return 0;
        return Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    },

    // ===== 歷史記錄 =====

    /**
     * 取得歷史記錄
     * @param {number} limit - 限制數量
     * @returns {Array} 歷史記錄陣列
     */
    getHistory(limit = 20) {
        const history = this.load(this.KEYS.HISTORY, []);
        return history.slice(0, limit);
    },

    /**
     * 新增歷史記錄
     * @param {Object} record - 記錄資料
     */
    addHistory(record) {
        const history = this.load(this.KEYS.HISTORY, []);

        // 新增記錄到最前面
        history.unshift({
            ...record,
            timestamp: new Date().toISOString()
        });

        // 限制最多保留50筆
        if (history.length > 50) {
            history.pop();
        }

        return this.save(this.KEYS.HISTORY, history);
    },

    /**
     * 清除所有歷史記錄
     */
    clearHistory() {
        return this.save(this.KEYS.HISTORY, []);
    },

    /**
     * 清除所有統計資料
     */
    clearStats() {
        this.remove(this.KEYS.STATS);
        this.remove(this.KEYS.HISTORY);
        return true;
    },

    // ===== 設定 =====

    /**
     * 取得設定
     * @returns {Object} 設定物件
     */
    getSettings() {
        return this.load(this.KEYS.SETTINGS, {
            soundEnabled: true,
            animationEnabled: true,
            difficulty: 'normal'
        });
    },

    /**
     * 儲存設定
     * @param {Object} settings - 設定物件
     */
    setSettings(settings) {
        const current = this.getSettings();
        return this.save(this.KEYS.SETTINGS, { ...current, ...settings });
    },

    // ===== 學生設定 =====

    /**
     * 取得學生設定檔
     * @returns {Object|null} 學生設定或 null
     */
    getStudentProfile() {
        return this.load(this.KEYS.STUDENT, null);
    },

    /**
     * 儲存學生設定檔
     * @param {Object} profile - 學生資料
     */
    saveStudentProfile(profile) {
        return this.save(this.KEYS.STUDENT, profile);
    },

    // ===== 工具方法 =====

    /**
     * 格式化日期時間
     * @param {string} isoString - ISO 日期字串
     * @returns {string} 格式化後的字串
     */
    formatDateTime(isoString) {
        const date = new Date(isoString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${month}/${day} ${hours}:${minutes}`;
    },

    /**
     * 取得科目中文名稱
     * @param {string} subject - 科目代碼
     * @returns {string} 中文名稱
     */
    getSubjectName(subject) {
        const names = {
            chinese: '國語',
            math: '數學',
            english: '英語',
            science: '自然',
            social: '社會'
        };
        return names[subject] || subject;
    },

    /**
     * 取得出版社中文名稱
     * @param {string} publisher - 出版社代碼
     * @returns {string} 中文名稱
     */
    getPublisherName(publisher) {
        const names = {
            kangxuan: '康軒',
            nanyi: '南一',
            hanlin: '翰林'
        };
        return names[publisher] || publisher;
    },

    /**
     * 取得遊戲類型中文名稱
     * @param {string} gameType - 遊戲類型代碼
     * @returns {string} 中文名稱
     */
    getGameTypeName(gameType) {
        const names = {
            quiz: '選擇闘關',
            match: '配對遊戲',
            speed: '計時挑戰'
        };
        return names[gameType] || gameType;
    },

    /**
     * 取得考試範圍中文名稱
     * @param {string} exam - 考試範圍代碼
     * @returns {string} 中文名稱
     */
    getExamName(exam) {
        const names = {
            midterm: '期中考',
            final: '期末考',
            all: '全部範圍'
        };
        return names[exam] || exam;
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageService;
}
