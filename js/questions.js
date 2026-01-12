/**
 * 題庫資料模組
 * 包含各年級、科目、出版社的範例題目
 */

const QuestionBank = {
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
        const gradeData = this.data[grade];
        if (!gradeData) {
            console.warn(`年級 ${grade} 無資料，使用預設題庫`);
            return this.getDefaultQuestions(count);
        }

        const subjectData = gradeData[subject];
        if (!subjectData) {
            console.warn(`科目 ${subject} 無資料，使用預設題庫`);
            return this.getDefaultQuestions(count);
        }

        let questions = subjectData[publisher];
        if (!questions || questions.length === 0) {
            console.warn(`出版社 ${publisher} 無資料，使用預設題庫`);
            return this.getDefaultQuestions(count);
        }

        // 根據考試範圍篩選題目
        // 期中考：取前半部分題目
        // 期末考：取後半部分題目
        // 全部範圍：使用所有題目
        if (exam === 'midterm') {
            const midpoint = Math.ceil(questions.length / 2);
            questions = questions.slice(0, midpoint);
        } else if (exam === 'final') {
            const midpoint = Math.floor(questions.length / 2);
            questions = questions.slice(midpoint);
        }
        // exam === 'all' 使用全部題目

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
        // 根據科目生成不同的配對內容
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
            // 預設配對
            return this.shuffle([
                { a: "1+1", b: "2" },
                { a: "2+2", b: "4" },
                { a: "3+3", b: "6" },
                { a: "4+4", b: "8" },
                { a: "5+5", b: "10" },
                { a: "6+6", b: "12" }
            ]).slice(0, pairs);
        }

        let gradeMatch = subjectMatch[grade] || subjectMatch["1"];

        // 根據考試範圍篩選配對
        if (exam === 'midterm') {
            const midpoint = Math.ceil(gradeMatch.length / 2);
            gradeMatch = gradeMatch.slice(0, midpoint);
        } else if (exam === 'final') {
            const midpoint = Math.floor(gradeMatch.length / 2);
            gradeMatch = gradeMatch.slice(midpoint);
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
