chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle();
    }
})

var sideBarOpen = false;
var textToSend = document.documentElement.outerHTML;

//var iframe = document.createElement('iframe'); 
var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("sidebar.html");
iframe.id = "wmwIframe"
iframe.onload = function () {
    var win = document.getElementById("wmwIframe").contentWindow;
    win.postMessage({window_message: "summarizeTab", txt: textToSend}, "*");
}

document.body.appendChild(iframe);


function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="35%";
        sideBarOpen = true;
    }
    else{
        iframe.style.width="0px";
        sideBarOpen = false;
    }
}
