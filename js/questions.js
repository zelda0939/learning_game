/**
 * 題庫資料模組
 * 支援從 Google Sheet 載入或使用內建題庫
 */

const QuestionBank = {
    // 遠端資料（由 SheetLoader 載入）
    remoteData: null,
    remoteMatching: null,

    // 是否使用遠端資料
    useRemote: false,

    /**
     * 初始化題庫（從 SheetLoader 取得資料）
     */
    async init() {
        if (typeof SheetLoader !== 'undefined' && SheetLoader.SHEET_URL) {
            const success = await SheetLoader.init();
            if (success && SheetLoader.hasRemoteData()) {
                this.remoteData = SheetLoader.getQuestions();
                this.remoteMatching = SheetLoader.getMatching();
                this.useRemote = true;
                console.log('使用遠端題庫');
                return true;
            }
        }
        console.log('使用內建題庫');
        return false;
    },

    /**
     * 取得目前使用的題庫資料
     */
    get currentData() {
        return this.useRemote && this.remoteData ? this.remoteData : this.data;
    },

    /**
     * 取得目前使用的配對資料
     */
    get currentMatching() {
        return this.useRemote && this.remoteMatching ? this.remoteMatching : null;
    },

    // 內建題庫資料結構（作為備援）
    // 同時作為 SheetLoader 的 fallback
    builtinData: null, // 將在模組載入後設定

    // 題庫資料結構
    data: {
        // 一年級
        "1": {
            // 數學
            math: {
                kangxuan: [
                    {
                        id: "m1-k-001",
                        type: "choice",
                        question: "3 + 2 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "用手指數一數！"
                    },
                    {
                        id: "m1-k-002",
                        type: "choice",
                        question: "8 - 3 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "從8開始往回數3個"
                    },
                    {
                        id: "m1-k-003",
                        type: "choice",
                        question: "哪個數字比較大？5 還是 3？",
                        options: ["3", "5", "一樣大", "不知道"],
                        answer: "5",
                        hint: "想想看誰的蘋果比較多"
                    },
                    {
                        id: "m1-k-004",
                        type: "choice",
                        question: "4 + 4 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "4加4，雙胞胎喔！"
                    },
                    {
                        id: "m1-k-005",
                        type: "choice",
                        question: "10 - 5 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "10的一半是多少？"
                    },
                    {
                        id: "m1-k-006",
                        type: "choice",
                        question: "2 + 6 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "8",
                        hint: "從6開始再數2個"
                    },
                    {
                        id: "m1-k-007",
                        type: "choice",
                        question: "9 - 4 = ?",
                        options: ["3", "4", "5", "6"],
                        answer: "5",
                        hint: "9減掉4個"
                    },
                    {
                        id: "m1-k-008",
                        type: "choice",
                        question: "1 + 7 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "7再加1個"
                    },
                    {
                        id: "m1-k-009",
                        type: "choice",
                        question: "6 - 2 = ?",
                        options: ["2", "3", "4", "5"],
                        answer: "4",
                        hint: "6減掉2個"
                    },
                    {
                        id: "m1-k-010",
                        type: "choice",
                        question: "5 + 3 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "從5開始數3個"
                    }
                ],
                nanyi: [
                    {
                        id: "m1-n-001",
                        type: "choice",
                        question: "2 + 3 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "用手指數一數！"
                    },
                    {
                        id: "m1-n-002",
                        type: "choice",
                        question: "7 - 2 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "從7往回數2個"
                    },
                    {
                        id: "m1-n-003",
                        type: "choice",
                        question: "1 + 6 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "7",
                        hint: "6再加1"
                    },
                    {
                        id: "m1-n-004",
                        type: "choice",
                        question: "9 - 3 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "6",
                        hint: "9減3"
                    },
                    {
                        id: "m1-n-005",
                        type: "choice",
                        question: "4 + 5 = ?",
                        options: ["8", "9", "10", "11"],
                        answer: "9",
                        hint: "差一點就10了！"
                    }
                ],
                hanlin: [
                    {
                        id: "m1-h-001",
                        type: "choice",
                        question: "1 + 4 = ?",
                        options: ["3", "4", "5", "6"],
                        answer: "5",
                        hint: "4加上1"
                    },
                    {
                        id: "m1-h-002",
                        type: "choice",
                        question: "6 - 1 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "6減掉1"
                    },
                    {
                        id: "m1-h-003",
                        type: "choice",
                        question: "3 + 3 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "6",
                        hint: "雙胞胎3！"
                    },
                    {
                        id: "m1-h-004",
                        type: "choice",
                        question: "8 - 2 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "6",
                        hint: "8減2"
                    },
                    {
                        id: "m1-h-005",
                        type: "choice",
                        question: "2 + 7 = ?",
                        options: ["8", "9", "10", "11"],
                        answer: "9",
                        hint: "7加2"
                    }
                ]
            },
            // 國語
            chinese: {
                kangxuan: [
                    {
                        id: "c1-k-001",
                        type: "choice",
                        question: "「大」的相反詞是什麼？",
                        options: ["小", "中", "高", "長"],
                        answer: "小",
                        hint: "大象和螞蟻，誰比較小？"
                    },
                    {
                        id: "c1-k-002",
                        type: "choice",
                        question: "「上」的相反詞是什麼？",
                        options: ["左", "右", "下", "中"],
                        answer: "下",
                        hint: "天空在上面，地面在...？"
                    },
                    {
                        id: "c1-k-003",
                        type: "choice",
                        question: "「日」這個字有幾劃？",
                        options: ["3劃", "4劃", "5劃", "6劃"],
                        answer: "4劃",
                        hint: "太陽的形狀"
                    },
                    {
                        id: "c1-k-004",
                        type: "choice",
                        question: "「月」這個字有幾劃？",
                        options: ["3劃", "4劃", "5劃", "6劃"],
                        answer: "4劃",
                        hint: "月亮彎彎"
                    },
                    {
                        id: "c1-k-005",
                        type: "choice",
                        question: "「快」的相反詞是什麼？",
                        options: ["慢", "急", "跑", "走"],
                        answer: "慢",
                        hint: "烏龜走得...？"
                    }
                ],
                nanyi: [
                    {
                        id: "c1-n-001",
                        type: "choice",
                        question: "「高」的相反詞是什麼？",
                        options: ["矮", "大", "小", "長"],
                        answer: "矮",
                        hint: "長頸鹿很高，老鼠很...？"
                    },
                    {
                        id: "c1-n-002",
                        type: "choice",
                        question: "「開」的相反詞是什麼？",
                        options: ["關", "門", "窗", "入"],
                        answer: "關",
                        hint: "開門和...門"
                    },
                    {
                        id: "c1-n-003",
                        type: "choice",
                        question: "「人」這個字有幾劃？",
                        options: ["1劃", "2劃", "3劃", "4劃"],
                        answer: "2劃",
                        hint: "像兩條腿站著"
                    },
                    {
                        id: "c1-n-004",
                        type: "choice",
                        question: "「山」這個字有幾劃？",
                        options: ["2劃", "3劃", "4劃", "5劃"],
                        answer: "3劃",
                        hint: "三座山峰"
                    },
                    {
                        id: "c1-n-005",
                        type: "choice",
                        question: "「多」的相反詞是什麼？",
                        options: ["少", "無", "有", "夠"],
                        answer: "少",
                        hint: "很多和很...？"
                    }
                ],
                hanlin: [
                    {
                        id: "c1-h-001",
                        type: "choice",
                        question: "「白」的相反詞是什麼？",
                        options: ["黑", "紅", "藍", "綠"],
                        answer: "黑",
                        hint: "白天和黑夜"
                    },
                    {
                        id: "c1-h-002",
                        type: "choice",
                        question: "「前」的相反詞是什麼？",
                        options: ["後", "左", "右", "中"],
                        answer: "後",
                        hint: "前面和...面"
                    },
                    {
                        id: "c1-h-003",
                        type: "choice",
                        question: "「一」這個字有幾劃？",
                        options: ["1劃", "2劃", "3劃", "4劃"],
                        answer: "1劃",
                        hint: "最簡單的數字"
                    },
                    {
                        id: "c1-h-004",
                        type: "choice",
                        question: "「木」這個字有幾劃？",
                        options: ["3劃", "4劃", "5劃", "6劃"],
                        answer: "4劃",
                        hint: "一棵樹"
                    },
                    {
                        id: "c1-h-005",
                        type: "choice",
                        question: "「來」的相反詞是什麼？",
                        options: ["去", "走", "跑", "回"],
                        answer: "去",
                        hint: "過來和過...？"
                    }
                ]
            },
            english: {
                kangxuan: [
                    {
                        id: "e1-k-001",
                        type: "choice",
                        question: "A 的下一個字母是什麼？",
                        options: ["B", "C", "D", "E"],
                        answer: "B",
                        hint: "A, B, C..."
                    },
                    {
                        id: "e1-k-002",
                        type: "choice",
                        question: "apple 是什麼意思？",
                        options: ["蘋果", "香蕉", "橘子", "西瓜"],
                        answer: "蘋果",
                        hint: "紅紅的水果"
                    },
                    {
                        id: "e1-k-003",
                        type: "choice",
                        question: "dog 是什麼意思？",
                        options: ["貓", "狗", "鳥", "魚"],
                        answer: "狗",
                        hint: "汪汪叫"
                    },
                    {
                        id: "e1-k-004",
                        type: "choice",
                        question: "cat 是什麼意思？",
                        options: ["狗", "貓", "兔子", "老鼠"],
                        answer: "貓",
                        hint: "喵喵叫"
                    },
                    {
                        id: "e1-k-005",
                        type: "choice",
                        question: "one 是數字幾？",
                        options: ["1", "2", "3", "4"],
                        answer: "1",
                        hint: "最小的數字"
                    }
                ],
                nanyi: [
                    {
                        id: "e1-n-001",
                        type: "choice",
                        question: "red 是什麼顏色？",
                        options: ["紅色", "藍色", "綠色", "黃色"],
                        answer: "紅色",
                        hint: "蘋果的顏色"
                    },
                    {
                        id: "e1-n-002",
                        type: "choice",
                        question: "blue 是什麼顏色？",
                        options: ["紅色", "藍色", "綠色", "黃色"],
                        answer: "藍色",
                        hint: "天空的顏色"
                    },
                    {
                        id: "e1-n-003",
                        type: "choice",
                        question: "bird 是什麼意思？",
                        options: ["狗", "貓", "鳥", "魚"],
                        answer: "鳥",
                        hint: "會飛的動物"
                    },
                    {
                        id: "e1-n-004",
                        type: "choice",
                        question: "fish 是什麼意思？",
                        options: ["狗", "貓", "鳥", "魚"],
                        answer: "魚",
                        hint: "在水裡游泳"
                    },
                    {
                        id: "e1-n-005",
                        type: "choice",
                        question: "two 是數字幾？",
                        options: ["1", "2", "3", "4"],
                        answer: "2",
                        hint: "一對"
                    }
                ],
                hanlin: [
                    {
                        id: "e1-h-001",
                        type: "choice",
                        question: "book 是什麼意思？",
                        options: ["書", "筆", "桌子", "椅子"],
                        answer: "書",
                        hint: "用來閱讀的"
                    },
                    {
                        id: "e1-h-002",
                        type: "choice",
                        question: "pen 是什麼意思？",
                        options: ["書", "筆", "橡皮擦", "尺"],
                        answer: "筆",
                        hint: "用來寫字的"
                    },
                    {
                        id: "e1-h-003",
                        type: "choice",
                        question: "sun 是什麼意思？",
                        options: ["月亮", "星星", "太陽", "雲"],
                        answer: "太陽",
                        hint: "白天的天空"
                    },
                    {
                        id: "e1-h-004",
                        type: "choice",
                        question: "moon 是什麼意思？",
                        options: ["月亮", "星星", "太陽", "雲"],
                        answer: "月亮",
                        hint: "晚上的天空"
                    },
                    {
                        id: "e1-h-005",
                        type: "choice",
                        question: "three 是數字幾？",
                        options: ["1", "2", "3", "4"],
                        answer: "3",
                        hint: "比2多1"
                    }
                ]
            }
        },
        // 二年級
        "2": {
            math: {
                kangxuan: [
                    {
                        id: "m2-k-001",
                        type: "choice",
                        question: "15 + 8 = ?",
                        options: ["21", "22", "23", "24"],
                        answer: "23",
                        hint: "15+5=20，再加3"
                    },
                    {
                        id: "m2-k-002",
                        type: "choice",
                        question: "24 - 9 = ?",
                        options: ["13", "14", "15", "16"],
                        answer: "15",
                        hint: "24-10=14，再加1"
                    },
                    {
                        id: "m2-k-003",
                        type: "choice",
                        question: "3 × 4 = ?",
                        options: ["10", "11", "12", "13"],
                        answer: "12",
                        hint: "3+3+3+3"
                    },
                    {
                        id: "m2-k-004",
                        type: "choice",
                        question: "2 × 5 = ?",
                        options: ["8", "9", "10", "11"],
                        answer: "10",
                        hint: "5+5"
                    },
                    {
                        id: "m2-k-005",
                        type: "choice",
                        question: "36 + 17 = ?",
                        options: ["51", "52", "53", "54"],
                        answer: "53",
                        hint: "36+14=50，再加3"
                    }
                ],
                nanyi: [
                    {
                        id: "m2-n-001",
                        type: "choice",
                        question: "18 + 7 = ?",
                        options: ["23", "24", "25", "26"],
                        answer: "25",
                        hint: "18+2=20，再加5"
                    },
                    {
                        id: "m2-n-002",
                        type: "choice",
                        question: "32 - 8 = ?",
                        options: ["22", "23", "24", "25"],
                        answer: "24",
                        hint: "32-10=22，再加2"
                    },
                    {
                        id: "m2-n-003",
                        type: "choice",
                        question: "4 × 3 = ?",
                        options: ["10", "11", "12", "13"],
                        answer: "12",
                        hint: "4+4+4"
                    },
                    {
                        id: "m2-n-004",
                        type: "choice",
                        question: "5 × 2 = ?",
                        options: ["8", "9", "10", "11"],
                        answer: "10",
                        hint: "2+2+2+2+2"
                    },
                    {
                        id: "m2-n-005",
                        type: "choice",
                        question: "45 + 28 = ?",
                        options: ["71", "72", "73", "74"],
                        answer: "73",
                        hint: "45+25=70，再加3"
                    }
                ],
                hanlin: [
                    {
                        id: "m2-h-001",
                        type: "choice",
                        question: "19 + 6 = ?",
                        options: ["23", "24", "25", "26"],
                        answer: "25",
                        hint: "19+1=20，再加5"
                    },
                    {
                        id: "m2-h-002",
                        type: "choice",
                        question: "41 - 7 = ?",
                        options: ["32", "33", "34", "35"],
                        answer: "34",
                        hint: "41-1=40，再減6"
                    },
                    {
                        id: "m2-h-003",
                        type: "choice",
                        question: "2 × 6 = ?",
                        options: ["10", "11", "12", "13"],
                        answer: "12",
                        hint: "6+6"
                    },
                    {
                        id: "m2-h-004",
                        type: "choice",
                        question: "3 × 3 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "9",
                        hint: "3+3+3"
                    },
                    {
                        id: "m2-h-005",
                        type: "choice",
                        question: "27 + 35 = ?",
                        options: ["60", "61", "62", "63"],
                        answer: "62",
                        hint: "27+33=60，再加2"
                    }
                ]
            },
            chinese: {
                kangxuan: [
                    {
                        id: "c2-k-001",
                        type: "choice",
                        question: "「學」的部首是什麼？",
                        options: ["子", "宀", "爻", "冖"],
                        answer: "子",
                        hint: "在字的下面"
                    },
                    {
                        id: "c2-k-002",
                        type: "choice",
                        question: "「明」這個字是由哪兩個字組成？",
                        options: ["日＋月", "日＋目", "目＋月", "日＋日"],
                        answer: "日＋月",
                        hint: "太陽和月亮都很亮"
                    },
                    {
                        id: "c2-k-003",
                        type: "choice",
                        question: "「美麗」的相反詞是什麼？",
                        options: ["醜陋", "漂亮", "好看", "可愛"],
                        answer: "醜陋",
                        hint: "公主美麗，巫婆...？"
                    },
                    {
                        id: "c2-k-004",
                        type: "choice",
                        question: "「安靜」的相反詞是什麼？",
                        options: ["吵鬧", "平靜", "安全", "寧靜"],
                        answer: "吵鬧",
                        hint: "圖書館要安靜，公園很...？"
                    },
                    {
                        id: "c2-k-005",
                        type: "choice",
                        question: "「林」的部首是什麼？",
                        options: ["木", "森", "树", "果"],
                        answer: "木",
                        hint: "兩棵樹"
                    }
                ],
                nanyi: [
                    {
                        id: "c2-n-001",
                        type: "choice",
                        question: "「看」的部首是什麼？",
                        options: ["目", "手", "見", "目"],
                        answer: "目",
                        hint: "用眼睛看"
                    },
                    {
                        id: "c2-n-002",
                        type: "choice",
                        question: "「休」這個字是由哪兩個字組成？",
                        options: ["人＋木", "人＋林", "木＋木", "人＋口"],
                        answer: "人＋木",
                        hint: "人靠在樹下休息"
                    },
                    {
                        id: "c2-n-003",
                        type: "choice",
                        question: "「勇敢」的相反詞是什麼？",
                        options: ["膽小", "勇猛", "厲害", "強壯"],
                        answer: "膽小",
                        hint: "獅子勇敢，老鼠...？"
                    },
                    {
                        id: "c2-n-004",
                        type: "choice",
                        question: "「乾淨」的相反詞是什麼？",
                        options: ["骯髒", "整齊", "清潔", "鬆軟"],
                        answer: "骯髒",
                        hint: "洗完手很乾淨，玩沙後很...？"
                    },
                    {
                        id: "c2-n-005",
                        type: "choice",
                        question: "「河」的部首是什麼？",
                        options: ["水", "氵", "可", "口"],
                        answer: "氵",
                        hint: "三點水"
                    }
                ],
                hanlin: [
                    {
                        id: "c2-h-001",
                        type: "choice",
                        question: "「花」的部首是什麼？",
                        options: ["艹", "化", "木", "口"],
                        answer: "艹",
                        hint: "草字頭"
                    },
                    {
                        id: "c2-h-002",
                        type: "choice",
                        question: "「森」這個字有幾個「木」？",
                        options: ["1個", "2個", "3個", "4個"],
                        answer: "3個",
                        hint: "很多樹"
                    },
                    {
                        id: "c2-h-003",
                        type: "choice",
                        question: "「聰明」的相反詞是什麼？",
                        options: ["笨拙", "厲害", "認真", "勤勞"],
                        answer: "笨拙",
                        hint: "智慧型的相反"
                    },
                    {
                        id: "c2-h-004",
                        type: "choice",
                        question: "「寒冷」的相反詞是什麼？",
                        options: ["炎熱", "溫暖", "涼爽", "舒適"],
                        answer: "炎熱",
                        hint: "冬天寒冷，夏天...？"
                    },
                    {
                        id: "c2-h-005",
                        type: "choice",
                        question: "「魚」的部首是什麼？",
                        options: ["魚", "水", "田", "火"],
                        answer: "魚",
                        hint: "自己就是部首"
                    }
                ]
            },
            english: {
                kangxuan: [
                    {
                        id: "e2-k-001",
                        type: "choice",
                        question: "How are you? 的意思是？",
                        options: ["你好嗎？", "再見", "謝謝", "對不起"],
                        answer: "你好嗎？",
                        hint: "問候語"
                    },
                    {
                        id: "e2-k-002",
                        type: "choice",
                        question: "elephant 是什麼動物？",
                        options: ["大象", "長頸鹿", "老虎", "獅子"],
                        answer: "大象",
                        hint: "有長長的鼻子"
                    },
                    {
                        id: "e2-k-003",
                        type: "choice",
                        question: "Monday 是星期幾？",
                        options: ["星期一", "星期二", "星期三", "星期日"],
                        answer: "星期一",
                        hint: "一週的開始"
                    },
                    {
                        id: "e2-k-004",
                        type: "choice",
                        question: "happy 是什麼意思？",
                        options: ["快樂", "難過", "生氣", "害怕"],
                        answer: "快樂",
                        hint: "開心的表情"
                    },
                    {
                        id: "e2-k-005",
                        type: "choice",
                        question: "orange 可以指？",
                        options: ["橘子和橘色", "蘋果", "香蕉", "葡萄"],
                        answer: "橘子和橘色",
                        hint: "水果和顏色"
                    }
                ],
                nanyi: [
                    {
                        id: "e2-n-001",
                        type: "choice",
                        question: "Thank you! 的意思是？",
                        options: ["謝謝", "對不起", "你好", "再見"],
                        answer: "謝謝",
                        hint: "感謝的話"
                    },
                    {
                        id: "e2-n-002",
                        type: "choice",
                        question: "tiger 是什麼動物？",
                        options: ["老虎", "獅子", "豹", "熊"],
                        answer: "老虎",
                        hint: "有條紋的大貓"
                    },
                    {
                        id: "e2-n-003",
                        type: "choice",
                        question: "Sunday 是星期幾？",
                        options: ["星期日", "星期六", "星期一", "星期五"],
                        answer: "星期日",
                        hint: "太陽的日子"
                    },
                    {
                        id: "e2-n-004",
                        type: "choice",
                        question: "sad 是什麼意思？",
                        options: ["難過", "快樂", "生氣", "興奮"],
                        answer: "難過",
                        hint: "哭泣的表情"
                    },
                    {
                        id: "e2-n-005",
                        type: "choice",
                        question: "banana 是什麼水果？",
                        options: ["香蕉", "蘋果", "橘子", "西瓜"],
                        answer: "香蕉",
                        hint: "黃色彎彎的"
                    }
                ],
                hanlin: [
                    {
                        id: "e2-h-001",
                        type: "choice",
                        question: "Good morning! 是什麼意思？",
                        options: ["早安", "午安", "晚安", "再見"],
                        answer: "早安",
                        hint: "早上的問候"
                    },
                    {
                        id: "e2-h-002",
                        type: "choice",
                        question: "rabbit 是什麼動物？",
                        options: ["兔子", "老鼠", "松鼠", "倉鼠"],
                        answer: "兔子",
                        hint: "長耳朵愛吃紅蘿蔔"
                    },
                    {
                        id: "e2-h-003",
                        type: "choice",
                        question: "Friday 是星期幾？",
                        options: ["星期五", "星期四", "星期六", "星期三"],
                        answer: "星期五",
                        hint: "週末前一天"
                    },
                    {
                        id: "e2-h-004",
                        type: "choice",
                        question: "big 的相反詞是？",
                        options: ["small", "tall", "long", "wide"],
                        answer: "small",
                        hint: "大的相反是小"
                    },
                    {
                        id: "e2-h-005",
                        type: "choice",
                        question: "watermelon 是什麼水果？",
                        options: ["西瓜", "哈密瓜", "木瓜", "香瓜"],
                        answer: "西瓜",
                        hint: "綠皮紅肉"
                    }
                ]
            }
        },
        // 三年級
        "3": {
            math: {
                kangxuan: [
                    {
                        id: "m3-k-001",
                        type: "choice",
                        question: "35 + 48 = ?",
                        options: ["73", "83", "93", "103"],
                        answer: "83",
                        hint: "先算個位數：5+8=13，進位1"
                    },
                    {
                        id: "m3-k-002",
                        type: "choice",
                        question: "6 × 7 = ?",
                        options: ["36", "42", "48", "54"],
                        answer: "42",
                        hint: "六七四十二"
                    },
                    {
                        id: "m3-k-003",
                        type: "choice",
                        question: "81 ÷ 9 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "九九八十一"
                    },
                    {
                        id: "m3-k-004",
                        type: "choice",
                        question: "125 + 389 = ?",
                        options: ["504", "514", "524", "534"],
                        answer: "514",
                        hint: "分位計算"
                    },
                    {
                        id: "m3-k-005",
                        type: "choice",
                        question: "8 × 9 = ?",
                        options: ["63", "72", "81", "90"],
                        answer: "72",
                        hint: "八九七十二"
                    }
                ],
                nanyi: [
                    {
                        id: "m3-n-001",
                        type: "choice",
                        question: "47 + 56 = ?",
                        options: ["93", "103", "113", "123"],
                        answer: "103",
                        hint: "7+6=13，進位"
                    },
                    {
                        id: "m3-n-002",
                        type: "choice",
                        question: "7 × 8 = ?",
                        options: ["48", "54", "56", "63"],
                        answer: "56",
                        hint: "七八五十六"
                    },
                    {
                        id: "m3-n-003",
                        type: "choice",
                        question: "63 ÷ 7 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "七九六十三"
                    },
                    {
                        id: "m3-n-004",
                        type: "choice",
                        question: "234 + 567 = ?",
                        options: ["791", "801", "811", "821"],
                        answer: "801",
                        hint: "分位計算並進位"
                    },
                    {
                        id: "m3-n-005",
                        type: "choice",
                        question: "9 × 6 = ?",
                        options: ["48", "54", "56", "63"],
                        answer: "54",
                        hint: "九六五十四"
                    },
                    // === 期末考範圍 ===
                    {
                        id: "m3-n-006",
                        type: "choice",
                        question: "48 ÷ 6 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "六八四十八"
                    },
                    {
                        id: "m3-n-007",
                        type: "choice",
                        question: "1000 - 456 = ?",
                        options: ["534", "544", "554", "564"],
                        answer: "544",
                        hint: "從1000借位減"
                    },
                    {
                        id: "m3-n-008",
                        type: "choice",
                        question: "一天有幾小時？",
                        options: ["12小時", "24小時", "36小時", "48小時"],
                        answer: "24小時",
                        hint: "白天加晚上"
                    },
                    {
                        id: "m3-n-009",
                        type: "choice",
                        question: "56 ÷ 7 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "七八五十六"
                    },
                    {
                        id: "m3-n-010",
                        type: "choice",
                        question: "2/4 等於多少？",
                        options: ["1/2", "1/3", "1/4", "2/3"],
                        answer: "1/2",
                        hint: "約分後的結果"
                    },
                    {
                        id: "m3-n-011",
                        type: "choice",
                        question: "6 × 8 = ?",
                        options: ["42", "48", "54", "56"],
                        answer: "48",
                        hint: "六八四十八"
                    },
                    {
                        id: "m3-n-012",
                        type: "choice",
                        question: "789 + 234 = ?",
                        options: ["1013", "1023", "1033", "1043"],
                        answer: "1023",
                        hint: "分位相加並進位"
                    },
                    {
                        id: "m3-n-013",
                        type: "choice",
                        question: "一公尺等於幾公分？",
                        options: ["10公分", "100公分", "1000公分", "50公分"],
                        answer: "100公分",
                        hint: "1米=100厘米"
                    },
                    {
                        id: "m3-n-014",
                        type: "choice",
                        question: "35 ÷ 5 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "7",
                        hint: "五七三十五"
                    },
                    {
                        id: "m3-n-015",
                        type: "choice",
                        question: "4 × 9 + 3 = ?",
                        options: ["36", "37", "38", "39"],
                        answer: "39",
                        hint: "先乘後加"
                    },
                    {
                        id: "m3-n-016",
                        type: "choice",
                        question: "42 ÷ 6 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "7",
                        hint: "六七四十二"
                    },
                    {
                        id: "m3-n-017",
                        type: "choice",
                        question: "一小時有幾分鐘？",
                        options: ["30分鐘", "60分鐘", "90分鐘", "100分鐘"],
                        answer: "60分鐘",
                        hint: "時針走一圈"
                    },
                    {
                        id: "m3-n-018",
                        type: "choice",
                        question: "3/6 約分後等於多少？",
                        options: ["1/2", "1/3", "2/3", "1/6"],
                        answer: "1/2",
                        hint: "分子分母都除以3"
                    },
                    {
                        id: "m3-n-019",
                        type: "choice",
                        question: "54 ÷ 9 = ?",
                        options: ["5", "6", "7", "8"],
                        answer: "6",
                        hint: "九六五十四"
                    },
                    {
                        id: "m3-n-020",
                        type: "choice",
                        question: "856 - 378 = ?",
                        options: ["468", "478", "488", "498"],
                        answer: "478",
                        hint: "借位減法"
                    },
                    {
                        id: "m3-n-021",
                        type: "choice",
                        question: "7 × 6 = ?",
                        options: ["36", "42", "48", "54"],
                        answer: "42",
                        hint: "六七四十二"
                    },
                    {
                        id: "m3-n-022",
                        type: "choice",
                        question: "1公斤等於幾公克？",
                        options: ["100公克", "500公克", "1000公克", "10000公克"],
                        answer: "1000公克",
                        hint: "千克=1000克"
                    },
                    {
                        id: "m3-n-023",
                        type: "choice",
                        question: "64 ÷ 8 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "八八六十四"
                    },
                    {
                        id: "m3-n-024",
                        type: "choice",
                        question: "5 × 8 - 7 = ?",
                        options: ["31", "32", "33", "34"],
                        answer: "33",
                        hint: "先乘後減"
                    },
                    {
                        id: "m3-n-025",
                        type: "choice",
                        question: "1/4 + 1/4 = ?",
                        options: ["1/2", "2/4", "1/8", "2/8"],
                        answer: "1/2",
                        hint: "同分母分數相加"
                    },
                    {
                        id: "m3-n-026",
                        type: "choice",
                        question: "下午3點是幾時？(24小時制)",
                        options: ["3時", "13時", "15時", "17時"],
                        answer: "15時",
                        hint: "12+3=15"
                    },
                    {
                        id: "m3-n-027",
                        type: "choice",
                        question: "45 ÷ 5 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "五九四十五"
                    },
                    {
                        id: "m3-n-028",
                        type: "choice",
                        question: "正方形有幾條邊？",
                        options: ["3條", "4條", "5條", "6條"],
                        answer: "4條",
                        hint: "四邊形"
                    },
                    {
                        id: "m3-n-029",
                        type: "choice",
                        question: "27 ÷ 3 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "三九二十七"
                    },
                    {
                        id: "m3-n-030",
                        type: "choice",
                        question: "673 + 458 = ?",
                        options: ["1121", "1131", "1141", "1151"],
                        answer: "1131",
                        hint: "分位相加並進位"
                    },
                    {
                        id: "m3-n-031",
                        type: "choice",
                        question: "8 × 7 = ?",
                        options: ["49", "54", "56", "63"],
                        answer: "56",
                        hint: "七八五十六"
                    },
                    {
                        id: "m3-n-032",
                        type: "choice",
                        question: "3/4 和 2/4 哪個大？",
                        options: ["3/4", "2/4", "一樣大", "無法比較"],
                        answer: "3/4",
                        hint: "分母相同比分子"
                    },
                    {
                        id: "m3-n-033",
                        type: "choice",
                        question: "36 ÷ 4 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "四九三十六"
                    },
                    {
                        id: "m3-n-034",
                        type: "choice",
                        question: "一個星期有幾天？",
                        options: ["5天", "6天", "7天", "10天"],
                        answer: "7天",
                        hint: "週一到週日"
                    },
                    {
                        id: "m3-n-035",
                        type: "choice",
                        question: "6 × 9 = ?",
                        options: ["48", "54", "56", "63"],
                        answer: "54",
                        hint: "六九五十四"
                    },
                    {
                        id: "m3-n-036",
                        type: "choice",
                        question: "邊長5公分的正方形，周長是多少？",
                        options: ["15公分", "20公分", "25公分", "10公分"],
                        answer: "20公分",
                        hint: "4 × 5 = 20"
                    },
                    {
                        id: "m3-n-037",
                        type: "choice",
                        question: "81 ÷ 9 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "九九八十一"
                    },
                    {
                        id: "m3-n-038",
                        type: "choice",
                        question: "2 × 7 + 6 = ?",
                        options: ["18", "19", "20", "21"],
                        answer: "20",
                        hint: "先乘後加"
                    },
                    {
                        id: "m3-n-039",
                        type: "choice",
                        question: "4/8 約分後等於多少？",
                        options: ["1/2", "1/4", "2/4", "1/8"],
                        answer: "1/2",
                        hint: "分子分母都除以4"
                    },
                    {
                        id: "m3-n-040",
                        type: "choice",
                        question: "從8:30到9:15經過多少分鐘？",
                        options: ["35分鐘", "45分鐘", "55分鐘", "65分鐘"],
                        answer: "45分鐘",
                        hint: "30+15=45"
                    },
                    {
                        id: "m3-n-041",
                        type: "choice",
                        question: "49 ÷ 7 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "7",
                        hint: "七七四十九"
                    },
                    {
                        id: "m3-n-042",
                        type: "choice",
                        question: "三角形有幾個角？",
                        options: ["2個", "3個", "4個", "5個"],
                        answer: "3個",
                        hint: "三角形"
                    },
                    {
                        id: "m3-n-043",
                        type: "choice",
                        question: "9 × 9 = ?",
                        options: ["72", "81", "90", "99"],
                        answer: "81",
                        hint: "九九八十一"
                    },
                    {
                        id: "m3-n-044",
                        type: "choice",
                        question: "500公克 + 500公克 = ?",
                        options: ["1公斤", "10公斤", "100公克", "1000公克"],
                        answer: "1公斤",
                        hint: "1000公克=1公斤"
                    },
                    {
                        id: "m3-n-045",
                        type: "choice",
                        question: "32 ÷ 4 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "四八三十二"
                    },
                    {
                        id: "m3-n-046",
                        type: "choice",
                        question: "1/3 + 1/3 = ?",
                        options: ["1/3", "2/3", "2/6", "1/6"],
                        answer: "2/3",
                        hint: "同分母分數相加"
                    },
                    {
                        id: "m3-n-047",
                        type: "choice",
                        question: "5 × 7 = ?",
                        options: ["30", "35", "40", "45"],
                        answer: "35",
                        hint: "五七三十五"
                    },
                    {
                        id: "m3-n-048",
                        type: "choice",
                        question: "1000 - 234 = ?",
                        options: ["756", "766", "776", "786"],
                        answer: "766",
                        hint: "借位減法"
                    },
                    {
                        id: "m3-n-049",
                        type: "choice",
                        question: "長方形有幾條邊？",
                        options: ["3條", "4條", "5條", "6條"],
                        answer: "4條",
                        hint: "四邊形"
                    },
                    {
                        id: "m3-n-050",
                        type: "choice",
                        question: "24 ÷ 3 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "8",
                        hint: "三八二十四"
                    },
                    {
                        id: "m3-n-051",
                        type: "choice",
                        question: "6 × 6 = ?",
                        options: ["30", "32", "34", "36"],
                        answer: "36",
                        hint: "六六三十六"
                    },
                    {
                        id: "m3-n-052",
                        type: "choice",
                        question: "3公尺50公分等於幾公分？",
                        options: ["35公分", "305公分", "350公分", "3500公分"],
                        answer: "350公分",
                        hint: "3×100+50=350"
                    },
                    {
                        id: "m3-n-053",
                        type: "choice",
                        question: "72 ÷ 9 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "8",
                        hint: "九八七十二"
                    },
                    {
                        id: "m3-n-054",
                        type: "choice",
                        question: "3 × 8 + 4 = ?",
                        options: ["26", "27", "28", "29"],
                        answer: "28",
                        hint: "先乘後加"
                    },
                    {
                        id: "m3-n-055",
                        type: "choice",
                        question: "2/5 和 3/5 的和是多少？",
                        options: ["4/5", "5/5", "1", "5/10"],
                        answer: "5/5",
                        hint: "2+3=5"
                    },
                    {
                        id: "m3-n-056",
                        type: "choice",
                        question: "40 ÷ 8 = ?",
                        options: ["4", "5", "6", "7"],
                        answer: "5",
                        hint: "八五四十"
                    },
                    {
                        id: "m3-n-057",
                        type: "choice",
                        question: "邊長8公分的正方形，周長是多少？",
                        options: ["24公分", "28公分", "32公分", "36公分"],
                        answer: "32公分",
                        hint: "4 × 8 = 32"
                    },
                    {
                        id: "m3-n-058",
                        type: "choice",
                        question: "7 × 9 = ?",
                        options: ["56", "63", "72", "81"],
                        answer: "63",
                        hint: "七九六十三"
                    },
                    {
                        id: "m3-n-059",
                        type: "choice",
                        question: "上午11:40再過30分鐘是幾點？",
                        options: ["11:70", "12:00", "12:10", "12:20"],
                        answer: "12:10",
                        hint: "40+30=70，進位1小時"
                    },
                    {
                        id: "m3-n-060",
                        type: "choice",
                        question: "28 ÷ 4 = ?",
                        options: ["6", "7", "8", "9"],
                        answer: "7",
                        hint: "四七二十八"
                    }
                ],
                hanlin: [
                    {
                        id: "m3-h-001",
                        type: "choice",
                        question: "58 + 67 = ?",
                        options: ["115", "125", "135", "145"],
                        answer: "125",
                        hint: "8+7=15，進位"
                    },
                    {
                        id: "m3-h-002",
                        type: "choice",
                        question: "5 × 9 = ?",
                        options: ["40", "45", "50", "54"],
                        answer: "45",
                        hint: "五九四十五"
                    },
                    {
                        id: "m3-h-003",
                        type: "choice",
                        question: "72 ÷ 8 = ?",
                        options: ["7", "8", "9", "10"],
                        answer: "9",
                        hint: "八九七十二"
                    },
                    {
                        id: "m3-h-004",
                        type: "choice",
                        question: "456 + 278 = ?",
                        options: ["724", "734", "744", "754"],
                        answer: "734",
                        hint: "分位計算"
                    },
                    {
                        id: "m3-h-005",
                        type: "choice",
                        question: "7 × 7 = ?",
                        options: ["42", "48", "49", "56"],
                        answer: "49",
                        hint: "七七四十九"
                    }
                ]
            },
            chinese: {
                kangxuan: [
                    {
                        id: "c3-k-001",
                        type: "choice",
                        question: "「鳥語花香」形容什麼？",
                        options: ["春天景色", "冬天景色", "秋天景色", "夏天景色"],
                        answer: "春天景色",
                        hint: "鳥兒歌唱，花兒芬芳"
                    },
                    {
                        id: "c3-k-002",
                        type: "choice",
                        question: "「他跑得很快」中的「得」的讀音是？",
                        options: ["ㄉㄜˊ", "ㄉㄜ˙", "ㄉㄟˇ", "ㄉㄧˊ"],
                        answer: "ㄉㄜ˙",
                        hint: "輕聲"
                    },
                    {
                        id: "c3-k-003",
                        type: "choice",
                        question: "「萬紫千紅」形容什麼？",
                        options: ["花朵繽紛", "天空美麗", "海洋遼闊", "山林茂盛"],
                        answer: "花朵繽紛",
                        hint: "很多顏色的花"
                    },
                    {
                        id: "c3-k-004",
                        type: "choice",
                        question: "「專心」的近義詞是什麼？",
                        options: ["用心", "分心", "小心", "擔心"],
                        answer: "用心",
                        hint: "認真的意思"
                    },
                    {
                        id: "c3-k-005",
                        type: "choice",
                        question: "「秋高氣爽」形容什麼季節？",
                        options: ["秋天", "春天", "夏天", "冬天"],
                        answer: "秋天",
                        hint: "天高氣爽的時候"
                    },
                    // === 期末考範圍 ===
                    {
                        id: "c3-k-006",
                        type: "choice",
                        question: "「畫蛇添足」的意思是？",
                        options: ["多此一舉", "做得很好", "很有創意", "努力認真"],
                        answer: "多此一舉",
                        hint: "蛇本來沒有腳"
                    },
                    {
                        id: "c3-k-007",
                        type: "choice",
                        question: "「他高興地跳了起來」中的「地」的用法是？",
                        options: ["修飾動詞", "表示地方", "名詞", "助詞"],
                        answer: "修飾動詞",
                        hint: "副詞＋「地」＋動詞"
                    },
                    {
                        id: "c3-k-008",
                        type: "choice",
                        question: "「井底之蛙」比喻什麼？",
                        options: ["見識淺薄", "游泳很快", "跳得很高", "愛護環境"],
                        answer: "見識淺薄",
                        hint: "只能看到井口那麼大的天空"
                    },
                    {
                        id: "c3-k-009",
                        type: "choice",
                        question: "下列哪個詞語形容天氣很熱？",
                        options: ["驕陽似火", "秋高氣爽", "白雪皚皚", "春暖花開"],
                        answer: "驕陽似火",
                        hint: "太陽像火一樣"
                    },
                    {
                        id: "c3-k-010",
                        type: "choice",
                        question: "「狐假虎威」的「假」是什麼意思？",
                        options: ["借用", "虛假", "放假", "假裝"],
                        answer: "借用",
                        hint: "狐狸借老虎的威風"
                    },
                    {
                        id: "c3-k-011",
                        type: "choice",
                        question: "「這本書很有趣！」用了什麼標點符號？",
                        options: ["驚嘆號", "句號", "問號", "逗號"],
                        answer: "驚嘆號",
                        hint: "表示感嘆的語氣"
                    },
                    {
                        id: "c3-k-012",
                        type: "choice",
                        question: "「風和日麗」形容什麼？",
                        options: ["天氣晴朗", "狂風暴雨", "烏雲密布", "電閃雷鳴"],
                        answer: "天氣晴朗",
                        hint: "風輕輕的，太陽美麗"
                    },
                    {
                        id: "c3-k-013",
                        type: "choice",
                        question: "「亡羊補牢」的意思是？",
                        options: ["及時改正錯誤", "羊不見了", "建造羊圈", "放棄希望"],
                        answer: "及時改正錯誤",
                        hint: "雖然羊丟了，但補好羊圈還來得及"
                    },
                    {
                        id: "c3-k-014",
                        type: "choice",
                        question: "「愉快」的近義詞是？",
                        options: ["快樂", "難過", "生氣", "緊張"],
                        answer: "快樂",
                        hint: "開心的意思"
                    },
                    {
                        id: "c3-k-015",
                        type: "choice",
                        question: "「守信用」的相反是？",
                        options: ["說話不算話", "誠實守信", "認真負責", "勤勞努力"],
                        answer: "說話不算話",
                        hint: "不遵守承諾"
                    },
                    {
                        id: "c3-k-016",
                        type: "choice",
                        question: "「杯弓蛇影」形容什麼？",
                        options: ["疑神疑鬼", "膽大包天", "勇敢無畏", "開心快樂"],
                        answer: "疑神疑鬼",
                        hint: "把影子看成蛇"
                    },
                    {
                        id: "c3-k-017",
                        type: "choice",
                        question: "「目不轉睛」形容什麼？",
                        options: ["專心注視", "閉著眼睛", "左顧右盼", "東張西望"],
                        answer: "專心注視",
                        hint: "眼睛不轉動"
                    },
                    {
                        id: "c3-k-018",
                        type: "choice",
                        question: "「漂亮的衣服」中的「的」是用來？",
                        options: ["修飾名詞", "修飾動詞", "表示程度", "連接句子"],
                        answer: "修飾名詞",
                        hint: "形容詞+「的」+名詞"
                    },
                    {
                        id: "c3-k-019",
                        type: "choice",
                        question: "「拔苗助長」教導我們什麼？",
                        options: ["欲速則不達", "要努力工作", "多多益善", "要有耐心"],
                        answer: "欲速則不達",
                        hint: "把苗拔高反而害死它"
                    },
                    {
                        id: "c3-k-020",
                        type: "choice",
                        question: "「興高采烈」形容什麼？",
                        options: ["非常高興", "非常難過", "非常緊張", "非常害怕"],
                        answer: "非常高興",
                        hint: "興致很高"
                    },
                    {
                        id: "c3-k-021",
                        type: "choice",
                        question: "「刻舟求劍」比喻什麼？",
                        options: ["不知變通", "做事認真", "勤奮好學", "熱心助人"],
                        answer: "不知變通",
                        hint: "在船上刻記號找劍"
                    },
                    {
                        id: "c3-k-022",
                        type: "choice",
                        question: "「濃」的部首是什麼？",
                        options: ["氵", "農", "辰", "厂"],
                        answer: "氵",
                        hint: "三點水"
                    },
                    {
                        id: "c3-k-023",
                        type: "choice",
                        question: "「你吃飯了嗎？」用了什麼標點符號？",
                        options: ["問號", "句號", "驚嘆號", "逗號"],
                        answer: "問號",
                        hint: "表示疑問"
                    },
                    {
                        id: "c3-k-024",
                        type: "choice",
                        question: "「一舉兩得」是什麼意思？",
                        options: ["做一件事有兩種收穫", "做兩件事", "失去兩樣東西", "得到很多"],
                        answer: "做一件事有兩種收穫",
                        hint: "一個行動兩個收穫"
                    },
                    {
                        id: "c3-k-025",
                        type: "choice",
                        question: "「快樂」的反義詞是？",
                        options: ["悲傷", "開心", "高興", "歡喜"],
                        answer: "悲傷",
                        hint: "快樂的相反"
                    },
                    {
                        id: "c3-k-026",
                        type: "choice",
                        question: "「他寫得很好」中的「得」是用來？",
                        options: ["表示程度", "修飾名詞", "連接句子", "表示擁有"],
                        answer: "表示程度",
                        hint: "動詞+「得」+程度"
                    },
                    {
                        id: "c3-k-027",
                        type: "choice",
                        question: "「對牛彈琴」比喻什麼？",
                        options: ["對不懂的人說", "音樂很好聽", "牛很聰明", "彈琴很難"],
                        answer: "對不懂的人說",
                        hint: "牛聽不懂音樂"
                    },
                    {
                        id: "c3-k-028",
                        type: "choice",
                        question: "「勤勞」的近義詞是？",
                        options: ["勤奮", "懶惰", "懶散", "怠惰"],
                        answer: "勤奮",
                        hint: "努力工作的意思"
                    },
                    {
                        id: "c3-k-029",
                        type: "choice",
                        question: "「雪中送炭」形容什麼？",
                        options: ["及時幫助他人", "下雪天燒炭", "天氣寒冷", "送禮物"],
                        answer: "及時幫助他人",
                        hint: "在需要時給予幫助"
                    },
                    {
                        id: "c3-k-030",
                        type: "choice",
                        question: "「蘋果、香蕉、橘子都是水果。」中的「、」叫什麼？",
                        options: ["頓號", "逗號", "句號", "分號"],
                        answer: "頓號",
                        hint: "用於並列的詞語之間"
                    },
                    {
                        id: "c3-k-031",
                        type: "choice",
                        question: "「馬馬虎虎」形容什麼？",
                        options: ["做事不認真", "非常認真", "非常害怕", "非常開心"],
                        answer: "做事不認真",
                        hint: "不仔細"
                    },
                    {
                        id: "c3-k-032",
                        type: "choice",
                        question: "「虎頭蛇尾」形容什麼？",
                        options: ["有始無終", "有頭有尾", "認真負責", "完美結局"],
                        answer: "有始無終",
                        hint: "開頭好結尾差"
                    },
                    {
                        id: "c3-k-033",
                        type: "choice",
                        question: "「健康」的反義詞是？",
                        options: ["生病", "快樂", "運動", "高興"],
                        answer: "生病",
                        hint: "健康的相反"
                    },
                    {
                        id: "c3-k-034",
                        type: "choice",
                        question: "「半途而廢」是什麼意思？",
                        options: ["做事中途放棄", "做事堅持到底", "做事認真", "做事快速"],
                        answer: "做事中途放棄",
                        hint: "走到一半就放棄"
                    },
                    {
                        id: "c3-k-035",
                        type: "choice",
                        question: "「輕輕地走」中的「地」是用來？",
                        options: ["修飾動詞", "表示地方", "修飾名詞", "表示擁有"],
                        answer: "修飾動詞",
                        hint: "副詞+「地」+動詞"
                    },
                    {
                        id: "c3-k-036",
                        type: "choice",
                        question: "「畫龍點睛」是什麼意思？",
                        options: ["關鍵一筆使作品生動", "畫龍很難", "龍的眼睛", "畫畫很好"],
                        answer: "關鍵一筆使作品生動",
                        hint: "點上眼睛龍就活了"
                    },
                    {
                        id: "c3-k-037",
                        type: "choice",
                        question: "「誠實」的反義詞是？",
                        options: ["說謊", "守信", "認真", "勤勞"],
                        answer: "說謊",
                        hint: "誠實的相反"
                    },
                    {
                        id: "c3-k-038",
                        type: "choice",
                        question: "「囫圇吞棗」形容什麼？",
                        options: ["不求甚解", "吃東西慢", "非常了解", "認真學習"],
                        answer: "不求甚解",
                        hint: "整個棗吞下去不咀嚼"
                    },
                    {
                        id: "c3-k-039",
                        type: "choice",
                        question: "「精明」的近義詞是？",
                        options: ["聰明", "愚笨", "糊塗", "遲鈍"],
                        answer: "聰明",
                        hint: "頭腦清楚"
                    },
                    {
                        id: "c3-k-040",
                        type: "choice",
                        question: "「走馬看花」形容什麼？",
                        options: ["觀察不仔細", "騎馬賞花", "非常認真", "仔細觀察"],
                        answer: "觀察不仔細",
                        hint: "騎馬時看花很匆忙"
                    },
                    {
                        id: "c3-k-041",
                        type: "choice",
                        question: "「今天天氣真好啊！」句末應該用什麼標點？",
                        options: ["驚嘆號", "問號", "句號", "頓號"],
                        answer: "驚嘆號",
                        hint: "表示感嘆語氣"
                    },
                    {
                        id: "c3-k-042",
                        type: "choice",
                        question: "「自相矛盾」的典故和什麼有關？",
                        options: ["賣矛又賣盾的人", "打仗", "讀書", "種田"],
                        answer: "賣矛又賣盾的人",
                        hint: "自己說的話互相衝突"
                    },
                    {
                        id: "c3-k-043",
                        type: "choice",
                        question: "「安靜」的反義詞是？",
                        options: ["吵鬧", "寧靜", "平靜", "沉默"],
                        answer: "吵鬧",
                        hint: "安靜的相反"
                    },
                    {
                        id: "c3-k-044",
                        type: "choice",
                        question: "「濫竽充數」比喻什麼？",
                        options: ["沒有真本事卻混在行家裡", "吹笛子很好", "人很多", "音樂好聽"],
                        answer: "沒有真本事卻混在行家裡",
                        hint: "不會吹笛也在樂隊裡"
                    },
                    {
                        id: "c3-k-045",
                        type: "choice",
                        question: "「美麗的花朵」和「認真地學習」哪個用「的」？",
                        options: ["美麗的花朵", "認真地學習", "兩個都用", "兩個都不用"],
                        answer: "美麗的花朵",
                        hint: "形容名詞用「的」"
                    },
                    {
                        id: "c3-k-046",
                        type: "choice",
                        question: "「掩耳盜鈴」比喻什麼？",
                        options: ["自欺欺人", "偷東西", "耳朵很大", "鈴鐺很響"],
                        answer: "自欺欺人",
                        hint: "捂住耳朵偷鈴鐺"
                    },
                    {
                        id: "c3-k-047",
                        type: "choice",
                        question: "「危險」的反義詞是？",
                        options: ["安全", "害怕", "恐怖", "驚嚇"],
                        answer: "安全",
                        hint: "危險的相反"
                    },
                    {
                        id: "c3-k-048",
                        type: "choice",
                        question: "「葉公好龍」比喻什麼？",
                        options: ["表面喜歡實際害怕", "喜歡龍", "龍很可怕", "葉公很勇敢"],
                        answer: "表面喜歡實際害怕",
                        hint: "口頭說喜歡其實不是"
                    },
                    {
                        id: "c3-k-049",
                        type: "choice",
                        question: "「仔細」的近義詞是？",
                        options: ["認真", "馬虎", "粗心", "大意"],
                        answer: "認真",
                        hint: "仔細的意思"
                    },
                    {
                        id: "c3-k-050",
                        type: "choice",
                        question: "「一箭雙鵰」是什麼意思？",
                        options: ["一個行動達成兩個目標", "射箭", "兩隻鳥", "技術好"],
                        answer: "一個行動達成兩個目標",
                        hint: "一支箭射中兩隻鵰"
                    },
                    {
                        id: "c3-k-051",
                        type: "choice",
                        question: "「失敗」的反義詞是？",
                        options: ["成功", "難過", "放棄", "努力"],
                        answer: "成功",
                        hint: "失敗的相反"
                    },
                    {
                        id: "c3-k-052",
                        type: "choice",
                        question: "「打草驚蛇」是什麼意思？",
                        options: ["行動不小心驚動對方", "打蛇", "草很多", "蛇很可怕"],
                        answer: "行動不小心驚動對方",
                        hint: "打草時驚動了蛇"
                    },
                    {
                        id: "c3-k-053",
                        type: "choice",
                        question: "「豐富」的反義詞是？",
                        options: ["貧乏", "充足", "很多", "富有"],
                        answer: "貧乏",
                        hint: "豐富的相反"
                    },
                    {
                        id: "c3-k-054",
                        type: "choice",
                        question: "「望梅止渴」說的是誰的故事？",
                        options: ["曹操", "劉備", "孔子", "孟子"],
                        answer: "曹操",
                        hint: "三國時期的人物"
                    },
                    {
                        id: "c3-k-055",
                        type: "choice",
                        question: "「困難」的反義詞是？",
                        options: ["容易", "艱難", "辛苦", "麻煩"],
                        answer: "容易",
                        hint: "困難的相反"
                    },
                    {
                        id: "c3-k-056",
                        type: "choice",
                        question: "「愚公移山」教導我們什麼？",
                        options: ["有恆心就能成功", "不要搬山", "山太大", "愚公很笨"],
                        answer: "有恆心就能成功",
                        hint: "堅持不懈的精神"
                    },
                    {
                        id: "c3-k-057",
                        type: "choice",
                        question: "「輕」的反義詞是？",
                        options: ["重", "快", "慢", "小"],
                        answer: "重",
                        hint: "輕的相反"
                    },
                    {
                        id: "c3-k-058",
                        type: "choice",
                        question: "「塞翁失馬」的寓意是？",
                        options: ["禍福相依", "馬不見了", "老人很可憐", "騎馬危險"],
                        answer: "禍福相依",
                        hint: "壞事可能變好事"
                    },
                    {
                        id: "c3-k-059",
                        type: "choice",
                        question: "「開始」的反義詞是？",
                        options: ["結束", "繼續", "進行", "持續"],
                        answer: "結束",
                        hint: "開始的相反"
                    },
                    {
                        id: "c3-k-060",
                        type: "choice",
                        question: "「鳥語花香」最適合形容哪個季節？",
                        options: ["春天", "夏天", "秋天", "冬天"],
                        answer: "春天",
                        hint: "鳥兒歌唱花朵盛開"
                    }
                ],
                nanyi: [
                    {
                        id: "c3-n-001",
                        type: "choice",
                        question: "「刻苦耐勞」的意思是？",
                        options: ["努力工作不怕辛苦", "害怕困難", "懶惰不工作", "輕鬆自在"],
                        answer: "努力工作不怕辛苦",
                        hint: "勤勞的意思"
                    },
                    {
                        id: "c3-n-002",
                        type: "choice",
                        question: "「的」和「得」和「地」，哪個用於動詞之後？",
                        options: ["得", "的", "地", "都可以"],
                        answer: "得",
                        hint: "跑「得」快"
                    },
                    {
                        id: "c3-n-003",
                        type: "choice",
                        question: "「五顏六色」形容什麼？",
                        options: ["顏色繽紛", "形狀奇特", "聲音悅耳", "味道香甜"],
                        answer: "顏色繽紛",
                        hint: "很多種顏色"
                    },
                    {
                        id: "c3-n-004",
                        type: "choice",
                        question: "「勤勞」的近義詞是什麼？",
                        options: ["努力", "懶惰", "輕鬆", "疲憊"],
                        answer: "努力",
                        hint: "認真工作的意思"
                    },
                    {
                        id: "c3-n-005",
                        type: "choice",
                        question: "「白雪皚皚」形容什麼季節？",
                        options: ["冬天", "春天", "夏天", "秋天"],
                        answer: "冬天",
                        hint: "雪白的景象"
                    }
                ],
                hanlin: [
                    {
                        id: "c3-h-001",
                        type: "choice",
                        question: "「守株待兔」的寓意是？",
                        options: ["不勞而獲注定失敗", "勤勞才有收穫", "等待是美德", "機會很重要"],
                        answer: "不勞而獲注定失敗",
                        hint: "等著兔子撞樹"
                    },
                    {
                        id: "c3-h-002",
                        type: "choice",
                        question: "「美麗的花園」中的「的」用法正確嗎？",
                        options: ["正確", "應該用「得」", "應該用「地」", "都不對"],
                        answer: "正確",
                        hint: "形容名詞用「的」"
                    },
                    {
                        id: "c3-h-003",
                        type: "choice",
                        question: "「春暖花開」形容什麼？",
                        options: ["春天來了", "夏天炎熱", "秋天涼爽", "冬天寒冷"],
                        answer: "春天來了",
                        hint: "春天的景象"
                    },
                    {
                        id: "c3-h-004",
                        type: "choice",
                        question: "「高興」的近義詞是什麼？",
                        options: ["快樂", "難過", "生氣", "擔心"],
                        answer: "快樂",
                        hint: "開心的意思"
                    },
                    {
                        id: "c3-h-005",
                        type: "choice",
                        question: "「狐假虎威」的意思是？",
                        options: ["借別人的力量嚇唬人", "很聰明", "很勇敢", "很膽小"],
                        answer: "借別人的力量嚇唬人",
                        hint: "狐狸借老虎的威勢"
                    }
                ]
            },
            english: {
                kangxuan: [
                    {
                        id: "e3-k-001",
                        type: "choice",
                        question: "What color is the sky? The sky is ___.",
                        options: ["blue", "red", "green", "yellow"],
                        answer: "blue",
                        hint: "天空的顏色"
                    },
                    {
                        id: "e3-k-002",
                        type: "choice",
                        question: "I ___ a student.",
                        options: ["am", "is", "are", "be"],
                        answer: "am",
                        hint: "I 搭配的 be 動詞"
                    },
                    {
                        id: "e3-k-003",
                        type: "choice",
                        question: "She ___ a teacher.",
                        options: ["is", "am", "are", "be"],
                        answer: "is",
                        hint: "She 搭配的 be 動詞"
                    },
                    {
                        id: "e3-k-004",
                        type: "choice",
                        question: "How many legs does a dog have?",
                        options: ["four", "two", "six", "eight"],
                        answer: "four",
                        hint: "狗有幾隻腳"
                    },
                    {
                        id: "e3-k-005",
                        type: "choice",
                        question: "What do you eat for breakfast?",
                        options: ["bread", "pencil", "book", "desk"],
                        answer: "bread",
                        hint: "早餐吃的食物"
                    },
                    // === 期末考範圍 ===
                    {
                        id: "e3-k-006",
                        type: "choice",
                        question: "He ___ to school every day.",
                        options: ["goes", "go", "going", "went"],
                        answer: "goes",
                        hint: "第三人稱單數動詞要加 s"
                    },
                    {
                        id: "e3-k-007",
                        type: "choice",
                        question: "What ___ is it? It's 3 o'clock.",
                        options: ["time", "color", "day", "name"],
                        answer: "time",
                        hint: "問時間"
                    },
                    {
                        id: "e3-k-008",
                        type: "choice",
                        question: "I like to ___ books.",
                        options: ["read", "reads", "reading", "readed"],
                        answer: "read",
                        hint: "like to + 原形動詞"
                    },
                    {
                        id: "e3-k-009",
                        type: "choice",
                        question: "There ___ three apples on the table.",
                        options: ["are", "is", "am", "be"],
                        answer: "are",
                        hint: "複數名詞用 are"
                    },
                    {
                        id: "e3-k-010",
                        type: "choice",
                        question: "Can you ___ basketball?",
                        options: ["play", "plays", "playing", "played"],
                        answer: "play",
                        hint: "Can 後面接原形動詞"
                    },
                    {
                        id: "e3-k-011",
                        type: "choice",
                        question: "My mother is a ___. She works in a hospital.",
                        options: ["nurse", "teacher", "farmer", "driver"],
                        answer: "nurse",
                        hint: "在醫院工作的人"
                    },
                    {
                        id: "e3-k-012",
                        type: "choice",
                        question: "Do you have a pen? Yes, I ___.",
                        options: ["do", "does", "am", "have"],
                        answer: "do",
                        hint: "Do 問句用 do 回答"
                    },
                    {
                        id: "e3-k-013",
                        type: "choice",
                        question: "Where ___ you from?",
                        options: ["are", "is", "am", "do"],
                        answer: "are",
                        hint: "you 搭配 are"
                    },
                    {
                        id: "e3-k-014",
                        type: "choice",
                        question: "I ___ a big family.",
                        options: ["have", "has", "had", "having"],
                        answer: "have",
                        hint: "I 搭配 have"
                    },
                    {
                        id: "e3-k-015",
                        type: "choice",
                        question: "What is your favorite ___?",
                        options: ["food", "foods", "fooding", "fooded"],
                        answer: "food",
                        hint: "favorite 後接單數名詞"
                    },
                    {
                        id: "e3-k-016",
                        type: "choice",
                        question: "She ___ English every day.",
                        options: ["studies", "study", "studying", "studied"],
                        answer: "studies",
                        hint: "第三人稱單數加 -ies"
                    },
                    {
                        id: "e3-k-017",
                        type: "choice",
                        question: "How ___ are you?",
                        options: ["old", "many", "much", "long"],
                        answer: "old",
                        hint: "問年齡"
                    },
                    {
                        id: "e3-k-018",
                        type: "choice",
                        question: "They ___ students.",
                        options: ["are", "is", "am", "be"],
                        answer: "are",
                        hint: "They 搭配 are"
                    },
                    {
                        id: "e3-k-019",
                        type: "choice",
                        question: "What ___ you like? I like apples.",
                        options: ["do", "does", "is", "are"],
                        answer: "do",
                        hint: "you 用 do"
                    },
                    {
                        id: "e3-k-020",
                        type: "choice",
                        question: "There ___ a cat under the table.",
                        options: ["is", "are", "am", "be"],
                        answer: "is",
                        hint: "單數用 is"
                    },
                    {
                        id: "e3-k-021",
                        type: "choice",
                        question: "___ is your birthday?",
                        options: ["When", "What", "Who", "Where"],
                        answer: "When",
                        hint: "問時間用 When"
                    },
                    {
                        id: "e3-k-022",
                        type: "choice",
                        question: "My father is a ___. He drives a taxi.",
                        options: ["driver", "teacher", "doctor", "farmer"],
                        answer: "driver",
                        hint: "開計程車的人"
                    },
                    {
                        id: "e3-k-023",
                        type: "choice",
                        question: "I ___ hungry now.",
                        options: ["am", "is", "are", "be"],
                        answer: "am",
                        hint: "I 搭配 am"
                    },
                    {
                        id: "e3-k-024",
                        type: "choice",
                        question: "Does she like ice cream? Yes, she ___.",
                        options: ["does", "do", "is", "like"],
                        answer: "does",
                        hint: "Does 問句用 does 回答"
                    },
                    {
                        id: "e3-k-025",
                        type: "choice",
                        question: "___ old is your sister?",
                        options: ["How", "What", "Who", "Where"],
                        answer: "How",
                        hint: "問年齡用 How old"
                    },
                    {
                        id: "e3-k-026",
                        type: "choice",
                        question: "He ___ a nice boy.",
                        options: ["is", "am", "are", "be"],
                        answer: "is",
                        hint: "He 搭配 is"
                    },
                    {
                        id: "e3-k-027",
                        type: "choice",
                        question: "We like to ___ soccer.",
                        options: ["play", "plays", "playing", "played"],
                        answer: "play",
                        hint: "like to + 原形動詞"
                    },
                    {
                        id: "e3-k-028",
                        type: "choice",
                        question: "What ___ this? It's a book.",
                        options: ["is", "are", "am", "do"],
                        answer: "is",
                        hint: "this 是單數"
                    },
                    {
                        id: "e3-k-029",
                        type: "choice",
                        question: "Can he ___ a bike?",
                        options: ["ride", "rides", "riding", "rode"],
                        answer: "ride",
                        hint: "Can 後面接原形動詞"
                    },
                    {
                        id: "e3-k-030",
                        type: "choice",
                        question: "___ is your name?",
                        options: ["What", "How", "When", "Where"],
                        answer: "What",
                        hint: "問名字用 What"
                    },
                    {
                        id: "e3-k-031",
                        type: "choice",
                        question: "The cat is ___ the box.",
                        options: ["in", "on", "at", "to"],
                        answer: "in",
                        hint: "在盒子裡面"
                    },
                    {
                        id: "e3-k-032",
                        type: "choice",
                        question: "She ___ two brothers.",
                        options: ["has", "have", "had", "having"],
                        answer: "has",
                        hint: "第三人稱用 has"
                    },
                    {
                        id: "e3-k-033",
                        type: "choice",
                        question: "It is ___ pencil. (他的)",
                        options: ["his", "he", "him", "her"],
                        answer: "his",
                        hint: "他的所有格"
                    },
                    {
                        id: "e3-k-034",
                        type: "choice",
                        question: "How many ___ do you have?",
                        options: ["books", "book", "bookes", "booked"],
                        answer: "books",
                        hint: "How many 後接複數名詞"
                    },
                    {
                        id: "e3-k-035",
                        type: "choice",
                        question: "The bird is ___ the tree.",
                        options: ["on", "in", "at", "to"],
                        answer: "on",
                        hint: "在樹上"
                    },
                    {
                        id: "e3-k-036",
                        type: "choice",
                        question: "I go to school ___ bus.",
                        options: ["by", "on", "in", "at"],
                        answer: "by",
                        hint: "搭乘交通工具用 by"
                    },
                    {
                        id: "e3-k-037",
                        type: "choice",
                        question: "___ do you live?",
                        options: ["Where", "What", "Who", "When"],
                        answer: "Where",
                        hint: "問地點用 Where"
                    },
                    {
                        id: "e3-k-038",
                        type: "choice",
                        question: "This is ___ apple.",
                        options: ["an", "a", "the", "is"],
                        answer: "an",
                        hint: "母音前用 an"
                    },
                    {
                        id: "e3-k-039",
                        type: "choice",
                        question: "He ___ to swim.",
                        options: ["likes", "like", "liking", "liked"],
                        answer: "likes",
                        hint: "第三人稱單數加 s"
                    },
                    {
                        id: "e3-k-040",
                        type: "choice",
                        question: "What color is the banana? It is ___.",
                        options: ["yellow", "red", "blue", "green"],
                        answer: "yellow",
                        hint: "香蕉的顏色"
                    },
                    {
                        id: "e3-k-041",
                        type: "choice",
                        question: "My mother ___ breakfast every morning.",
                        options: ["makes", "make", "making", "made"],
                        answer: "makes",
                        hint: "第三人稱單數加 s"
                    },
                    {
                        id: "e3-k-042",
                        type: "choice",
                        question: "___ is your teacher?",
                        options: ["Who", "What", "When", "Where"],
                        answer: "Who",
                        hint: "問人用 Who"
                    },
                    {
                        id: "e3-k-043",
                        type: "choice",
                        question: "I have ___ (一個) egg.",
                        options: ["an", "a", "the", "two"],
                        answer: "an",
                        hint: "egg 是母音開頭"
                    },
                    {
                        id: "e3-k-044",
                        type: "choice",
                        question: "The dog ___ fast.",
                        options: ["runs", "run", "running", "ran"],
                        answer: "runs",
                        hint: "第三人稱單數加 s"
                    },
                    {
                        id: "e3-k-045",
                        type: "choice",
                        question: "Can you ___ English?",
                        options: ["speak", "speaks", "speaking", "spoke"],
                        answer: "speak",
                        hint: "Can 後面接原形動詞"
                    },
                    {
                        id: "e3-k-046",
                        type: "choice",
                        question: "It is ___ pen. (她的)",
                        options: ["her", "she", "hers", "he"],
                        answer: "her",
                        hint: "她的所有格"
                    },
                    {
                        id: "e3-k-047",
                        type: "choice",
                        question: "What day is today? It's ___.",
                        options: ["Monday", "January", "morning", "sunny"],
                        answer: "Monday",
                        hint: "問星期幾"
                    },
                    {
                        id: "e3-k-048",
                        type: "choice",
                        question: "There ___ many students in the classroom.",
                        options: ["are", "is", "am", "be"],
                        answer: "are",
                        hint: "複數用 are"
                    },
                    {
                        id: "e3-k-049",
                        type: "choice",
                        question: "I wake up ___ 7 o'clock.",
                        options: ["at", "in", "on", "by"],
                        answer: "at",
                        hint: "時間點用 at"
                    },
                    {
                        id: "e3-k-050",
                        type: "choice",
                        question: "___ she a student? Yes, she is.",
                        options: ["Is", "Are", "Am", "Do"],
                        answer: "Is",
                        hint: "she 搭配 Is"
                    },
                    {
                        id: "e3-k-051",
                        type: "choice",
                        question: "The book is ___ the desk.",
                        options: ["on", "in", "at", "by"],
                        answer: "on",
                        hint: "在桌上"
                    },
                    {
                        id: "e3-k-052",
                        type: "choice",
                        question: "He ___ not like vegetables.",
                        options: ["does", "do", "is", "are"],
                        answer: "does",
                        hint: "第三人稱用 does"
                    },
                    {
                        id: "e3-k-053",
                        type: "choice",
                        question: "This is ___ classroom.",
                        options: ["our", "we", "us", "ours"],
                        answer: "our",
                        hint: "我們的所有格"
                    },
                    {
                        id: "e3-k-054",
                        type: "choice",
                        question: "How is the weather? It is ___.",
                        options: ["sunny", "happy", "hungry", "thirsty"],
                        answer: "sunny",
                        hint: "天氣晴朗"
                    },
                    {
                        id: "e3-k-055",
                        type: "choice",
                        question: "She ___ homework every day.",
                        options: ["does", "do", "doing", "did"],
                        answer: "does",
                        hint: "第三人稱單數"
                    },
                    {
                        id: "e3-k-056",
                        type: "choice",
                        question: "___ are you? I'm fine, thank you.",
                        options: ["How", "What", "Who", "Where"],
                        answer: "How",
                        hint: "問候語"
                    },
                    {
                        id: "e3-k-057",
                        type: "choice",
                        question: "We go to school ___ Monday.",
                        options: ["on", "in", "at", "by"],
                        answer: "on",
                        hint: "星期幾用 on"
                    },
                    {
                        id: "e3-k-058",
                        type: "choice",
                        question: "It is ___ book. (他們的)",
                        options: ["their", "they", "them", "theirs"],
                        answer: "their",
                        hint: "他們的所有格"
                    },
                    {
                        id: "e3-k-059",
                        type: "choice",
                        question: "What time do you ___ up?",
                        options: ["get", "gets", "getting", "got"],
                        answer: "get",
                        hint: "助動詞後用原形"
                    },
                    {
                        id: "e3-k-060",
                        type: "choice",
                        question: "The cat is ___ the chair.",
                        options: ["under", "on", "in", "at"],
                        answer: "under",
                        hint: "在椅子下面"
                    }
                ],
                nanyi: [
                    {
                        id: "e3-n-001",
                        type: "choice",
                        question: "They ___ my friends.",
                        options: ["are", "is", "am", "be"],
                        answer: "are",
                        hint: "They 搭配的 be 動詞"
                    },
                    {
                        id: "e3-n-002",
                        type: "choice",
                        question: "What time is it? It's ___ o'clock.",
                        options: ["three", "third", "tree", "threw"],
                        answer: "three",
                        hint: "數字3"
                    },
                    {
                        id: "e3-n-003",
                        type: "choice",
                        question: "He ___ to school every day.",
                        options: ["goes", "go", "going", "went"],
                        answer: "goes",
                        hint: "第三人稱單數"
                    },
                    {
                        id: "e3-n-004",
                        type: "choice",
                        question: "I like to ___ basketball.",
                        options: ["play", "plays", "playing", "played"],
                        answer: "play",
                        hint: "like to + 原形動詞"
                    },
                    {
                        id: "e3-n-005",
                        type: "choice",
                        question: "This is ___ apple.",
                        options: ["an", "a", "the", "is"],
                        answer: "an",
                        hint: "母音前用 an"
                    }
                ],
                hanlin: [
                    {
                        id: "e3-h-001",
                        type: "choice",
                        question: "We ___ happy.",
                        options: ["are", "is", "am", "be"],
                        answer: "are",
                        hint: "We 搭配的 be 動詞"
                    },
                    {
                        id: "e3-h-002",
                        type: "choice",
                        question: "It is a ___. (書)",
                        options: ["book", "cook", "look", "brook"],
                        answer: "book",
                        hint: "用來閱讀的"
                    },
                    {
                        id: "e3-h-003",
                        type: "choice",
                        question: "She ___ a sister.",
                        options: ["has", "have", "had", "having"],
                        answer: "has",
                        hint: "第三人稱單數"
                    },
                    {
                        id: "e3-h-004",
                        type: "choice",
                        question: "Do you like ice cream? Yes, I ___.",
                        options: ["do", "does", "am", "is"],
                        answer: "do",
                        hint: "回答 Do 開頭的問句"
                    },
                    {
                        id: "e3-h-005",
                        type: "choice",
                        question: "This is ___ book. (我的)",
                        options: ["my", "I", "me", "mine"],
                        answer: "my",
                        hint: "所有格"
                    }
                ]
            }
        }
    },

    /**
     * 取得題目
     * @param {string} grade - 年級
     * @param {string} subject - 科目
     * @param {string} publisher - 出版社
     * @param {string} exam - 考試範圍 (midterm, final, all)
     * @param {number} count - 題目數量
     * @returns {Array} 題目陣列
     */
    getQuestions(grade, subject, publisher, exam = 'all', count = 10) {
        const gradeData = this.currentData[grade];
        if (!gradeData) {
            console.warn(`年級 ${grade} 無資料`);
            return [];
        }

        const subjectData = gradeData[subject];
        if (!subjectData) {
            console.warn(`科目 ${subject} 無資料`);
            return [];
        }

        let questions = subjectData[publisher];
        if (!questions || questions.length === 0) {
            console.warn(`出版社 ${publisher} 無資料`);
            return [];
        }

        // 根據考試範圍篩選題目
        // 使用明確的 exam 欄位篩選
        if (exam !== 'all') {
            questions = questions.filter(q => {
                // 題目的 exam 欄位為 'all' 或與選擇的範圍相符
                return q.exam === 'all' || q.exam === exam;
            });
        }
        // exam === 'all' 使用全部題目

        // 如果篩選後沒有題目
        if (questions.length === 0) {
            console.warn(`選擇的範圍無題目`);
            return [];
        }

        // 隨機打亂並取出指定數量
        const shuffled = this.shuffle([...questions]);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    /**
     * 取得配對遊戲資料
     * @param {string} grade - 年級
     * @param {string} subject - 科目
     * @param {string} publisher - 出版社
     * @param {string} exam - 考試範圍 (midterm, final, all)
     * @param {number} pairs - 配對數量
     * @returns {Array} 配對資料
     */
    getMatchPairs(grade, subject, publisher, exam = 'all', pairs = 6) {
        // 如果有遠端配對資料，優先使用
        if (this.currentMatching && this.currentMatching[subject]) {
            return this._getMatchFromData(this.currentMatching, grade, subject, exam, pairs);
        }

        // 使用內建配對資料
        const matchData = {
            chinese: {
                "1": [
                    { a: "大", b: "小" },
                    { a: "上", b: "下" },
                    { a: "左", b: "右" },
                    { a: "前", b: "後" },
                    { a: "高", b: "矮" },
                    { a: "快", b: "慢" },
                    { a: "多", b: "少" },
                    { a: "開", b: "關" }
                ],
                "2": [
                    { a: "美麗", b: "醜陋" },
                    { a: "勇敢", b: "膽小" },
                    { a: "聰明", b: "笨拙" },
                    { a: "乾淨", b: "骯髒" },
                    { a: "安靜", b: "吵鬧" },
                    { a: "寒冷", b: "炎熱" },
                    { a: "光明", b: "黑暗" },
                    { a: "快樂", b: "難過" }
                ],
                "3": [
                    { a: "春暖花開", b: "春天" },
                    { a: "秋高氣爽", b: "秋天" },
                    { a: "白雪皚皚", b: "冬天" },
                    { a: "驕陽似火", b: "夏天" },
                    { a: "守株待兔", b: "不勞而獲" },
                    { a: "狐假虎威", b: "借勢嚇人" },
                    { a: "井底之蛙", b: "見識淺薄" },
                    { a: "畫蛇添足", b: "多此一舉" }
                ]
            },
            english: {
                "1": [
                    { a: "apple", b: "蘋果" },
                    { a: "dog", b: "狗" },
                    { a: "cat", b: "貓" },
                    { a: "bird", b: "鳥" },
                    { a: "fish", b: "魚" },
                    { a: "book", b: "書" },
                    { a: "sun", b: "太陽" },
                    { a: "moon", b: "月亮" }
                ],
                "2": [
                    { a: "elephant", b: "大象" },
                    { a: "tiger", b: "老虎" },
                    { a: "rabbit", b: "兔子" },
                    { a: "happy", b: "快樂" },
                    { a: "sad", b: "難過" },
                    { a: "Monday", b: "星期一" },
                    { a: "Sunday", b: "星期日" },
                    { a: "Friday", b: "星期五" }
                ],
                "3": [
                    { a: "I am", b: "我是" },
                    { a: "You are", b: "你是" },
                    { a: "He is", b: "他是" },
                    { a: "She is", b: "她是" },
                    { a: "We are", b: "我們是" },
                    { a: "They are", b: "他們是" },
                    { a: "It is", b: "它是" },
                    { a: "This is", b: "這是" }
                ]
            },
            math: {
                "1": [
                    { a: "3+2", b: "5" },
                    { a: "4+4", b: "8" },
                    { a: "6-2", b: "4" },
                    { a: "9-3", b: "6" },
                    { a: "5+3", b: "8" },
                    { a: "7-4", b: "3" },
                    { a: "2+6", b: "8" },
                    { a: "10-5", b: "5" }
                ],
                "2": [
                    { a: "3×4", b: "12" },
                    { a: "2×5", b: "10" },
                    { a: "4×3", b: "12" },
                    { a: "5×2", b: "10" },
                    { a: "2×6", b: "12" },
                    { a: "3×3", b: "9" },
                    { a: "15+8", b: "23" },
                    { a: "24-9", b: "15" }
                ],
                "3": [
                    { a: "6×7", b: "42" },
                    { a: "8×9", b: "72" },
                    { a: "81÷9", b: "9" },
                    { a: "72÷8", b: "9" },
                    { a: "7×8", b: "56" },
                    { a: "63÷7", b: "9" },
                    { a: "5×9", b: "45" },
                    { a: "7×7", b: "49" }
                ]
            }
        };

        const subjectMatch = matchData[subject];
        if (!subjectMatch) {
            // 無此科目的配對資料
            console.warn(`科目 ${subject} 無配對資料`);
            return [];
        }

        let gradeMatch = subjectMatch[grade];
        if (!gradeMatch || gradeMatch.length === 0) {
            // 無此年級的配對資料
            console.warn(`年級 ${grade} 無配對資料`);
            return [];
        }

        // 根據考試範圍篩選配對
        if (exam === 'midterm') {
            const midpoint = Math.ceil(gradeMatch.length / 2);
            gradeMatch = gradeMatch.slice(0, midpoint);
        } else if (exam === 'final') {
            const midpoint = Math.floor(gradeMatch.length / 2);
            gradeMatch = gradeMatch.slice(midpoint);
        }

        // 篩選後無配對資料
        if (gradeMatch.length === 0) {
            console.warn(`選擇的範圍無配對資料`);
            return [];
        }

        return this.shuffle([...gradeMatch]).slice(0, Math.min(pairs, gradeMatch.length));
    },

    /**
     * 預設題庫
     */
    getDefaultQuestions(count) {
        const defaults = [
            {
                id: "default-001",
                type: "choice",
                question: "1 + 1 = ?",
                options: ["1", "2", "3", "4"],
                answer: "2",
                hint: "最簡單的加法"
            },
            {
                id: "default-002",
                type: "choice",
                question: "2 + 2 = ?",
                options: ["2", "3", "4", "5"],
                answer: "4",
                hint: "雙胞胎相加"
            },
            {
                id: "default-003",
                type: "choice",
                question: "3 + 3 = ?",
                options: ["5", "6", "7", "8"],
                answer: "6",
                hint: "三加三"
            },
            {
                id: "default-004",
                type: "choice",
                question: "5 - 2 = ?",
                options: ["2", "3", "4", "5"],
                answer: "3",
                hint: "五減二"
            },
            {
                id: "default-005",
                type: "choice",
                question: "4 + 1 = ?",
                options: ["4", "5", "6", "7"],
                answer: "5",
                hint: "四加一"
            }
        ];
        return defaults.slice(0, Math.min(count, defaults.length));
    },

    /**
     * 從配對資料中取得配對（內部輔助方法）
     */
    _getMatchFromData(matchData, grade, subject, exam, pairs) {
        const subjectMatch = matchData[subject];
        if (!subjectMatch) {
            console.warn(`科目 ${subject} 無配對資料`);
            return [];
        }

        let gradeMatch = subjectMatch[grade];
        if (!gradeMatch || gradeMatch.length === 0) {
            console.warn(`年級 ${grade} 無配對資料`);
            return [];
        }

        // 根據考試範圍篩選配對（使用明確的 exam 欄位）
        if (exam !== 'all') {
            gradeMatch = gradeMatch.filter(m => {
                // 配對的 exam 欄位為 'all' 或與選擇的範圍相符
                return m.exam === 'all' || m.exam === exam;
            });
        }

        if (gradeMatch.length === 0) {
            console.warn(`選擇的範圍無配對資料`);
            return [];
        }

        return this.shuffle([...gradeMatch]).slice(0, Math.min(pairs, gradeMatch.length));
    },

    /**
     * 陣列隨機排序
     */
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuestionBank;
}
