/**
 * Google Apps Script - 學習遊戲題庫 API
 * 
 * 使用說明：
 * 1. 開啟 Google Sheet
 * 2. 建立 "questions" 和 "matching" 工作表並填入資料
 * 3. 點選「擴充功能」→「Apps Script」
 * 4. 將此程式碼貼入並儲存
 * 5. 點選「部署」→「新增部署」
 * 6. 選擇「網頁應用程式」
 * 7. 存取權限設為「任何人」
 * 8. 複製部署 URL
 */

function doGet(e) {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const params = e.parameter || {};

        const response = {
            questions: getSheetData(ss, 'questions', params),
            matching: getSheetData(ss, 'matching', params),
            timestamp: new Date().toISOString()
        };

        return ContentService
            .createTextOutput(JSON.stringify(response))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * 從工作表取得資料並轉為 JSON 格式 (支援篩選)
 */
function getSheetData(ss, sheetName, filters = {}) {
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
        return [];
    }

    const data = sheet.getDataRange().getValues();
    if (data.length < 2) {
        return [];
    }

    const headers = data[0];
    const rows = data.slice(1);

    return rows.map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index];
        });
        return obj;
    }).filter(row => {
        if (!row.id && !row.item_a) return false; // 過濾空行

        // 篩選邏輯
        if (filters.grade && String(row.grade) !== String(filters.grade)) return false;
        if (filters.semester && String(row.semester) !== String(filters.semester)) return false;

        // 科目與出版社只對 "questions" 表進行篩選 (matching 表結構不同)
        if (sheetName === 'questions') {
            if (filters.subject && row.subject !== filters.subject) return false;
            // 如果指定了 publisher 且不是 'all'，且資料列有 publisher 欄位
            if (filters.publisher && filters.publisher !== '' && row.publisher !== filters.publisher) return false;
        } else if (sheetName === 'matching') {
            if (filters.subject && row.subject !== filters.subject) return false;
        }

        // 考試範圍篩選
        if (filters.exam && filters.exam !== 'all') {
            // 如果資料列沒有 exam 欄位或為空，預設視為包含？或嚴格篩選？
            // 這裡假設資料庫均有 exam 欄位。 若篩選 'midterm'，則 row.exam 必須是 'midterm' 或包含 'midterm'？
            // 簡單起見，採精確比對。但需注意 'all' 範圍。
            if (row.exam && row.exam !== filters.exam) return false;
        }

        return true;
    });
}

/**
 * 測試用函數 - 在 Apps Script 執行以查看輸出
 */
function testGetData() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const questions = getSheetData(ss, 'questions');
    const matching = getSheetData(ss, 'matching');

    Logger.log('Questions: ' + questions.length);
    Logger.log('Matching: ' + matching.length);
    Logger.log(JSON.stringify(questions.slice(0, 2)));
}
