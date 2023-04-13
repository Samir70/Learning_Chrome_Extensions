const bbcURL = "https://www.bbc.co.uk/news/"
function apology() {return alert("While I am able to summarise BBC articles, I don't know how to summarise the whole of an arbitrary page. \n\nPlease select a paragraph you would like summarised.")}
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(bbcURL)) {
        console.log("Background!!!!")
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["./scripts/summariseBBCArticle.js"]
        })
    } else {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: apology
        })

    }

})