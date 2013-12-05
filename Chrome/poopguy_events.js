chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({
        code: 'startPooping();'
    });
});

chrome.omnibox.onInputEntered.addListener(function(text, disposition){
    chrome.tabs.executeScript({
        code: 'startPooping();'
    });
});