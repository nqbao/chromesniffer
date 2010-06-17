/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

(function(){
	var meta = document.getElementById('chromesniffer_meta');
	
	if (meta) {
		var apps = {};
		var count = 0;
		
		var raw = meta.content.split("&");
		
		for (var i in raw) {
			var piece = raw[i].split("=");
			
			if (piece.length != 2) continue;
			piece[0] = decodeURIComponent(piece[0]);
			piece[1] = decodeURIComponent(piece[1]);
			
			// temporary hack
			apps[piece[0]] = piece[1];
			count++;
		}
		
		if (count > 0) {
			chrome.extension.sendRequest({msg: "result",apps: apps}, function(response) {
				// nothing
			});
		}
	}
})();