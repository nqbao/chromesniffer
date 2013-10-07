var bg = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null,function(tab){
	chrome.extension.sendMessage({msg: "get",tab: tab.id}, function(response){
	
		var display = document.getElementById('app_list'),
			apps = response.apps,
			appinfo = bg.appinfo,
			count = 0;

		for (var appid in apps){
			var app = appinfo[appid] ? appinfo[appid] : {};
			
			// i'm lazy to fill all kind of the information :(
			if (!app.title) app.title = appid;
			if (!app.url) app.url = appinfo[''].url.replace('%s',appid); // it's google one
			if (!app.icon) app.icon = appinfo[''].icon;
			
			if( apps[appid] != "-1"){
				app.title = appid + ' ' + apps[appid];
			}
			
			// use DOM to avoid error
			var link = document.createElement('a');
			link.target = "_blank";
			link.title = app.title;
			link.href = app.url;
			
			var icon = document.createElement('img');
			icon.alt = app.title;
			icon.width = 16;
			icon.height = 16;
			icon.src = "apps/" + app.icon;
			
			link.appendChild(icon);
			display.appendChild(link);
			
			count++;
		}
		
		display.style.width = (count < 8 ? count * 20 : 160) + "px"; // correct the width for better view
	});
});