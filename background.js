chrome.browserAction.setBadgeText({ text: 'OFF'});
//Listening for message
chrome.extension.onRequest.addListener(function(request, sender) {
    returnMessage(request.message)
});

//Returning enable as message
function returnMessage(messageToReturn) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {message: enable});
    });
}

var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
    enable = enable ? false : true;
    if(enable){
	    //Setting status text. Nothing displayed for on. 
        chrome.browserAction.setBadgeText({ text: '' });
    }
    else{
	    chrome.browserAction.setBadgeText({ text: 'OFF' });
    }
});