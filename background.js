window.dd = function(msg)
{
	console.log(msg);
}

var tabinfo = {};

chrome.tabs.onRemoved.addListener(function(tabId)
{
	// free memory
	delete tabinfo[tabId];
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.msg == 'result') {
		tabinfo[sender.tab.id] = request.apps;
		
		// change the tab icon
		var mainapp = null;
		
		// TODO: sort or group apps by category
		
		for (var app in request.apps)
		{
			if (mainapp == null) {
				mainapp = app;
				continue;
			}
			
			if (appinfo[app].priority)
			{
				if (!appinfo[mainapp].priority)
				{
					mainapp = app;
				}
				else if (appinfo[mainapp].priority > appinfo[app].priority)
				{
					mainapp = app;
				}
			}
		}

		var mainappinfo = appinfo[mainapp]
		if (mainappinfo) // lazy bug
		{
			if (mainappinfo.title)
			{
				var apptitle = mainappinfo.title
			}
			else
			{
				var apptitle = mainapp
			}
			if (request.apps[mainapp] != "-1")
			{
				apptitle = mainapp + ' ' + request.apps[mainapp]
			}
			chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'apps/' + mainappinfo.icon});
			chrome.pageAction.setTitle({tabId: sender.tab.id, title: apptitle});
		}
		
		chrome.pageAction.show(sender.tab.id);
		sendResponse({});
	} else if (request.msg == 'get') {
		var apps = tabinfo[request.tab];
	
		sendResponse({apps: apps});
	}
});