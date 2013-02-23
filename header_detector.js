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

(function () {

	var headers = {
		'X-Powered-By': {
			'Ruby on Rails': '/Phusion Passenger/',
			'Express.js': '/Express/'
		}
	}


	for (var t in js_tests) {
		if (t in _apps)
			continue;
		if (js_tests[t]())
			_apps[t] = -1;
	}
})();
