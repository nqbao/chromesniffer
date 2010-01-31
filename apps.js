/**
 * Chrome AppSniffer
 *
 * Web Application definition
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

var appinfo = {
	// ==== services ====
	'Tumblr': {
		icon: 'Tumblr.ico',
		url: 'http://tumblr.com',
		priority: 0.9
	},
	'TypePad': {
		icon: 'TypePad.ico',
		url: 'http://typepad.com',
		priority: 0.9
	},
	'Blogger': {
		icon: 'Blogger.ico',
		url: 'http://blogger.com',
		priority: 0.9
	},

	// ==== cms or framework ====
	'vBulletin': {
		icon: 'vBulletin.ico',
		url: 'http://www.vbulletin.com/',
		priority: 1
	},
	'SMF': {
		title: 'Simple Machines Forum',
		icon: 'SMF.ico',
		url: 'http://www.simplemachines.org/',
		priority: 1
	},
	'phpBB': {
		icon: 'phpBB.ico',
		url: 'http://phpbb.org',
		priority: 1
	},
	'IPB': {
		title: 'Invision Power Board',
		icon: 'IPB.ico',
		url: 'http://invisionpower.com/',
		priority: 1
	},
	'miniBB': {
		icon: 'miniBB.ico',
		url: 'http://www.minibb.com/',
		priority: 1
	},
	
	'Drupal': {
		icon: 'Drupal.ico',
		url: 'http://drupal.org',
		priority: 1
	},
	'Ubercart': {
		icon: 'Ubercart.ico',
		url: 'http://www.ubercart.org/',
		priority: 0.9 // higher priority compared with Drupal
	},
	
	'WordPress': {
		icon: 'WordPress.ico',
		url: 'http://wordpress.org',
		priority: 1
	},
	'bbPress': {
		icon: 'bbPress.ico',
		url: 'http://bbpress.org',
		priority: 1
	},
	'Movable Type': {
		icon: 'MovableType.ico',
		url: 'http://www.movabletype.org/',
		priority: 1
	},
	
	'MediaWiki': {
		icon: 'MediaWiki.ico',
		url: 'http://www.mediawiki.org/',
		priority: 1
	},
	'DokuWiki': {
		icon: 'DokuWiki.ico',
		url: 'http://www.dokuwiki.org/',
		priority: 1
	},
	
	'Joomla': {
		icon: 'Joomla.ico',
		url: 'http://joomla.org',
		priority: 1
	},
	'Magento': {
		icon: 'Magento.ico',
		url: 'http://www.magentocommerce.com/',
		priority: 1
	},
	'XOOPS': {
		icon: 'XOOPS.ico',
		url: 'http://xoops.org',
		priority: 1
	},
	'Plone': {
		icon: 'Plone.ico',
		url: 'http://plone.org/',
		priority: 1
	},
	'CMSMadeSimple': {
		title: 'CMS Made Simple',
		icon: 'CMSMadeSimple.ico',
		url: 'http://www.cmsmadesimple.org/',
		priority: 1
	},
	'SilverStripe': {
		icon: 'SilverStripe.png',
		url: 'http://silverstripe.org',
		priority: 1
	},
	'MODx': {
		icon: 'MODx.ico',
		url: 'http://modxcms.com/',
		priority: 1
	},
	'Amiro.CMS': {
		icon: 'Amiro.CMS.ico',
		url: 'http://www.amirocms.com/',
		priority: 1
	},
	'Koobi': {
		icon: 'koobi.ico',
		url: 'http://www.dream4.de/cms/',
		priority: 1
	},
	'LifeRay': {
		icon: 'LifeRay.ico',
		url: 'http://www.liferay.com',
		priority: 1
	},
	'TYPO3': {
		icon: 'TYPO3.ico',
		url: 'http://typo3.org/',
		priority: 1
	},
	'PHP-Fusion': {
		icon: 'PHP-Fusion.ico',
		url: 'http://php-fusion.co.uk/',
		priority: 1
	},
	'PHP-Nuke': {
		icon: 'PHP-Nuke.ico',
		url: 'http://phpnuke.org/',
		priority: 1
	},
	'WebGUI': {
		icon: 'WebGUI.ico',
		url: 'http://www.webgui.org/',
		priority: 1
	},
	'ez Publish': {
		icon: 'ez.ico',
		url: 'http://ez.no/',
		priority: 1
	},
	'BIGACE': {
		icon: 'BIGACE.ico',
		url: 'http://www.bigace.de/',
		priority: 1
	},
	
	'DotNetNuke': {
		icon: 'DotNetNuke.ico',
		url: 'http://www.dotnetnuke.com/',
		priority: 1
	},
	'Sitefinity': {
		icon: 'Sitefinity.ico',
		url: 'http://www.sitefinity.com/',
		priority: 1
	},
	
	// ==== js framework ====
	'jQuery': {
		icon: 'jQuery.ico',
		url: 'http://jquery.com',
		priority: 2
	},
	'jQuery UI': {
		icon: 'jQuery_UI.ico',
		url: 'http://jqueryui.com/',
		priority: 1.9
	},
	'ExtJS': {
		icon: 'ExtJS.ico',
		url: 'http://www.extjs.com/',
		priority: 2
	},
	'Prototype': {
		icon: 'Prototype.ico',
		url: 'http://www.prototypejs.org/',
		priority: 2
	},
	'Closure': {
		icon: 'Closure.png',
		url: 'http://code.google.com/closure/',
		priority: 2
	},
	'MooTools': {
		icon: 'MooTools.ico',
		url: 'http://mootools.net/',
		priority: 2
	},
	'Dojo': {
		icon: 'Dojo.ico',
		url: 'http://www.dojotoolkit.org/',
		priority: 2
	},
	'script.aculo.us': {
		icon: 'script.aculo.us.ico',
		url: 'http://script.aculo.us/',
		priority: 1.9
	},
	'YUI': {
		icon: 'YUI.ico',
		url: 'http://developer.yahoo.com/yui/',
		priority: 2
	},
	
	// ==== js tools ====
	
	'Google Analytics': {
		icon: 'Google_Analytics.ico',
		url: 'http://www.google.com/analytics/',
		priority: 3
	},
	'Quantcast': {
		icon: 'Quantcast.ico',
		url: 'http://www.quantcast.com/',
		priority: 3
	},
	'Disqus': {
		icon: 'Disqus.ico',
		url: 'http://disqus.com/',
		priority: 3
	},
	'GetSatisfaction': {
		icon: 'GetSatisfaction.gif',
		url: 'http://getsatisfaction.com',
		priority: 3
	},
	'Wibiya': {
		icon: 'Wibiya.ico',
		url: 'http://wibiya.com/',
		priority: 3
	},
	'reCaptcha': {
		icon: 'reCaptcha.ico',
		url: 'http://recaptcha.net/',
		priority: 4
	},
	'Mollom': {
		icon: 'mollom.ico',
		url: 'http://mollom.com',
		priority: 4
	},
	
	'OpenX': {
		icon: 'OpenX.ico',
		url: 'http://openx.org',
		priority: 5
	},
	'AdSense': {
		icon: 'google.ico',
		url: 'https://www.google.com/adsense',
		priority: 5
	},
	
	// ==== misc ====
	'': { // default
		icon: 'unknown.jpg',
		url: 'http://google.com/search?q=%s'
	}
};