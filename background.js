
var all_matched_apps = {};

function GetMatchedApps(tab_id) {
  return tab_id in all_matched_apps ? all_matched_apps[tab_id] : [];
}

chrome.tabs.onRemoved.addListener(function(tab_id) {
  if (tab_id in all_matched_apps) {
    delete all_matched_apps[tab_id];
  }
});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if ('matched_apps' in request) {
      // TODO: sort or group apps by category.
      all_matched_apps[sender.tab.id] = request.matched_apps;
      var top_app = request.matched_apps[0];
      chrome.pageAction.setIcon({tabId: sender.tab.id, path: top_app.icon});
      chrome.pageAction.setTitle({tabId: sender.tab.id, title: top_app.title});
      chrome.pageAction.show(sender.tab.id);
    }
    sendResponse({});
  }
);
