/**
 * storeViews() will be ran everyday, midnight of Seoul.
 *
 */
//https://stackoverflow.com/questions/21012402/setting-the-timezone-for-timed-triggers
function addTrigger() {
  var everyDay = ScriptApp.newTrigger("storeViews")
    .timeBased()
    .inTimezone('Asia/Seoul')
    .everyDays(1)
    .atHour(0)
    .create();
}

/**
 * Stores view data from Row 6 to new rows for every KST midnight
 *
 * Code by @Casker#0209 from KSI
 */
function storeViews(){
  Logger.log('Store views ran at %s',new Date());
  var sheet = SpreadsheetApp.getActive().getSheetByName('GF YT Data'); /** YT Data **/
  
  var today = new Date();
  var yesterday = new Date(today.getTime()-1*(24*3600*1000));
  
  var formattedDate = Utilities.formatDate(yesterday, "UTC+09:00", "yyyy-MM-dd'T'HH:mm:ss'Z'"); /** UTC+9 (KST) to get yesterday's date **/
  
  var datarange = sheet.getDataRange();
  var numRows = datarange.getNumRows();
  var numCols = datarange.getNumColumns();
  
  var nextRow = numRows + 1;
  var nextCol = numCols + 1;
  var n = 6; /** Which row is "Current" Data in? **/
  
  sheet.getRange(nextRow, 1).setValue(new Date(formattedDate)); /** Inputs date in next empty row, first col **/
  
  for (var i = 2; i <= numCols; i++) {						/** for-loop i = 2(nd) col until i = last col (loop to copy 2nd Col to last Col) **/
      var numRanks = sheet.getRange(n, i).getValue(); 		/** Store current data row starting i = 2 **/
      sheet.getRange(numRows + 1, i).setValue(numRanks);		/** input data into new row **/
      Utilities.sleep(1000);									/** pause in the loop for 1 second (in milliseconds) **/
  }
}