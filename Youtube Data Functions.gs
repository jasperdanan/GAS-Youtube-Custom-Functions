/**
 * Functions to extract certain information from Youtube Videos with Video ID as parameters
 *
 * Author: Jasper
 * with Help from: Zouva and Meatgrind
 *
 */

/**
 * Run once to apply API key to Script Properties
 *
 */
function applyAPIKey() {
  PropertiesService.getScriptProperties().setProperty('ytApiKey', '{API KEY HERE}');
}

/**
 * Retrieves Youtube Video ID
 *
 * @param {string} url The video URL of the ID to retrieve.
 * @return Video ID from Youtube URL.
 * @customfunction
 */
/** Source: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url **/
function getYoutubeID(url) {
  Utilities.sleep(1000);
  if (url.map) {            // Test whether input is an array.
    return url.map(getYoutubeID); // Recurse over array if so.
  } else {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/; // Regular expression for all possible youtube links' videoID
    var match = url.match(regExp); 
    return (match&&match[7].length==11)? match[7] : false;
  }
}

/* Get certain youtube video information
 * 
 * Part: https://developers.google.com/youtube/v3/getting-started#part
 * Video Overview: https://developers.google.com/youtube/v3/docs/videos
 * Optimization: https://developers.google.com/apps-script/guides/sheets/functions#optimization
 */

//Global Constants
var ytApiKey = PropertiesService.getScriptProperties().getProperty('ytApiKey');
//var snippetURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=";
//var statsURL = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=";

/* === WIP === */

/**
 * "sub function who would do the url thingy for you without needing the same lines everywhere"
 * - Zouva, 2018
 *
 * TODO:
 * - Check if a parameter is passed
 *   Then check if it is an option
 * - Caching service
 *
 */

/* Consolidated Function for URL handling */
/**
 *
 *
 * Available "part" Parameters:
 * snippet, statistics
 *
 */
function videoPart(videoID, partParam){
  if (checkPartValidation(partParam)){ // Calls for parameter validation
    var url = "https://www.googleapis.com/youtube/v3/videos?part=" + partParam; 
    url = url + "&id=" +  videoID + "&key=" + ytApiKey; // Use snippet url with videoID parameter and api key
    var videoListResponse = UrlFetchApp.fetch(url); 
    var json = JSON.parse(videoListResponse.getContentText());
    return json;
  } else {
    console.error("Invalid Paramters");
    throw new Error("Invalid Parameters");
  }

}

/**
 *  Function to check if passed parameter is a valid parameter
 * 
 * @param {string} partParam Parameter to check if its an available parameter.
 * @return Boolean if parameter exists in array
 */
function checkPartValidation(partParam){
  var availablePartParams = [
  "snippet",
  "statistics"
  // Future params
  // contentDetails
  // fileDetails
  // player
  // processingDetails
  // recordingDetails
  // status
  // suggestions
  // topicDetails
  ];

  if (partParam) { // If Function to make sure that the partParam is not empty
    return (availablePartParams.indexOf("partParam") > -1); // Checks if string is in array
  } else {
    return false;
  }
}

 /* For Snippet URLs */
function snippetURL(videoID){
  var url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id="; 
  url = url +  videoID + "&key=" + ytApiKey; // Use snippet url with videoID parameter and api key
  var videoListResponse = UrlFetchApp.fetch(url); 
  var json = JSON.parse(videoListResponse.getContentText());
  return json;
}

/* For Statistics URLs */
function statsURL(videoID){
  var url = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id="; 
  url = url +  videoID + "&key=" + ytApiKey; // Use snippet url with videoID parameter and api key
  var videoListResponse = UrlFetchApp.fetch(url); 
  var json = JSON.parse(videoListResponse.getContentText());
  return json;
}

/**
 * Retrieves custom Youtube information
 *
 * @param {string} videoID The videoID to retrieve data.
 * @return Video Info from videoID
 * @customfunction
 */
function getYoutubeInfo(videoID){
  var array = [];
  snippetURL(videoID);
}

/* === Individual Functions === */
/**
 * Retrieves Youtube Published DateTime
 *
 * @param {string} videoID The videoID to retrieve data.
 * @return Video Publish DateTime from ID
 * @customfunction
 */
function youtubeVideoPubDate(videoID){
  Utilities.sleep(1000);
  if (videoID.map) {            // Test whether input is an array.
    return videoID.map(youtubeVideoPubDate); // Recurse over array if so.
  } else {
    var json = videoPart(videoID, "snippet");
    var stringDateTime = json["items"][0]["snippet"]["publishedAt"]; // Extract publishedAt info
    var dateTime = new Date(stringDateTime); // DateTime string to proper "Date" format
    return dateTime;
  }
}

/**
 * Retrieves Youtube Video Title with ID
 *
 * @param {string} videoID the videoID to retrieve data.
 * @return Video Title from ID
 * @customfunction
 */
function youtubeVideoTitle(videoID){
  Utilities.sleep(1000);
  if (videoID.map) {            // Test whether input is an array.
    return videoID.map(youtubeVideoTitle); // Recurse over array if so.
  } else {
    var json = videoPart(videoID, "snippet");
    return json["items"][0]["snippet"]["title"];
  }
}

/**
 * Retrieves Youtube Video's Uploader Channel with ID
 *
 * @param {string} videoID the videoID to retrieve data.
 * @return Video Channel from ID
 * @customfunction
 */
function youtubeVideoChannel(videoID){
  Utilities.sleep(1000);
  if (videoID.map) {            // Test whether input is an array.
    return videoID.map(youtubeVideoChannel); // Recurse over array if so.
  } else {
    var json = videoPart(videoID, "snippet");
    return json["items"][0]["snippet"]["channelTitle"];
  }
}

/**
 * Retrieves Youtube Video Views with ID
 *
 * @param {string} videoID the videoID to retrieve data.
 * @return Video Views from ID
 * @customfunction
 */
//Source: https://stackoverflow.com/questions/30898351/how-to-get-number-of-video-views-with-youtube-api-into-a-google-spreadsheet
function youtubeVideoViews(videoID){
  Utilities.sleep(1000);
  if (videoID.map) {            // Test whether input is an array.
    return videoID.map(youtubeVideoViews); // Recurse over array if so.
  } else {
    var json = videoPart(videoID, "statistics");
    var numViews = json["items"][0]["statistics"]["viewCount"];
    numViews =+ numViews; // Change string value to integer
    return numViews;
  }
}

/** Test Caching Function with Youtube Views **/
/**
 * Retrieves Youtube Video Views with ID (Cached)
 *
 * @param {string} videoID the videoID to retrieve data.
 * @return Video Views from ID
 * @customfunction
 */
// Note: Cache doesn't store data types(?). For now, convert all needed types in both returns
function youtubeVideoViewsCache(videoID){
  Utilities.sleep(1000);
  if (videoID.map) {    // Test whether input is an array.
    return videoID.map(youtubeVideoViewsCache); // Recurse over array if so
  } else {

    var cache = CacheService.getScriptCache(); 
    var cached = cache.get("viewsCache=" + videoID); // Grab cache
    if (cached != null) {
      cached =+ cached; // cached string to number
      return cached;
    }

    var json = videoPart(videoID, "statistics");
    var contents = json["items"][0]["statistics"]["viewCount"];
    
    cache.put("viewsCache=" + videoID, contents, 600); // Cache for 10 minutes
    
    contents =+ contents; // Change string value to number
    return contents;

  }
}