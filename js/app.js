/**
 * 主應用程式模組
 * 處理 UI 互動和頁面導航
 */

const App = {
    // 應用程式狀態
    state: {
        currentPage: 'welcome',
        selectedGrade: null,
        selectedSemester: null,
        selectedSubject: null,
        selectedPublisher: null,
        selectedExam: null,
        selectedExam: null,
        selectedGameType: null,
        studentProfile: null
    },

    // DOM 元素快取
    elements: {},

    /**
     * 初始化應用程式
     */
    async init() {
        this.cacheElements();
        this.bindEvents();
        this.initTheme();

        // 嘗試載入學生設定
        this.loadStudentProfile();

        this.hideLoading();
    },

    /**
     * 初始化題庫
     */
    async initQuestionBank() {
        // 如果 SheetLoader 有設定 URL，顯示載入提示
        if (typeof SheetLoader !== 'undefined' && SheetLoader.SHEET_URL) {
            this.updateLoadingText('正在載入題庫...');
            SheetLoader.setCallbacks({
                onProgress: (msg) => this.updateLoadingText(msg),
                onError: (err) => console.error('題庫載入錯誤:', err)
            });
        }

        // 初始化題庫
        await QuestionBank.init();
    },

    /**
     * 更新載入畫面文字
     */
    updateLoadingText(text) {
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) {
            loadingText.textContent = text;
        }
    },

    /**
     * 快取 DOM 元素
     */
    cacheElements() {
        this.elements = {
            // 載入畫面
            loadingScreen: document.getElementById('loading-screen'),
            app: document.getElementById('app'),

            // 頁面
            welcomePage: document.getElementById('welcome-page'),
            gamePage: document.getElementById('game-page'),
            resultPage: document.getElementById('result-page'),
            statsPage: document.getElementById('stats-page'),

            // 選擇器
            gradeSelector: document.getElementById('grade-selector'),
            semesterGroup: document.getElementById('semester-group'),
            semesterSelector: document.getElementById('semester-selector'),
            subjectGroup: document.getElementById('subject-group'),
            subjectSelector: document.getElementById('subject-selector'),
            publisherGroup: document.getElementById('publisher-group'),
            publisherSelector: document.getElementById('publisher-selector'),
            examGroup: document.getElementById('exam-group'),
            examSelector: document.getElementById('exam-selector'),
            gameTypeGroup: document.getElementById('game-type-group'),
            gameTypeSelector: document.getElementById('game-type-selector'),

            // 當前選擇顯示
            currentSelection: document.getElementById('current-selection'),
            selectedGrade: document.getElementById('selected-grade'),
            selectedSemester: document.getElementById('selected-semester'),
            selectedSubject: document.getElementById('selected-subject'),
            selectedPublisher: document.getElementById('selected-publisher'),
            selectedExam: document.getElementById('selected-exam'),
            resetSelection: document.getElementById('reset-selection'),

            // 遊戲頁面元素
            backToMenu: document.getElementById('back-to-menu'),
            currentScore: document.getElementById('current-score'),
            currentProgress: document.getElementById('current-progress'),
            timerContainer: document.getElementById('timer-container'),
            timerValue: document.getElementById('timer-value'),

            // 選擇題遊戲
            quizGame: document.getElementById('quiz-game'),
            questionNumber: document.getElementById('question-number'),
            questionText: document.getElementById('question-text'),
            questionHint: document.getElementById('question-hint'),
            optionsContainer: document.getElementById('options-container'),
            feedbackArea: document.getElementById('feedback-area'),
            feedbackIcon: document.getElementById('feedback-icon'),
            feedbackText: document.getElementById('feedback-text'),
            nextQuestion: document.getElementById('next-question'),

            // 配對遊戲
            matchGame: document.getElementById('match-game'),
            matchMoves: document.getElementById('match-moves'),
            matchPairs: document.getElementById('match-pairs'),
            matchTotal: document.getElementById('match-total'),
            matchGrid: document.getElementById('match-grid'),

            // 計時挑戰
            speedGame: document.getElementById('speed-game'),
            speedTimerText: document.getElementById('speed-timer-text'),
            timerRingProgress: document.getElementById('timer-ring-progress'),
            speedQuestionText: document.getElementById('speed-question-text'),
            speedOptionsContainer: document.getElementById('speed-options-container'),
            speedCorrect: document.getElementById('speed-correct'),
            speedWrong: document.getElementById('speed-wrong'),

            // 結果頁面
            resultIcon: document.getElementById('result-icon'),
            resultTitle: document.getElementById('result-title'),
            resultSubtitle: document.getElementById('result-subtitle'),
            finalScore: document.getElementById('final-score'),
            accuracyRate: document.getElementById('accuracy-rate'),
            timeStat: document.getElementById('time-stat'),
            timeUsed: document.getElementById('time-used'),
            resultStars: document.getElementById('result-stars'),
            playAgain: document.getElementById('play-again'),
            changeSettings: document.getElementById('change-settings'),
            goHome: document.getElementById('go-home'),

            // 統計頁面
            statsBtn: document.getElementById('stats-btn'),
            statsBack: document.getElementById('stats-back'),
            totalGames: document.getElementById('total-games'),
            totalCorrect: document.getElementById('total-correct'),
            avgAccuracy: document.getElementById('avg-accuracy'),
            historyList: document.getElementById('history-list'),
            clearStats: document.getElementById('clear-stats'),

            // 主題切換
            themeToggle: document.getElementById('theme-toggle'),

            // 對話框
            hintModal: document.getElementById('hint-modal'),
            hintContent: document.getElementById('hint-content'),
            closeHint: document.getElementById('close-hint'),
            confirmModal: document.getElementById('confirm-modal'),
            confirmTitle: document.getElementById('confirm-title'),
            confirmContent: document.getElementById('confirm-content'),
            confirmCancel: document.getElementById('confirm-cancel'),
            confirmCancel: document.getElementById('confirm-cancel'),
            confirmOk: document.getElementById('confirm-ok'),

            // 學生設定 Modal
            studentSettingsBtn: document.getElementById('student-settings-btn'),
            studentSettingsModal: document.getElementById('student-settings-modal'),
            closeSettingsBtn: document.getElementById('close-settings-btn'),
            cancelSettingsBtn: document.getElementById('cancel-settings'),
            studentSettingsForm: document.getElementById('student-settings-form'),

            // 學生設定表單欄位
            settingName: document.getElementById('setting-name'),
            settingGrade: document.getElementById('setting-grade'),
            settingSemester: document.getElementById('setting-semester'),
            settingChinesePub: document.getElementById('setting-chinese-publisher'),
            settingMathPub: document.getElementById('setting-math-publisher'),
            settingEnglishPub: document.getElementById('setting-english-publisher'),
            settingSciencePub: document.getElementById('setting-science-publisher'),
            settingSocialPub: document.getElementById('setting-social-publisher'),
            settingDefaultExam: document.getElementById('setting-default-exam')
        };
    },

    /**
     * 綁定事件
     */
    bindEvents() {
        // 年級選擇
        this.elements.gradeSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.selector-btn');
            if (btn) this.selectGrade(btn.dataset.value);
        });

        // 學期選擇
        this.elements.semesterSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.selector-btn');
            if (btn) this.selectSemester(btn.dataset.value);
        });

        // 科目選擇
        this.elements.subjectSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.selector-btn');
            if (btn) this.selectSubject(btn.dataset.value);
        });

        // 出版社選擇
        this.elements.publisherSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.selector-btn');
            if (btn) this.selectPublisher(btn.dataset.value);
        });

        // 考試範圍選擇
        this.elements.examSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.selector-btn');
            if (btn) this.selectExam(btn.dataset.value);
        });

        // 遊戲類型選擇
        this.elements.gameTypeSelector.addEventListener('click', (e) => {
            const card = e.target.closest('.game-type-card');
            if (card) this.selectGameType(card.dataset.value);
        });

        // 重置選擇
        this.elements.resetSelection.addEventListener('click', () => this.resetSelection());

        // 返回選單
        this.elements.backToMenu.addEventListener('click', () => this.confirmBackToMenu());

        // 下一題
        this.elements.nextQuestion.addEventListener('click', () => GameEngine.nextQuestion());

        // 結果頁面按鈕
        this.elements.playAgain.addEventListener('click', () => this.playAgain());
        this.elements.changeSettings.addEventListener('click', () => this.changeSettings());
        this.elements.goHome.addEventListener('click', () => this.goHome());

        // 統計頁面
        this.elements.statsBtn.addEventListener('click', () => this.showStatsPage());
        this.elements.statsBack.addEventListener('click', () => this.showPage('welcome'));
        this.elements.clearStats.addEventListener('click', () => this.confirmClearStats());

        // 主題切換
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());

        // 對話框
        this.elements.closeHint.addEventListener('click', () => this.hideModal('hint'));
        this.elements.closeHint.addEventListener('click', () => this.hideModal('hint'));
        this.elements.confirmCancel.addEventListener('click', () => this.hideModal('confirm'));

        // 學生設定相關事件
        this.elements.studentSettingsBtn.addEventListener('click', () => this.openStudentSettings());
        this.elements.closeSettingsBtn.addEventListener('click', () => this.closeStudentSettings());
        this.elements.cancelSettingsBtn.addEventListener('click', () => this.closeStudentSettings());
        this.elements.studentSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveStudentSettings();
        });
    },

    /**
     * 隱藏載入畫面
     */
    hideLoading() {
        setTimeout(() => {
            this.elements.loadingScreen.classList.add('hide');
            this.elements.app.classList.remove('hidden');
        }, 1500);
    },

    /**
     * 初始化主題
     */
    initTheme() {
        const theme = StorageService.getTheme();
        this.setTheme(theme);
    },

    /**
     * 設置主題
     */
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = this.elements.themeToggle.querySelector('.theme-icon');
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        StorageService.setTheme(theme);
    },

    /**
     * 切換主題
     */
    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    // ===== 學生設定處理 =====

    /**
     * 載入學生設定
     */
    loadStudentProfile() {
        const profile = StorageService.getStudentProfile();
        if (profile) {
            this.state.studentProfile = profile;

            // 自動套用年級與學期
            this.state.selectedGrade = profile.grade;
            this.state.selectedSemester = profile.semester;

            // 隱藏年級與學期選擇，直接顯示科目選擇
            this.elements.gradeSelector.closest('.selector-group').style.display = 'none';
            this.elements.semesterGroup.style.display = 'none';

            // 更新 UI 顯示科目選擇
            this.elements.subjectGroup.style.display = 'block';

            // 更新歡迎訊息
            const welcomeTitle = document.querySelector('.welcome-title');
            if (welcomeTitle) {
                const semesterText = profile.semester === '1' ? '上學期' : '下學期';
                welcomeTitle.innerHTML = `
                    <span class="title-line">Hi, ${profile.name} (${profile.grade}年級${semesterText})</span>
                    <span class="title-highlight">快樂學習王</span>
                `;
            }

            this.updateCurrentSelection();
        }
    },

    /**
     * 打開學生設定 Modal
     */
    openStudentSettings() {
        const profile = StorageService.getStudentProfile() || {
            name: '',
            grade: '1',
            semester: '1',
            publishers: { chinese: '', math: '', english: '' }
        };

        // 填入表單
        this.elements.settingName.value = profile.name;
        this.elements.settingGrade.value = profile.grade;
        this.elements.settingSemester.value = profile.semester;
        this.elements.settingDefaultExam.value = profile.defaultExam || '';
        this.elements.settingChinesePub.value = profile.publishers?.chinese || '';
        this.elements.settingMathPub.value = profile.publishers?.math || '';
        this.elements.settingEnglishPub.value = profile.publishers?.english || '';
        this.elements.settingSciencePub.value = profile.publishers?.science || '';
        this.elements.settingSocialPub.value = profile.publishers?.social || '';

        this.elements.studentSettingsModal.classList.add('active');
    },

    /**
     * 關閉學生設定 Modal
     */
    closeStudentSettings() {
        this.elements.studentSettingsModal.classList.remove('active');
    },

    /**
     * 儲存學生設定
     */
    saveStudentSettings() {
        const profile = {
            name: this.elements.settingName.value.trim() || '小朋友',
            grade: this.elements.settingGrade.value,
            semester: this.elements.settingSemester.value,
            defaultExam: this.elements.settingDefaultExam.value,
            publishers: {
                chinese: this.elements.settingChinesePub.value,
                math: this.elements.settingMathPub.value,
                english: this.elements.settingEnglishPub.value,
                science: this.elements.settingSciencePub.value,
                social: this.elements.settingSocialPub.value
            }
        };

        StorageService.saveStudentProfile(profile);
        this.state.studentProfile = profile;

        this.closeStudentSettings();

        // 重新載入以套用設定（這會重置當前狀態）
        window.location.reload();
    },

    // ===== 選擇器處理 =====

    /**
     * 選擇年級
     */
    selectGrade(grade) {
        this.state.selectedGrade = grade;
        this.updateSelectorUI('grade', grade);

        // 顯示學期選擇
        this.elements.semesterGroup.style.display = 'block';
        this.elements.semesterGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });

        this.updateCurrentSelection();
    },

    /**
     * 選擇學期
     */
    selectSemester(semester) {
        this.state.selectedSemester = semester;
        this.updateSelectorUI('semester', semester);

        // 顯示科目選擇
        this.elements.subjectGroup.style.display = 'block';
        this.elements.subjectGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });

        this.updateCurrentSelection();
    },

    /**
     * 選擇科目
     */
    selectSubject(subject) {
        this.state.selectedSubject = subject;
        this.updateSelectorUI('subject', subject);

        // 檢查是否有學生設定的預設出版社
        const profile = this.state.studentProfile;
        let defaultPublisher = null;

        if (profile && profile.publishers && profile.publishers[subject]) {
            defaultPublisher = profile.publishers[subject];
        }

        if (defaultPublisher) {
            // 如果有預設出版社，自動選擇並跳過出版社選擇步驟
            console.log(`[AutoSelect] Using default publisher for ${subject}: ${defaultPublisher}`);
            this.selectPublisher(defaultPublisher);
        } else {
            // 否則顯示出版社選擇
            this.elements.publisherGroup.style.display = 'block';
            this.elements.publisherGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        this.updateCurrentSelection();
    },

    /**
     * 選擇出版社
     */
    selectPublisher(publisher) {
        this.state.selectedPublisher = publisher;
        this.updateSelectorUI('publisher', publisher);

        // 檢查是否有預設考試範圍
        const profile = this.state.studentProfile;
        if (profile && profile.defaultExam) {
            console.log(`[AutoSelect] Using default exam scope: ${profile.defaultExam}`);
            this.selectExam(profile.defaultExam);
        } else {
            // 否則顯示考試範圍選擇
            this.elements.examGroup.style.display = 'block';
            this.elements.examGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        this.updateCurrentSelection();
    },

    /**
     * 選擇考試範圍
     */
    selectExam(exam) {
        this.state.selectedExam = exam;
        this.updateSelectorUI('exam', exam);

        // 顯示遊戲類型選擇
        this.elements.gameTypeGroup.style.display = 'block';
        this.elements.gameTypeGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });

        this.updateCurrentSelection();
    },

    /**
     * 選擇遊戲類型
     */
    selectGameType(gameType) {
        this.state.selectedGameType = gameType;
        this.updateSelectorUI('gameType', gameType);

        // 開始遊戲
        setTimeout(() => this.startGame(), 300);
    },

    /**
     * 更新選擇器 UI
     */
    updateSelectorUI(type, value) {
        let selector;
        switch (type) {
            case 'grade':
                selector = this.elements.gradeSelector;
                break;
            case 'semester':
                selector = this.elements.semesterSelector;
                break;
            case 'subject':
                selector = this.elements.subjectSelector;
                break;
            case 'publisher':
                selector = this.elements.publisherSelector;
                break;
            case 'exam':
                selector = this.elements.examSelector;
                break;
            case 'gameType':
                selector = this.elements.gameTypeSelector;
                break;
        }

        if (selector) {
            selector.querySelectorAll('.selector-btn, .game-type-card').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.value === value);
            });
        }
    },

    /**
     * 更新當前選擇顯示
     */
    updateCurrentSelection() {
        const { selectedGrade, selectedSemester, selectedSubject, selectedPublisher, selectedExam } = this.state;

        if (selectedGrade) {
            this.elements.currentSelection.style.display = 'flex';
            this.elements.selectedGrade.textContent = `${selectedGrade}年級`;
            this.elements.selectedGrade.style.display = 'inline-block';
        }

        if (selectedSemester) {
            this.elements.selectedSemester.textContent = selectedSemester === '1' ? '上學期' : '下學期';
            this.elements.selectedSemester.style.display = 'inline-block';
        } else {
            this.elements.selectedSemester.style.display = 'none';
        }

        if (selectedSubject) {
            this.elements.selectedSubject.textContent = StorageService.getSubjectName(selectedSubject);
            this.elements.selectedSubject.style.display = 'inline-block';
        } else {
            this.elements.selectedSubject.style.display = 'none';
        }

        if (selectedPublisher) {
            this.elements.selectedPublisher.textContent = StorageService.getPublisherName(selectedPublisher);
            this.elements.selectedPublisher.style.display = 'inline-block';
        } else {
            this.elements.selectedPublisher.style.display = 'none';
        }

        if (selectedExam) {
            this.elements.selectedExam.textContent = StorageService.getExamName(selectedExam);
            this.elements.selectedExam.style.display = 'inline-block';
        } else {
            this.elements.selectedExam.style.display = 'none';
        }

        // 更新分隔符顯示
        const dividers = this.elements.currentSelection.querySelectorAll('.selection-divider');
        dividers[0].style.display = selectedSemester ? 'inline' : 'none';
        dividers[1].style.display = selectedSubject ? 'inline' : 'none';
        dividers[2].style.display = selectedPublisher ? 'inline' : 'none';
        dividers[3].style.display = selectedExam ? 'inline' : 'none';
    },

    /**
     * 重置選擇
     */
    resetSelection() {
        this.state.selectedGrade = null;
        this.state.selectedSemester = null;
        this.state.selectedSubject = null;
        this.state.selectedPublisher = null;
        this.state.selectedExam = null;
        this.state.selectedGameType = null;

        // 檢查是否有學生設定，決定重置後的狀態
        const profile = this.state.studentProfile;

        // 隱藏和重置選擇器
        // 如果有學生設定，不要隱藏科目選擇，但隱藏年級與學期
        if (profile) {
            this.state.selectedGrade = profile.grade;
            this.state.selectedSemester = profile.semester;

            this.elements.gradeSelector.closest('.selector-group').style.display = 'none';
            this.elements.semesterGroup.style.display = 'none';
            this.elements.subjectGroup.style.display = 'block';
        } else {
            this.elements.semesterGroup.style.display = 'none';
            this.elements.subjectGroup.style.display = 'none';
        }

        this.elements.publisherGroup.style.display = 'none';
        this.elements.examGroup.style.display = 'none';
        this.elements.gameTypeGroup.style.display = 'none';
        this.elements.currentSelection.style.display = 'none';

        // 移除所有選中狀態
        document.querySelectorAll('.selector-btn, .game-type-card').forEach(btn => {
            btn.classList.remove('selected');
        });

        // 捲動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ===== 遊戲處理 =====

    /**
     * 開始遊戲
     */
    async startGame() {
        const { selectedGrade, selectedSemester, selectedSubject, selectedPublisher, selectedExam, selectedGameType } = this.state;

        // 顯示載入畫面
        this.elements.loadingScreen.classList.remove('hide');
        this.updateLoadingText('正在準備遊戲題目...');

        // 按需載入題庫
        if (typeof SheetLoader !== 'undefined') {
            await SheetLoader.loadQuestionsForGame({
                grade: selectedGrade,
                semester: selectedSemester,
                subject: selectedSubject,
                publisher: selectedPublisher,
                exam: selectedExam
            });

            // 重新初始化 QuestionBank 以使用新載入的資料
            await QuestionBank.init();
        }

        // 用於追蹤是否有題目
        let hasQuestions = true;

        // 設置遊戲引擎回調
        GameEngine.setCallbacks({
            onScoreUpdate: (score) => this.updateScore(score),
            onProgressUpdate: (current, total) => this.updateProgress(current, total),
            onTimerUpdate: (remaining, total) => this.updateTimer(remaining, total),
            onQuestionShow: (question, number) => this.showQuestion(question, number),
            onFeedback: (isCorrect, answer, hint) => this.showFeedback(isCorrect, answer, hint),
            onMatchUpdate: (data) => this.updateMatchGame(data),
            onGameEnd: (result) => this.showResult(result),
            onNoQuestions: () => {
                hasQuestions = false;
                this.showNoQuestionsAlert();
            }
        });

        // 初始化遊戲
        GameEngine.init({
            gameType: selectedGameType,
            grade: selectedGrade,
            semester: selectedSemester,
            subject: selectedSubject,
            publisher: selectedPublisher,
            exam: selectedExam
        });

        // 如果沒有題目，不進入遊戲頁面
        if (!hasQuestions) {
            return;
        }

        // 顯示對應的遊戲區域
        this.showGameArea(selectedGameType);

        // 切換到遊戲頁面
        this.showPage('game');
    },

    /**
     * 顯示遊戲區域
     */
    showGameArea(gameType) {
        // 隱藏所有遊戲區域
        this.elements.quizGame.style.display = 'none';
        this.elements.matchGame.style.display = 'none';
        this.elements.speedGame.style.display = 'none';
        this.elements.timerContainer.style.display = 'none';

        // 顯示對應的遊戲區域
        switch (gameType) {
            case 'quiz':
                this.elements.quizGame.style.display = 'block';
                break;
            case 'match':
                this.elements.matchGame.style.display = 'block';
                break;
            case 'speed':
                this.elements.speedGame.style.display = 'block';
                this.elements.timerContainer.style.display = 'flex';
                break;
        }
    },

    /**
     * 更新分數
     */
    updateScore(score) {
        this.elements.currentScore.textContent = score;
    },

    /**
     * 更新進度
     */
    updateProgress(current, total) {
        this.elements.currentProgress.textContent = `${current}/${total}`;
    },

    /**
     * 更新計時器
     */
    updateTimer(remaining, total) {
        // 更新數字顯示
        this.elements.timerValue.textContent = remaining;
        this.elements.speedTimerText.textContent = remaining;

        // 更新環形進度條
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - remaining / total);
        this.elements.timerRingProgress.style.strokeDashoffset = offset;

        // 根據剩餘時間改變顏色
        this.elements.timerRingProgress.classList.remove('warning', 'danger');
        if (remaining <= 10) {
            this.elements.timerRingProgress.classList.add('danger');
        } else if (remaining <= 20) {
            this.elements.timerRingProgress.classList.add('warning');
        }
    },

    /**
     * 顯示題目
     */
    showQuestion(question, number) {
        if (this.state.selectedGameType === 'speed') {
            // 計時挑戰模式
            this.elements.speedQuestionText.textContent = question.question;
            this.renderSpeedOptions(question);
        } else {
            // 一般選擇題模式
            this.elements.questionNumber.textContent = `第 ${number} 題`;
            this.elements.questionText.textContent = question.question;
            this.elements.questionHint.classList.remove('show');
            this.elements.feedbackArea.style.display = 'none';
            this.renderOptions(question);
        }
    },

    /**
     * 渲染選項
     */
    renderOptions(question) {
        this.elements.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.handleAnswer(option, btn));
            this.elements.optionsContainer.appendChild(btn);
        });
    },

    /**
     * 渲染計時挑戰選項
     */
    renderSpeedOptions(question) {
        this.elements.speedOptionsContainer.innerHTML = '';

        question.options.forEach((option) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.handleSpeedAnswer(option, btn));
            this.elements.speedOptionsContainer.appendChild(btn);
        });
    },

    /**
     * 處理答案
     */
    handleAnswer(answer, btn) {
        const result = GameEngine.answerQuestion(answer);
        if (!result) return;

        // 禁用所有選項
        this.elements.optionsContainer.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            if (b.textContent === result.correctAnswer) {
                b.classList.add('correct');
            }
        });

        if (!result.isCorrect) {
            btn.classList.add('wrong');
        }
    },

    /**
     * 處理計時挑戰答案
     */
    handleSpeedAnswer(answer, btn) {
        const result = GameEngine.speedAnswer(answer);
        if (!result) return;

        // 更新統計
        this.elements.speedCorrect.textContent = GameEngine.state.correct;
        this.elements.speedWrong.textContent = GameEngine.state.wrong;

        // 視覺反饋
        if (result.isCorrect) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('wrong');
        }

        setTimeout(() => {
            btn.classList.remove('correct', 'wrong');
        }, 200);
    },

    /**
     * 顯示回饋
     */
    showFeedback(isCorrect, answer, hint) {
        this.elements.feedbackArea.style.display = 'block';

        const content = this.elements.feedbackArea.querySelector('.feedback-content');
        content.className = 'feedback-content ' + (isCorrect ? 'correct' : 'wrong');

        this.elements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        this.elements.feedbackText.textContent = isCorrect ? '答對了！' : `答錯了！正確答案是：${answer}`;

        if (!isCorrect && hint) {
            this.elements.questionHint.textContent = `💡 ${hint}`;
            this.elements.questionHint.classList.add('show');
        }
    },

    /**
     * 更新配對遊戲
     */
    updateMatchGame(data) {
        this.elements.matchMoves.textContent = data.moves;
        this.elements.matchPairs.textContent = data.matched;
        this.elements.matchTotal.textContent = data.total;

        // 渲染卡片
        this.elements.matchGrid.innerHTML = '';

        data.cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'match-card';
            if (card.isFlipped) cardEl.classList.add('flipped');
            if (card.isMatched) cardEl.classList.add('matched');

            cardEl.innerHTML = `
                <div class="card-front">❓</div>
                <div class="card-back">${card.content}</div>
            `;

            cardEl.addEventListener('click', () => {
                if (!card.isFlipped && !card.isMatched) {
                    GameEngine.flipCard(card.id);
                }
            });

            this.elements.matchGrid.appendChild(cardEl);
        });
    },

    /**
     * 顯示結果
     */
    showResult(result) {
        this.elements.resultIcon.textContent = result.icon;
        this.elements.resultTitle.textContent = result.title;
        this.elements.resultSubtitle.textContent = result.subtitle;
        this.elements.finalScore.textContent = result.score;
        this.elements.accuracyRate.textContent = `${result.accuracy}%`;

        // 時間顯示
        if (result.gameType === 'speed') {
            this.elements.timeStat.style.display = 'none';
        } else {
            this.elements.timeStat.style.display = 'block';
            this.elements.timeUsed.textContent = `${result.timeUsed}秒`;
        }

        // 星星
        const stars = this.elements.resultStars.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('active', index < result.stars);
            if (index < result.stars) {
                star.style.animationDelay = `${index * 0.2}s`;
            }
        });

        this.showPage('result');
    },

    /**
     * 再玩一次
     */
    playAgain() {
        GameEngine.reset();
        this.startGame();
    },

    /**
     * 更換設定
     */
    changeSettings() {
        GameEngine.reset();
        this.resetSelection();
        this.showPage('welcome');
    },

    /**
     * 回到首頁
     */
    goHome() {
        GameEngine.reset();
        this.resetSelection();
        this.showPage('welcome');
    },

    /**
     * 確認返回選單
     */
    confirmBackToMenu() {
        this.showConfirm(
            '確定要離開？',
            '遊戲進度將不會保存。',
            () => {
                GameEngine.reset();
                this.resetSelection();
                this.showPage('welcome');
            }
        );
    },

    // ===== 統計頁面 =====

    /**
     * 顯示統計頁面
     */
    showStatsPage() {
        const stats = StorageService.getStats();
        const history = StorageService.getHistory(10);

        this.elements.totalGames.textContent = stats.totalGames;
        this.elements.totalCorrect.textContent = stats.totalCorrect;
        this.elements.avgAccuracy.textContent = `${StorageService.getAverageAccuracy()}%`;

        // 渲染歷史記錄
        if (history.length === 0) {
            this.elements.historyList.innerHTML = '<div class="history-empty">還沒有遊戲記錄</div>';
        } else {
            this.elements.historyList.innerHTML = history.map(record => `
                <div class="history-item">
                    <div class="history-info">
                        <span class="history-meta">
                            ${record.grade}年級 ${StorageService.getSubjectName(record.subject)} - 
                            ${StorageService.getGameTypeName(record.gameType)}
                        </span>
                        <span class="history-meta">${StorageService.formatDateTime(record.timestamp)}</span>
                    </div>
                    <span class="history-score">${record.score}分 (${record.accuracy}%)</span>
                </div>
            `).join('');
        }

        this.showPage('stats');
    },

    /**
     * 確認清除統計
     */
    confirmClearStats() {
        this.showConfirm(
            '確定要清除？',
            '所有學習記錄將被刪除，此操作無法復原。',
            () => {
                StorageService.clearStats();
                this.showStatsPage();
            }
        );
    },

    // ===== 頁面導航 =====

    /**
     * 顯示頁面
     */
    showPage(pageName) {
        // 隱藏所有頁面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // 顯示目標頁面
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.state.currentPage = pageName;
        }

        // 捲動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ===== 對話框 =====

    /**
     * 顯示無題目提示
     */
    showNoQuestionsAlert() {
        // 先隱藏載入畫面
        this.elements.loadingScreen.classList.add('hide');
        this.showHint('此範圍尚無題目，請選擇其他範圍。');
    },

    /**
     * 顯示提示對話框
     */
    showHint(content) {
        this.elements.hintContent.textContent = content;
        this.elements.hintModal.style.display = 'flex';
        // 確保在 display 變更後觸發 transition
        setTimeout(() => {
            this.elements.hintModal.classList.add('active');
        }, 10);
    },

    /**
     * 顯示確認對話框
     */
    showConfirm(title, content, onConfirm) {
        this.elements.confirmTitle.textContent = title;
        this.elements.confirmContent.textContent = content;
        this.elements.confirmModal.style.display = 'flex';

        setTimeout(() => {
            this.elements.confirmModal.classList.add('active');
        }, 10);

        // 移除舊的事件監聽器
        const newOkBtn = this.elements.confirmOk.cloneNode(true);
        this.elements.confirmOk.parentNode.replaceChild(newOkBtn, this.elements.confirmOk);
        this.elements.confirmOk = newOkBtn;

        // 添加新的事件監聽器
        this.elements.confirmOk.addEventListener('click', () => {
            this.hideModal('confirm');
            if (onConfirm) onConfirm();
        });
    },

    /**
     * 隱藏對話框
     */
    hideModal(type) {
        let modal;
        if (type === 'hint') {
            modal = this.elements.hintModal;
        } else if (type === 'confirm') {
            modal = this.elements.confirmModal;
        }

        if (modal) {
            modal.classList.remove('active');
            // 等待動畫結束後隱藏
            setTimeout(() => {
                modal.style.display = 'none';
            }, 400);
        }
    }
};

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
