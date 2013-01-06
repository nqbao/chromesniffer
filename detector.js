/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

(function () {
	var isDefined = function(attr) {
		return attr !== void 0;
	}

	var allDefined = function() {
		for (var i = 0; i < arguments.length; i++) {
			if (!isDefined(arguments[i])) {
				return false;
			}
		}
		return true;
	}

	var anyDefined = function() {
		for (var i = 0; i < arguments.length; i++) {
			if (isDefined(arguments[i])) {
				return true;
			}
		}
		return false;
	}

	var getChainValue = function(context, path) {
		var obj = context,
			attrs = path.split('.');

		for (var i = 0; i < attrs.length; i++) {
			obj = obj[attrs[i]];
			if(obj == undefined) {
				break;
			}
		}
		return obj;
	}

	var wGetChainValue = function(path) {
		return getChainValue(window, path);
	}

	var _apps = {},
		doc = document.documentElement,
		name,

	// 1: detect by meta tags, the first matching group will be version
		metas = doc.getElementsByTagName("meta"),
		meta_tests = {
		'generator': {
			'Joomla': /joomla!?\s*([\d\.]+)?/i,
			'vBulletin': /vBulletin\s*(.*)/i,
			'WordPress': /WordPress\s*(.*)/i,
			'XOOPS': /xoops/i,
			'Plone': /plone/i,
			'MediaWiki': /MediaWiki/i,
			'CMSMadeSimple': /CMS Made Simple/i,
			'SilverStripe': /SilverStripe/i,
			'Movable Type': /Movable Type/i,
			'Amiro.CMS': /Amiro/i,
			'Koobi': /koobi/i,
			'bbPress': /bbPress/i,
			'DokuWiki': /dokuWiki/i,
			'TYPO3': /TYPO3/i,
			'PHP-Nuke': /PHP-Nuke/i,
			'DotNetNuke': /DotNetNuke/i,
			'Sitefinity': /Sitefinity\s+(.*)/i,
			'WebGUI': /WebGUI/i,
			'ez Publish': /eZ\s*Publish/i,
			'BIGACE': /BIGACE/i,
			'TypePad': /typepad\.com/i,
			'Blogger': /blogger/i,
			'PrestaShop': /PrestaShop/i,
			'SharePoint': /SharePoint/,
			'JaliosJCMS': /Jalios JCMS/i,
			'ZenCart': /zen-cart/i,
			'WPML': /WPML/i,
			'PivotX': /PivotX/i,
			'OpenACS': /OpenACS/i,
			'AlphaCMS': /alphacms\s+(.*)/i,
			'concrete5': /concrete5 -\s*(.*)$/,
			'Webnode': /Webnode/,
			'GetSimple': /GetSimple/,
			'DataLifeEngine': /DataLife Engine/,
			'ClanSphere': /ClanSphere/
		},
		'copyright': {
			'phpBB': /phpBB/i
		},
		'elggrelease': {
			'Elgg': /.+/
		},
		'powered-by': {
			'Serendipity': /Serendipity/i
		},
		'author': {
			'Avactis': /Avactis Team/i
		}
	};

	for (var idx in metas)
	{
		var m = metas[idx];
		name = m.name ? m.name.toLowerCase() : "";

		if (!meta_tests[name]) continue;

		for (var t in meta_tests[name]) {
			if (t in _apps)
				continue;

			r = meta_tests[name][t].exec(m.content);
			if (r) {
				_apps[t] = r[1] ? r[1] : -1;
			}
		}
	}

	// 2: detect by script tags
	var scripts = doc.getElementsByTagName("script");

	var script_tests = {
		'Google Analytics': /google-analytics.com\/(ga|urchin).js/i,
		'Quantcast': /quantserve\.com\/quant\.js/i,
		'Prototype': /prototype\.js/i,
		'Joomla': /\/components\/com_/,
		'Ubercart': /uc_cart/i,
		'Closure': /\/goog\/base\.js/i,
		'MODx': /\/min\/b=.*f=.*/,
		'MooTools': /mootools/i,
		'Dojo': /dojo(\.xd)?\.js/i,
		'script.aculo.us': /scriptaculous\.js/i,
		'Disqus': /disqus.com\/forums/i,
		'GetSatisfaction': /getsatisfaction\.com\/feedback/i,
		'Wibiya': /wibiya\.com\/Loaders\//i,
		'reCaptcha': /(google\.com\/recaptcha|api\.recaptcha\.net\/)/i,
		'Mollom': /mollom\/mollom\.js/i, // only work on Drupal now
		'ZenPhoto': /zp-core\/js/i,
		'Gallery2': /main\.php\?.*g2_.*/i,
		'AdSense': /pagead\/show_ads\.js/,
		'XenForo': /js\/xenforo\//i,
		'Cappuccino': /Frameworks\/Objective-J\/Objective-J\.js/,
		'Avactis': /\/avactis-themes\//i,
		'Volusion': /a\/j\/javascripts\.js/,
		'AddThis': /addthis\.com\/js/,
		'BuySellAds': /buysellads.com\/.*bsa\.js/,
		'Weebly': /weebly\.com\/weebly\//,
		'Bootstrap': /bootstrap-.*\.js/,
		'Jigsy': /javascripts\/asterion\.js/, // may change later
		'Yola': /analytics\.yola\.net/, // may change later
		'Alfresco': /(alfresco)+(-min)?(\/scripts\/menu)?\.js/ // both Alfresco Share and Explorer apps
	};

	for (var idx in scripts) {
		var s = scripts[idx];

		if (!s.src) {
			continue;
		}

		s = s.src;

		for (var t in script_tests) {
			if (t in _apps) {
				continue;
			}

			if (script_tests[t].test(s)) {
				_apps[t] = -1;
			}
		}
	}

	// 3: detect by domains

	// 4: detect by regexp
	var text = document.documentElement.outerHTML;
	var text_tests = {
		'SMF': /<script .+\s+var smf_/i,
		'Magento': /var BLANK_URL = '[^>]+js\/blank\.html'/i,
		'Tumblr': /<iframe src=("|')http:\/\/\S+\.tumblr\.com/i,
		'WordPress': /<link rel=("|')stylesheet("|') [^>]+wp-content/i,
		'Closure': /<script[^>]*>.*goog\.require/i,
		'Liferay': /<script[^>]*>.*LifeRay\.currentURL/i,
		'vBulletin': /vbmenu_control/i,
		'MODx': /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)/i,
		'miniBB': /<a href=("|')[^>]+minibb.+\s*<!--End of copyright link/i,
		'PHP-Fusion': /(href|src)=["']?infusions\//i, // @todo: recheck this pattern again
		'OpenX': /(href|src)=["'].*delivery\/(afr|ajs|avw|ck)\.php[^"']*/,
		'GetSatisfaction': /asset_host\s*\+\s*"javascripts\/feedback.*\.js/igm, // better recognization
		'Fatwire': /\/Satellite\?|\/ContentServer\?/,
		'Contao': /powered by (TYPOlight|Contao)/i,
		'Moodle' : /<link[^>]*\/theme\/standard\/styles.php".*>|<link[^>]*\/theme\/styles.php\?theme=.*".*>/,
		'1c-bitrix' : /<link[^>]*\/bitrix\/.*?>/i,
		'OpenCMS' : /<link[^>]*\.opencms\..*?>/i,
		'HumansTxt': /<link[^>]*rel=['"]?author['"]?/i,
		'GoogleFontApi': /ref=["']?http:\/\/fonts.googleapis.com\//i,
		'Prostores' : /-legacycss\/Asset">/,
		'osCommerce': /(product_info\.php\?products_id|_eof \/\/-->)/,
		'OpenCart': /index.php\?route=product\/product/,
		'Shibboleth': /<form action="\/idp\/Authn\/UserPassword" method="post">/
	};

	for (var t in text_tests) {
		if (t in _apps) {
			continue;
		}

		if (text_tests[t].test(text)) {
			_apps[t] = -1;
		}
	}

	// 5: detect by inline javascript
	var js_tests = {
		'Angular.js': function() {
			return  wGetChainValue('angular.version.full');
		},
		'Backbone.js': function() {
			return wGetChainValue('Backbone.VERSION');
		},
		'Buzz': function() {
			return isDefined(window.google_buzz__base_url);
		},
		'Chitika': function() {
			return allDefined(window.ch_client, window.ch_write_iframe);
		},
		'Clicky': function() {
			return isDefined(window.clicky);
		},
		'CoffeeScript': function() {
			return wGetChainValue('CoffeeScript.VERSION');
		},
		'Coremetrics': function() {
			return isDefined(window.cmCreatePageviewTag);
		},
		'Cufon': function() {
			return isDefined(window.Cufon);
		},
		'Dojo': function() {
			var version = wGetChainValue('dojo.version');
			if(version)
				return version.toString();
		},
		'Drupal': function() {
			return isDefined(window.Drupal);
		},
		'Ember': function() {
			return wGetChainValue('Ember.VERSION');
		},
		'ErainCart': function() {
			return isDefined(window.fn_register_hooks);
		},
		'ExtJS': function() {
			return wGetChainValue('Ext.version');
		},
		'Facebook': function() {
			return wGetChainValue('FB.api');
		},
		'Google Loader': function() {
			return isDefined('google.load');
		},
		'GoogleMapApi': function() {
			return wGetChainValue('google.maps');
		},
		'Handlebars': function() {
			return wGetChainValue('Handlebars.VERSION');
		},
		'Head JS': function() {
			return wGetChainValue('head.js');
		},
		'IPB': function() {
			return isDefined(window.IPBoard);
		},
		'Jimdo': function() {
			return isDefined(window.jimdoData);
		},
		'jQuery': function() {
			return wGetChainValue('jQuery.prototype.jquery');
		},
		'jQuery UI': function() {
			return wGetChainValue('jQuery.ui.version');
		},
		'Knockout': function() {
			return wGetChainValue('ko.version');
		},
		'Modernizr': function() {
			return wGetChainValue('Modernizr._version');
		},
		'MojoMotor': function() {
			return isDefined(window.Mojo);
		},
		'MooTools': function() {
			return wGetChainValue('MooTools.version');
		},
		'Mustache': function() {
			return wGetChainValue('Mustache.version');
		},
		'MyBB': function() {
			return isDefined(window.MyBB);
		},
		'OpenWebAnalytics': function() {
			return isDefined(window.owa_baseUrl);
		},
		'Piwik': function() {
			return isDefined(window.Piwik);
		},
		'Plus1': function() {
			return wGetChainValue('gapi.plusone');
		},
		'Prettify': function() {
			return isDefined(window.prettyPrint);
		},
		'Prototype': function() {
			return wGetChainValue('Prototype.Version');
		},
		'Raphael': function() {
			return wGetChainValue('Raphael.version');
		},
		'RightJS': function() {
			return wGetChainValue('RightJS.version');
		},
		'script.aculo.us': function() {
			return wGetChainValue('Scriptaculous.Version');
		},
		'sIFR': function() {
			return isDefined(window.sIFR);
		},
		'SiteCatalyst': function() {
			return isDefined(window.s_account);
		},
		'Spine': function() {
			return wGetChainValue('Spine.version');
		},
		'SugarCRM': function() {
			return isDefined(window.SUGAR);
		},
		'SWFObject': function() {
			return isDefined(window.swfobject);
		},
		'TomatoCMS': function() {
			return isDefined(window.Tomato);
		},
		'Twitter': function() {
			return isDefined(window.twttr);
		},
		'Typekit': function() {
			return isDefined(window.Typekit);
		},
		'Underscore.js': function() {
			return wGetChainValue('_.VERSION');
		},
		'Webs': function() {
			return isDefined(window.webs);
		},
		'Woopra': function() {
			return isDefined(window.woopraTracker);
		},
		'Xiti': function() {
			return allDefined(window.xtsite, window.xtpage);
		},
		'YUI': function() {
			var version = wGetChainValue('YAHOO.VERSION');
			if (version) {
				return version;
			}

			if(typeof window.YUI === 'function') {
				return YUI().version;
			}
		}
	};

	for (var t in js_tests) {
		if (t in _apps) {
			continue;
		}
		var versionOrFound = js_tests[t]();

		if (versionOrFound === true) {
			_apps[t] = -1;
		}
		else if(typeof versionOrFound === "object") {
			_apps[t] = -1;
		}
		else if (versionOrFound) {
			_apps[t] = versionOrFound;
		}
	}

	// 6: detect by header
	// @todo

	// 7: detect based on built-in database
	// @todo

	// 8: detect based on defined css classes
	var cssClasses = {
		'Bootstrap': [ 
			'hero-unit',
			'.carousel-control',
			'[class^="icon-"]:last-child'
			]
	};

	for (var t in cssClasses) {
		if (t in _apps) {
			continue;
		}

		var found = true;
		for(var css in cssClasses[t]) {
			var act = false;
			name = cssClasses[t][css];

			// Iterate through all registered css classes and check for presence
			for(var cssFile in document.styleSheets) {
				for(var cssRule in document.styleSheets[cssFile].cssRules) {
					var style = document.styleSheets[cssFile].cssRules[cssRule];

					if (typeof style === "undefined") {
						continue;
					}

					if (typeof style.selectorText === "undefined") {
						continue;
					}

					if (style.selectorText.indexOf(name) !== -1) {
						act = true;
						break;
					}
				}

				if(act === true) {
					break;
				}
			}

			found = found & act;
		}

		if(found === true) {
			_apps[t] = -1;
		}
		else {
			break;
		}
	}

	// convert to array
	var jsonString = JSON.stringify(_apps);
	// send back to background page
	var meta = document.getElementById('chromesniffer_meta');
	meta.content = jsonString;

	//Notify Background Page
	var done = document.createEvent('Event');
	done.initEvent('ready', true, true);
	meta.dispatchEvent(done);
})();
