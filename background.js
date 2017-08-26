chrome.extension.onRequest.addListener(function(request, sender) {
    returnMessage(request.message)
});

function returnMessage(messageToReturn) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {message: enable});
    });
}

var enable=true;
chrome.browserAction.onClicked.addListener(function (tab) {
    enable = enable ? false : true;
    if(enable){
	    //turn on...
	    chrome.browserAction.setBadgeText({ text: 'ON' });
    }
    else{
	    //turn off...
	    chrome.browserAction.setBadgeText({ text: 'OFF' });
    }
});
