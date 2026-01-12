/**
 * 遊戲引擎模組
 * 處理各種遊戲類型的核心邏輯
 */

const GameEngine = {
    // 遊戲狀態
    state: {
        gameType: null,      // 遊戲類型: quiz, match, speed
        questions: [],       // 題目列表
        currentIndex: 0,     // 當前題目索引
        score: 0,            // 分數
        correct: 0,          // 答對數
        wrong: 0,            // 答錯數
        startTime: null,     // 開始時間
        endTime: null,       // 結束時間
        isPlaying: false,    // 是否正在遊戲
        settings: {          // 遊戲設定
            grade: null,
            semester: null,
            subject: null,
            publisher: null,
            exam: null
        }
    },

    // 計時器相關
    timer: {
        interval: null,
        remaining: 60,
        total: 60
    },

    // 配對遊戲狀態
    matchState: {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0,
        isProcessing: false
    },

    // 回調函數
    callbacks: {
        onScoreUpdate: null,
        onProgressUpdate: null,
        onTimerUpdate: null,
        onGameEnd: null,
        onQuestionShow: null,
        onFeedback: null,
        onMatchUpdate: null,
        onNoQuestions: null  // 無題目時的回調
    },

    /**
     * 初始化遊戲
     * @param {Object} config - 遊戲設定
     */
    init(config) {
        this.state.gameType = config.gameType;
        this.state.settings = {
            grade: config.grade,
            semester: config.semester,
            subject: config.subject,
            publisher: config.publisher,
            exam: config.exam
        };
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.correct = 0;
        this.state.wrong = 0;
        this.state.startTime = new Date();
        this.state.endTime = null;
        this.state.isPlaying = true;

        // 根據遊戲類型初始化
        switch (config.gameType) {
            case 'quiz':
                this.initQuizGame(config);
                break;
            case 'match':
                this.initMatchGame(config);
                break;
            case 'speed':
                this.initSpeedGame(config);
                break;
        }
    },

    /**
     * 設置回調函數
     * @param {Object} callbacks - 回調函數物件
     */
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
    },

    // ===== 選擇題遊戲 =====

    /**
     * 初始化選擇題遊戲
     */
    initQuizGame(config) {
        this.state.questions = QuestionBank.getQuestions(
            config.grade,
            config.subject,
            config.publisher,
            config.semester,
            config.exam,
            10 // 預設10題
        );

        // 檢查是否有題目
        if (this.state.questions.length === 0) {
            this.state.isPlaying = false;
            if (this.callbacks.onNoQuestions) {
                this.callbacks.onNoQuestions();
            }
            return;
        }

        if (this.callbacks.onProgressUpdate) {
            this.callbacks.onProgressUpdate(1, this.state.questions.length);
        }

        this.showCurrentQuestion();
    },

    /**
     * 顯示當前題目
     */
    showCurrentQuestion() {
        if (this.state.currentIndex >= this.state.questions.length) {
            this.endGame();
            return;
        }

        const question = this.state.questions[this.state.currentIndex];

        if (this.callbacks.onQuestionShow) {
            this.callbacks.onQuestionShow(question, this.state.currentIndex + 1);
        }
    },

    /**
     * 回答問題
     * @param {string} answer - 使用者的答案
     * @returns {Object} 回答結果
     */
    answerQuestion(answer) {
        if (!this.state.isPlaying) return null;

        const question = this.state.questions[this.state.currentIndex];
        const isCorrect = answer === question.answer;

        if (isCorrect) {
            this.state.correct++;
            this.state.score += this.calculateScore();
        } else {
            this.state.wrong++;
        }

        if (this.callbacks.onScoreUpdate) {
            this.callbacks.onScoreUpdate(this.state.score);
        }

        if (this.callbacks.onFeedback) {
            this.callbacks.onFeedback(isCorrect, question.answer, question.hint);
        }

        return {
            isCorrect,
            correctAnswer: question.answer,
            hint: question.hint
        };
    },

    /**
     * 下一題
     */
    nextQuestion() {
        this.state.currentIndex++;

        if (this.callbacks.onProgressUpdate) {
            this.callbacks.onProgressUpdate(
                Math.min(this.state.currentIndex + 1, this.state.questions.length),
                this.state.questions.length
            );
        }

        if (this.state.currentIndex >= this.state.questions.length) {
            this.endGame();
        } else {
            this.showCurrentQuestion();
        }
    },

    /**
     * 計算分數
     */
    calculateScore() {
        // 基礎分數
        let score = 10;

        // 根據遊戲類型調整
        if (this.state.gameType === 'speed') {
            // 計時挑戰，時間越多分數越高
            score = Math.floor(10 + (this.timer.remaining / this.timer.total) * 10);
        }

        return score;
    },

    // ===== 配對遊戲 =====

    /**
     * 初始化配對遊戲
     */
    initMatchGame(config) {
        const pairs = QuestionBank.getMatchPairs(
            config.grade,
            config.subject,
            config.publisher,
            config.semester,
            config.exam,
            6 // 6對 = 12張卡片
        );

        // 檢查是否有配對資料
        if (!pairs || pairs.length === 0) {
            this.state.isPlaying = false;
            if (this.callbacks.onNoQuestions) {
                this.callbacks.onNoQuestions();
            }
            return;
        }

        // 建立卡片陣列
        const cards = [];
        pairs.forEach((pair, index) => {
            cards.push({
                id: `${index}-a`,
                pairId: index,
                content: pair.a,
                isFlipped: false,
                isMatched: false
            });
            cards.push({
                id: `${index}-b`,
                pairId: index,
                content: pair.b,
                isFlipped: false,
                isMatched: false
            });
        });

        // 隨機打亂
        this.matchState.cards = QuestionBank.shuffle(cards);
        this.matchState.flippedCards = [];
        this.matchState.matchedPairs = 0;
        this.matchState.moves = 0;
        this.matchState.isProcessing = false;

        if (this.callbacks.onMatchUpdate) {
            this.callbacks.onMatchUpdate({
                cards: this.matchState.cards,
                moves: 0,
                matched: 0,
                total: pairs.length
            });
        }
    },

    /**
     * 翻轉卡片
     * @param {string} cardId - 卡片ID
     */
    flipCard(cardId) {
        if (this.matchState.isProcessing) return;
        if (this.matchState.flippedCards.length >= 2) return;

        const card = this.matchState.cards.find(c => c.id === cardId);
        if (!card || card.isFlipped || card.isMatched) return;

        card.isFlipped = true;
        this.matchState.flippedCards.push(card);

        if (this.callbacks.onMatchUpdate) {
            this.callbacks.onMatchUpdate({
                cards: this.matchState.cards,
                moves: this.matchState.moves,
                matched: this.matchState.matchedPairs,
                total: this.matchState.cards.length / 2,
                flippedCard: card
            });
        }

        if (this.matchState.flippedCards.length === 2) {
            this.matchState.moves++;
            this.checkMatch();
        }
    },

    /**
     * 檢查配對
     */
    checkMatch() {
        this.matchState.isProcessing = true;
        const [card1, card2] = this.matchState.flippedCards;

        setTimeout(() => {
            if (card1.pairId === card2.pairId) {
                // 配對成功
                card1.isMatched = true;
                card2.isMatched = true;
                this.matchState.matchedPairs++;
                this.state.correct++;
                this.state.score += 20;

                if (this.callbacks.onScoreUpdate) {
                    this.callbacks.onScoreUpdate(this.state.score);
                }

                // 檢查是否全部配對完成
                if (this.matchState.matchedPairs >= this.matchState.cards.length / 2) {
                    setTimeout(() => this.endGame(), 500);
                }
            } else {
                // 配對失敗
                card1.isFlipped = false;
                card2.isFlipped = false;
                this.state.wrong++;
            }

            this.matchState.flippedCards = [];
            this.matchState.isProcessing = false;

            if (this.callbacks.onMatchUpdate) {
                this.callbacks.onMatchUpdate({
                    cards: this.matchState.cards,
                    moves: this.matchState.moves,
                    matched: this.matchState.matchedPairs,
                    total: this.matchState.cards.length / 2
                });
            }
        }, 800);
    },

    // ===== 計時挑戰遊戲 =====

    /**
     * 初始化計時挑戰遊戲
     */
    initSpeedGame(config) {
        // 取得較多題目
        this.state.questions = QuestionBank.getQuestions(
            config.grade,
            config.subject,
            config.publisher,
            config.semester,
            config.exam,
            30 // 計時挑戰需要更多題目
        );

        // 檢查是否有題目
        if (this.state.questions.length === 0) {
            this.state.isPlaying = false;
            if (this.callbacks.onNoQuestions) {
                this.callbacks.onNoQuestions();
            }
            return;
        }

        this.timer.remaining = 60;
        this.timer.total = 60;

        this.startTimer();
        this.showCurrentQuestion();

        if (this.callbacks.onTimerUpdate) {
            this.callbacks.onTimerUpdate(this.timer.remaining, this.timer.total);
        }
    },

    /**
     * 開始計時
     */
    startTimer() {
        this.stopTimer();

        this.timer.interval = setInterval(() => {
            this.timer.remaining--;

            if (this.callbacks.onTimerUpdate) {
                this.callbacks.onTimerUpdate(this.timer.remaining, this.timer.total);
            }

            if (this.timer.remaining <= 0) {
                this.endGame();
            }
        }, 1000);
    },

    /**
     * 停止計時
     */
    stopTimer() {
        if (this.timer.interval) {
            clearInterval(this.timer.interval);
            this.timer.interval = null;
        }
    },

    /**
     * 計時挑戰回答
     * @param {string} answer - 答案
     */
    speedAnswer(answer) {
        if (!this.state.isPlaying) return null;

        const question = this.state.questions[this.state.currentIndex];
        const isCorrect = answer === question.answer;

        if (isCorrect) {
            this.state.correct++;
            this.state.score += this.calculateScore();
        } else {
            this.state.wrong++;
        }

        if (this.callbacks.onScoreUpdate) {
            this.callbacks.onScoreUpdate(this.state.score);
        }

        // 立即顯示下一題
        this.state.currentIndex++;

        // 如果題目用完，循環使用
        if (this.state.currentIndex >= this.state.questions.length) {
            this.state.questions = QuestionBank.shuffle([...this.state.questions]);
            this.state.currentIndex = 0;
        }

        this.showCurrentQuestion();

        return { isCorrect };
    },

    // ===== 遊戲結束 =====

    /**
     * 結束遊戲
     */
    endGame() {
        this.state.isPlaying = false;
        this.state.endTime = new Date();
        this.stopTimer();

        const result = this.getGameResult();

        // 更新統計和歷史
        StorageService.updateStats(result);
        StorageService.addHistory({
            gameType: this.state.gameType,
            grade: this.state.settings.grade,
            semester: this.state.settings.semester,
            subject: this.state.settings.subject,
            publisher: this.state.settings.publisher,
            score: result.score,
            accuracy: result.accuracy,
            timeUsed: result.timeUsed
        });

        if (this.callbacks.onGameEnd) {
            this.callbacks.onGameEnd(result);
        }
    },

    /**
     * 取得遊戲結果
     * @returns {Object} 遊戲結果
     */
    getGameResult() {
        const timeUsed = Math.round((this.state.endTime - this.state.startTime) / 1000);
        const total = this.state.correct + this.state.wrong;
        const accuracy = total > 0 ? Math.round((this.state.correct / total) * 100) : 0;

        // 計算星星數
        let stars = 1;
        if (accuracy >= 60) stars = 2;
        if (accuracy >= 80) stars = 3;

        // 決定評語
        let title = '繼續加油！';
        let subtitle = '多練習幾次就會進步了';
        let icon = '💪';

        if (accuracy >= 80) {
            title = '太棒了！';
            subtitle = '你真是學習高手！';
            icon = '🏆';
        } else if (accuracy >= 60) {
            title = '做得不錯！';
            subtitle = '再接再厲，還可以更好';
            icon = '🌟';
        }

        return {
            score: this.state.score,
            correct: this.state.correct,
            wrong: this.state.wrong,
            total,
            accuracy,
            timeUsed,
            stars,
            title,
            subtitle,
            icon,
            gameType: this.state.gameType,
            settings: this.state.settings
        };
    },

    /**
     * 重置遊戲
     */
    reset() {
        this.stopTimer();
        this.state = {
            gameType: null,
            questions: [],
            currentIndex: 0,
            score: 0,
            correct: 0,
            wrong: 0,
            startTime: null,
            endTime: null,
            isPlaying: false,
            settings: {
                grade: null,
                semester: null,
                subject: null,
                publisher: null,
                exam: null
            }
        };
        this.matchState = {
            cards: [],
            flippedCards: [],
            matchedPairs: 0,
            moves: 0,
            isProcessing: false
        };
        this.timer = {
            interval: null,
            remaining: 60,
            total: 60
        };
    },

    /**
     * 取得提示
     */
    getHint() {
        if (this.state.currentIndex < this.state.questions.length) {
            return this.state.questions[this.state.currentIndex].hint;
        }
        return null;
    }
};

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameEngine;
}
