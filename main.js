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
	var head = document.getElementsByTagName('head')[0];

	if (head) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = chrome.extension.getURL('detector.js');

		var meta = document.createElement('meta');
		meta.name = 'chromesniffer';
		meta.id = 'chromesniffer_meta';
		head.appendChild(meta);
		head.appendChild(script);
	}

	// 'ready' event issued by detector.js
	meta.addEventListener('ready', function(){
		if (meta) {
			var apps = JSON.parse(meta.content);

			if (Object.keys(apps).length > 0) {
				// send 'result' event to the background page with the list of apps
				chrome.extension.sendMessage({msg: "result", apps: apps});
			}
		}
	});

})();