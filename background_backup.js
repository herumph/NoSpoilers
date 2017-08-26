//chrome.browserAction.onClicked.addListener(function(tab) {
//    chrome.storage.sync.get('state', function(data) {
//	if (data.state === 'on') {
//            chrome.storage.sync.set({state: 'off'});
//            //do something, removing the script or whatever
//	    alert("off")
//	}
//	else {
//            chrome.storage.sync.set({state: 'on'});
//            //inject your script
//	    alert("on")
//	}
//    });
//});


var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
    enable = enable ? false : true;
    if(enable){
	    //turn on...
	    chrome.browserAction.setBadgeText({ text: 'ON' });
	    chrome.tabs.executeScript(null, { file: 'content.js' }); 
    }
    else{
	    //turn off...
	    chrome.browserAction.setBadgeText({ text: 'OFF' });
    }
});
