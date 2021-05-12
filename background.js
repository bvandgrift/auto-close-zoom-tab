function maybeClose(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/([a-z0-9.]+).zoom.us\/postattendee\?(.*)/)) {
    setTimeout(function () {
      browser.tabs.remove(tab.id);
    }, 2000);
  }
}

browser.tabs.onUpdated.addListener(maybeClose);
