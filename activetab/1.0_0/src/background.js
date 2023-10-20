// If chrome, if the extension icon is clicked, new tab opens
//if (chrome) {
//  chrome.browserAction.onClicked.addListener(() =>
//    chrome.tabs.create({ url: "chrome://newtab" })
//  );
//}

if (typeof browser !== 'undefined' && browser.browserAction) {
  browser.browserAction.onClicked.addListener(() =>
    browser.tabs.create({ url: "edge://newtab" })
  );
}
else if (typeof chrome !== 'undefined' && chrome.browserAction) {
  chrome.browserAction.onClicked.addListener(() =>
    chrome.tabs.create({ url: "chrome://newtab" })
  );
}

// This is commented out because it doesn't seem to work in firefox
// else {
//   browser.browserAction.onClicked.addListener(() => {
//     browser.tabs.create({ url });
//   });
// }
