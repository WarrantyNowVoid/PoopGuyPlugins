chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({
        code: 'console.log("click"); startPooping();'
    });
});

chrome.omnibox.onInputEntered.addListener(function(text, disposition){
    chrome.tabs.executeScript({
        code: 'console.log("type"); startPooping();'
    });
});