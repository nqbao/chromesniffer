(function() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.extension.sendMessage({msg: "get", tab: tab.id}, function(response) {
			var bg = chrome.extension.getBackgroundPage();

			var display = document.getElementById('app_list'),
				apps = response.apps,
				html = '',

				appinfo = bg.appinfo,
				count = 0;

			for (var appid in apps) {
				app = appinfo[appid] || {};

				// i'm lazy to fill all kind of the information :(
				if (!app.title) {
					app.title = appid;
				}

				// it's google one
				if (!app.url) {
					app.url = appinfo[''].url.replace('%s', appid);
				}

				if (!app.icon) {
					app.icon = appinfo[''].icon;
				}

				if(apps[appid] != "-1") {
					app.title = appid + ' ' + apps[appid];
				}

				// use DOM to avoid error
				var link = document.createElement('a'),
					icon = document.createElement('img');

				link.target = "_blank";
				link.title = app.title;
				link.href = app.url;

				icon.alt = app.title;
				icon.width = 16;
				icon.height = 16;
				icon.src = "apps/" + app.icon;

				link.appendChild(icon);
				display.appendChild(link);

				count++;
			}
			
			// correct the width for better view
			if (count < 8) {
				display.style.width = (count * 20) + "px";
			}
			else {
				display.style.width = "160px";
			}
		});
	});
})();