alert("hello")
chrome.browserAction.getBadgeText({}, function(result) {
    alert(typeof(result))
    if(result == 'ON'){
        chrome.tabs.executeScript(null, { code: 'var enabled = 1;'}, function() {
            chrome.tabs.executeScript(null, { file: 'content.js' });
        });
    }
}); 
