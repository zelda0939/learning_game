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

        const response = {
            questions: getSheetData(ss, 'questions'),
            matching: getSheetData(ss, 'matching'),
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
 * 從工作表取得資料並轉為 JSON 格式
 */
function getSheetData(ss, sheetName) {
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
    }).filter(row => row.id || row.item_a); // 過濾空行
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
