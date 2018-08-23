# GAS-Youtube-Custom-Functions
#### A Youtube Data API v3 implementation as Google Sheets custom functions with Google Apps Script.

***

# Usage
To use these custom functions for Google Sheets ...

## Functions

<dl>
<dt><a href="#applyAPIKey">applyAPIKey()</a></dt>
<dd><p>Run once to apply API key to Script Properties</p>
</dd>
<dt><a href="#getYoutubeID">getYoutubeID()</a></dt>
<dd><p>Source: <a href="https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url">https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url</a></p>
</dd>
<dt><a href="#videoPart">videoPart()</a></dt>
<dd><p>Available &quot;part&quot; Parameters:
snippet, statistics</p>
</dd>
<dt><a href="#checkPartValidation">checkPartValidation(partParam)</a> ⇒</dt>
<dd><p>Function to check if passed parameter is a valid parameter</p>
</dd>
<dt><a href="#getYoutubeInfo">getYoutubeInfo(videoID)</a> ⇒</dt>
<dd><p>Retrieves custom Youtube information</p>
</dd>
<dt><a href="#youtubeVideoPubDate">youtubeVideoPubDate(videoID)</a> ⇒</dt>
<dd><p>Retrieves Youtube Published DateTime</p>
</dd>
<dt><a href="#youtubeVideoTitle">youtubeVideoTitle(videoID)</a> ⇒</dt>
<dd><p>Retrieves Youtube Video Title with ID</p>
</dd>
<dt><a href="#youtubeVideoChannel">youtubeVideoChannel(videoID)</a> ⇒</dt>
<dd><p>Retrieves Youtube Video&#39;s Uploader Channel with ID</p>
</dd>
<dt><a href="#youtubeVideoViews">youtubeVideoViews(videoID)</a> ⇒</dt>
<dd><p>Retrieves Youtube Video Views with ID</p>
</dd>
<dt><a href="#youtubeVideoViewsCache">youtubeVideoViewsCache(videoID)</a> ⇒</dt>
<dd><p>Retrieves Youtube Video Views with ID (Cached)</p>
</dd>
</dl>

<a name="applyAPIKey"></a>

## applyAPIKey()
Run once to apply API key to Script Properties

**Kind**: global function
<a name="getYoutubeID"></a>

## getYoutubeID()
Source: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url

**Kind**: global function
<a name="videoPart"></a>

## videoPart()
snippet, statisticsrameters:

**Kind**: global function
<a name="checkPartValidation"></a>

## checkPartValidation(partParam) ⇒
Function to check if passed parameter is a valid parameter

**Kind**: global function
**Returns**: Boolean if parameter exists in array

| Param | Type | Description |
| --- | --- | --- |
| partParam | <code>string</code> | Parameter to check if its an available parameter. |

<a name="getYoutubeInfo"></a>

## getYoutubeInfo(videoID) ⇒
Retrieves custom Youtube information

**Kind**: global function
**Returns**: Video Info from videoID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | The videoID to retrieve data. |

<a name="youtubeVideoPubDate"></a>

## youtubeVideoPubDate(videoID) ⇒
Retrieves Youtube Published DateTime

**Kind**: global function
**Returns**: Video Publish DateTime from ID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | The videoID to retrieve data. |

<a name="youtubeVideoTitle"></a>

## youtubeVideoTitle(videoID) ⇒
Retrieves Youtube Video Title with ID

**Kind**: global function
**Returns**: Video Title from ID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | the videoID to retrieve data. |

<a name="youtubeVideoChannel"></a>

## youtubeVideoChannel(videoID) ⇒
Retrieves Youtube Video's Uploader Channel with ID

**Kind**: global function
**Returns**: Video Channel from ID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | the videoID to retrieve data. |

<a name="youtubeVideoViews"></a>

## youtubeVideoViews(videoID) ⇒
Retrieves Youtube Video Views with ID

**Kind**: global function
**Returns**: Video Views from ID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | the videoID to retrieve data. |

<a name="youtubeVideoViewsCache"></a>

## youtubeVideoViewsCache(videoID) ⇒
Retrieves Youtube Video Views with ID (Cached)

**Kind**: global function
**Returns**: Video Views from ID
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>string</code> | the videoID to retrieve data. |