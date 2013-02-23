/**
 * Chrome AppSniffer by Chieffancypants (forked from Bao Nguyen)
 *
 * Project : https://github.com/chieffancypants/chromesniffer
 * Issues  : https://github.com/chieffancypants/chromesniffer/issues
 *
 * @author chieffancypants <chieffancypants@gmail.com>
 * @license GPLv3
 *
 */

(function(){

	var tabinfo = [];

	// initial list of header detection.  will move this to a separate file later.
	var knownHeaders = {
		'x-powered-by': {
			// 'Ruby on Rails': /Phusion Passenger/,
			'Express.js': /Express/,
			'PHP': /PHP\/?(.*)/,
			'ASP.NET': /ASP\.NET/
		},
		'server': {
			'Apache': /Apache\/?(.*)/,
			'nginx': /nginx\/?(.*)/,
			'IIS': /Microsoft-IIS\/?(.*)/,
		},
		'via': {
			'Varnish': /(.*) varnish/
		}
	}

	// Scans through the headers finding matches, and returning the val from appinfo (apps.js)
	var headerDetector = function (headers) {
		var appsFound = [];

		// loop through all the headers received
		for (var i = headers.length - 1; i >= 0; i--) {
			var apps = knownHeaders[headers[i].name.toLowerCase()];
			if (!apps) {
				continue;
			}
			for (app in apps) {
				var matches = headers[i].value.match(apps[app]);
				if (matches) {
					var version = matches[1] || -1;
					appsFound[app] = version;
				}
			}
		};

		return appsFound;
	};

	// collect apps from header information:
	chrome.webRequest.onHeadersReceived.addListener(
		function (details) {
			var appsFound = headerDetector(details.responseHeaders);
			tabinfo[details.tabId] = tabinfo[details.tabId] || {};
			tabinfo[details.tabId]['headers'] = appsFound;
		},
		{
			urls: ['<all_urls>'],
			types: ['main_frame']
		},
		['responseHeaders']
	);


	chrome.tabs.onRemoved.addListener(function (tabId) {
		// free memory
		delete tabinfo[tabId];
	});

	chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
		// 'result' event issued by main.js once app identification is complete
		if (request.msg == 'result') {
			var thisTab = tabinfo[sender.tab.id];
			thisTab['apps'] = request.apps;

			// load in any apps we discovered from headers:
			for (header in thisTab['headers']) {
				thisTab['apps'][header] = thisTab['headers'][header];
			}

			// change the tab icon
			var mainapp = null;

			for (var app in request.apps) {
				if (mainapp === null) {
					mainapp = app;
					continue;
				}

				if (appinfo[app].priority) {
					if (!appinfo[mainapp].priority) {
						mainapp = app;
					} else if (appinfo[mainapp].priority > appinfo[app].priority) {
						mainapp = app;
					}
				}
			}

			var mainappinfo = appinfo[mainapp];
			if (mainappinfo) { // lazy bug
				if (mainappinfo.title) {
					var apptitle = mainappinfo.title;
				} else {
					var apptitle = mainapp;
				}

				if (request.apps[mainapp] != "-1") {
					apptitle = mainapp + ' ' + request.apps[mainapp];
				}

				chrome.pageAction.setIcon({tabId: sender.tab.id, path: 'apps/' + mainappinfo.icon});
				chrome.pageAction.setTitle({tabId: sender.tab.id, title: apptitle});
			}

			chrome.pageAction.show(sender.tab.id);
			sendResponse({});
		} else if (request.msg == 'get') {
			// Request for 'get' comes from the popup page, asking for the list of apps
			var apps = tabinfo[request.tab];
			sendResponse(apps);
		}
	});


})();