/**
 * Shama website forms -> Google Sheet
 *
 * Adds a row to the "Waitlist", "Partners" or "Ambassadors" tab for every
 * form submitted on shamaapp.com. Tabs and header rows are created the first
 * time each form is used.
 *
 * Setup (once):
 *  1. In the technologiesshama@gmail.com Google account, create a new Google
 *     Sheet, e.g. "Shama website forms".
 *  2. Extensions -> Apps Script. Delete what's there and paste this file.
 *  3. Replace CHANGE_ME below with a long random secret, and save.
 *  4. Deploy -> New deployment -> type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Authorise when asked, then copy the Web app URL.
 *  5. In Vercel (shamaapp -> Settings -> Environment Variables), for
 *     Production and Preview, add:
 *       SHEET_WEBHOOK_URL    = the Web app URL
 *       SHEET_WEBHOOK_SECRET = the same secret as below (type: Secret)
 *     then redeploy.
 *
 * If you edit this script later, use Deploy -> Manage deployments -> edit ->
 * Version: New version, so the URL stays the same.
 */

const SECRET = 'CHANGE_ME';
const TABS = ['Waitlist', 'Partners', 'Ambassadors'];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad request' });
  }
  if (SECRET === 'CHANGE_ME' || data.secret !== SECRET) {
    return json_({ ok: false, error: 'unauthorized' });
  }
  if (TABS.indexOf(data.sheet) === -1 || !data.row || typeof data.row !== 'object') {
    return json_({ ok: false, error: 'bad request' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(data.sheet) || book.insertSheet(data.sheet);
    const keys = Object.keys(data.row);

    if (sheet.getLastRow() === 0) {
      const headers = ['Submitted at'].concat(keys);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Add a column for any field the sheet doesn't have yet.
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    keys.forEach(function (key) {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
        sheet.getRange(1, headers.length).setValue(key).setFontWeight('bold');
      }
    });

    sheet.appendRow(headers.map(function (h) {
      if (h === 'Submitted at') return new Date();
      return safe_(data.row[h]);
    }));
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

// Stop entries like "=HYPERLINK(...)" from running as formulas.
function safe_(value) {
  const text = value == null ? '' : String(value).slice(0, 5000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
