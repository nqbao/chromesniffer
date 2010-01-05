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
	'Movable Type': {
		icon: 'MovableType.ico',
		url: 'http://www.movabletype.org/',
		priority: 1
	},
	
	'Joomla': {
		icon: 'Joomla.ico',
		url: 'http://joomla.org',
		priority: 1
	},
	'MediaWiki': {
		icon: 'MediaWiki.ico',
		url: 'http://www.mediawiki.org/',
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
	'Disqus': {
		icon: 'Disqus.ico',
		url: 'http://disqus.com/',
		priority: 3
	},
	
	// ==== misc ====
	'': { // default
		icon: 'unknown.jpg',
		url: 'http://google.com/search?q=%s'
	}
};