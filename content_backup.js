chrome.extension.sendRequest({message: "action"});

var enabled = true
chrome.runtime.onMessage.addListener(
    function(request, sender) {
    var enable = request.message
    if(enable){
        //alert("true")
    }
    else{
        alert("false")
    }
});

alert(typeOf(enabled))
var elements = document.getElementsByTagName('*');

var url = document.URL
var x = url.indexOf("&")
//Getting JSON url
if (x != -1) {
    var new_url = 'https://www.youtube.com/oembed?url='+url.slice(0,x)+'&format=json'
}
else {
    var new_url = 'https://www.youtube.com/oembed?url='+url+'&format=json'
}

//Stolen function from:
//https://stackoverflow.com/a/22790025
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get(new_url));
var title = json_obj.title

//Replacing the title in every document element.
//General outline stolen from Cloud-To-Butt extension. 
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(title, 'No Spoilers!');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
