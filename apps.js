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
    icon: 'blogger.svg',
    url: 'http://blogger.com',
    priority: 0.9
  },

  'Webs': {
    icon: 'webs.ico',
    url: 'http://www.webs.com/',
    priority: 0.9
  },
  'Weebly': {
    icon: 'weebly.ico',
    url: 'http://www.weebly.com/',
    priority: 0.9
  },
  'Webnode': {
    icon: 'webnode.ico',
    url: 'http://www.webnode.com/',
    priority: 0.9
  },
  'Jimdo': {
    icon: 'jimdo.ico',
    url: 'http://www.jimdo.com',
    priority: 0.9
  },
  'Jigsy': {
    icon: 'jigsy.ico',
    url: 'http://jigsy.com',
    priority: 0.9
  },
  'Yola': {
    icon: 'yola.ico',
    url: 'http://www.yola.com/',
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
    url: 'http://www.phpbb.com',
    priority: 1
  },
  'IPB': {
    title: 'Invision Power Board',
    icon: 'ipboard.svg',
    url: 'http://invisionpower.com/',
    priority: 1
  },
  'miniBB': {
    icon: 'miniBB.ico',
    url: 'http://www.minibb.com/',
    priority: 1
  },
  'MyBB': {
    icon: 'mybb.ico',
    url: 'http://www.mybb.com/',
    priority: 1
  },
  'XenForo': {
    icon: 'xenforo.ico',
    url: 'http://xenforo.com',
    priority: 1
  },

  'Drupal': {
    icon: 'drupal.svg',
    url: 'http://drupal.org',
    priority: 1
  },
  'Ubercart': {
    icon: 'Ubercart.ico',
    url: 'http://www.ubercart.org/',
    priority: 0.9 // higher priority compared with Drupal
  },

  'AlphaCMS': {
    icon: 'alphacms.ico',
    url: 'http://www.mego.com.vn',
    priority: 1
  },
  'TomatoCMS': {
    icon: 'tomatocms.ico',
    url: 'http://www.tomatocms.com/',
    priority: 1
  },

  'WordPress': {
    icon: 'WordPress.ico',
    url: 'http://wordpress.org',
    priority: 1
  },
  'WPML': {
    icon: 'WPML.ico',
    url: 'http://wpml.org/',
    priority: 1.1
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
  'Serendipity': {
    icon: 'Serendipity.png',
    url: 'http://www.s9y.org/',
    priority: 1
  },
  'concrete5': {
    icon: 'concrete5.gif',
    url: 'http://www.concrete5.org',
    priority: 1
  },

  'MediaWiki': {
    icon: 'mediawiki.svg',
    url: 'http://www.mediawiki.org/',
    priority: 1
  },
  'DokuWiki': {
    icon: 'docuwiki.svg',
    url: 'http://www.dokuwiki.org/',
    priority: 1
  },

  'OpenACS': {
    icon: 'openacs.ico',
    url: 'http://openacs.org',
    priority: 1
  },

  'Joomla': {
    icon: 'joomla.svg',
    url: 'http://joomla.org',
    priority: 1
  },
  'Magento': {
    icon: 'magento.svg',
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
    icon: 'amiro-cms.svg',
    url: 'http://www.amirocms.com/',
    priority: 1
  },
  'JaliosJCMS': {
    icon: 'JaliosJCMS.ico',
    url: 'http://www.jalios.com',
    priority: 1,
    title: 'Jalios JCMS'
  },
  'Koobi': {
    icon: 'Koobi.ico',
    url: 'http://www.dream4.de/cms/',
    priority: 1
  },
  'Liferay': {
    icon: 'LifeRay.ico',
    url: 'http://www.liferay.com',
    priority: 1
  },
  'TYPO3': {
    icon: 'TYPO3.ico',
    url: 'http://typo3.org/',
    priority: 1
  },
  'Contao': {
    icon: 'contao.ico',
    url: 'http://www.contao.org',
    priority: 1
  },
  'Fatwire': {
    icon: 'Fatwire.ico',
    url: 'http://www.fatwire.com',
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
    icon: 'eZ.ico',
    url: 'http://ez.no/',
    priority: 1
  },
  'BIGACE': {
    icon: 'BIGACE.ico',
    url: 'http://www.bigace.de/',
    priority: 1
  },
  'OpenCMS': {
    icon: 'opencms.ico',
    url: 'http://www.opencms.org/',
    priority: 1
  },
  '1c-bitrix': {
    icon: '1c-bitrix.svg',
    url: 'http://www.1c-bitrix.ru/',
    priority: 1
  },
  'MojoMotor': {
    icon: 'mojomotor.ico',
    url: '	http://mojomotor.com',
    priority: 1
  },
  'GetSimple': {
    icon: 'getsimple.png',
    url: '	http://get-simple.info/',
    priority: 1
  },
  'Perch': { // not yet supported
    icon: 'perch.ico',
    url: 'http://grabaperch.com/',
    priority: 1
  },
  'DataLifeEngine': {
    title: 'DataLife Engine',
    icon: 'datalife.ico',
    url: 'http://dle-news.ru/',
    priority: 1
  },

  'Elgg': {
    icon: 'elgg.svg',
    url: 'http://www.elgg.org/',
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
  'SharePoint': {
    icon: 'SharePoint.png',
    url: 'http://sharepoint.microsoft.com',
    priority: 1,
    title: 'Microsoft SharePoint'
  },

  'ZenPhoto': {
    icon: 'ZenPhoto.ico',
    url: 'http://www.zenphoto.org',
    priority: 1
  },
  'Gallery2': {
    icon: 'Gallery2.ico',
    url: 'http://gallery.menalto.com/',
    priority: 1
  },

  'Avactis': {
    icon: 'avactis.ico',
    url: 'http://www.avactis.com',
    priority: 1
  },
  'PrestaShop': {
    icon: 'PrestaShop.ico',
    url: 'http://www.prestashop.com/',
    priority: 1
  },
  'Prostores': {
    icon: 'prostores.ico',
    url: 'http://www.prostores.com',
    priority: 1
  },
  'ZenCart': {
    icon: 'zencart.ico',
    url: 'http://www.zen-cart.com',
    priority: 1
  },
  'ErainCart': {
    icon: 'eraincart.ico',
    url: 'http://eraincart.com',
    priority: 1
  },
  'Volusion': {
    icon: 'volusion.ico',
    url: 'http://www.volusion.com',
    priority: 1
  },
  'osCommerce': {
    icon: 'osCommerce.ico',
    url: 'http://www.oscommerce.com',
    priority: 1
  },
  'OpenCart': {
    icon: 'opencart.png',
    url: 'http://www.opencart.com',
    priority: 1
  },

  'Moodle': {
    icon: 'moodle.png',
    url: 'http://moodle.org',
    priority: 1
  },
  'SugarCRM': {
    icon: 'sugarcrm.ico',
    url: 'http://www.sugarcrm.com',
    priority: 1
  },
  'PivotX': {
    icon: 'pivotx.ico',
    url: 'http://pivotx.net',
    priority: 1
  },

  'Shibboleth': {
    icon: 'shibboleth.png',
    url: 'http://shibboleth.internet2.edu/',
    priority: 1
  },
  'Alfresco': {
    icon: 'alfresco.svg',
    url: 'http://www.alfresco.com',
    priority: 1
  },

  'ClanSphere': {
    icon: 'ClanSphere.png',
    url: 'http://csphere.eu',
    priority: 1
  },

  // ==== js framework ====
  'jQuery': {
    icon: 'jquery.svg',
    url: 'http://jquery.com',
    priority: 2
  },
  'jQuery UI': {
    icon: 'jquery-ui.svg',
    url: 'http://jqueryui.com/',
    priority: 1.9
  },
  'jQuery Mobile': {
    icon: 'jquery-mobile.svg',
    url: 'http://jquerymobile.com/',
    priority: 1.9
  },
  'ExtJS': {
    icon: 'extjs.svg',
    url: 'http://www.extjs.com/',
    priority: 2
  },
  'Prototype': {
    icon: 'Prototype.ico',
    url: 'http://www.prototypejs.org/',
    priority: 2
  },
  'Closure': {
    icon: 'closure.svg',
    url: 'http://code.google.com/closure/',
    priority: 2
  },
  'MooTools': {
    icon: 'mootools.svg',
    url: 'http://mootools.net/',
    priority: 2
  },
  'Dojo': {
    icon: 'dojo.ico',
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
  'Cappuccino': {
    icon: 'cappuccino.png',
    url: 'http://cappuccino.org/',
    priority: 2
  },
  'RightJS': {
    icon: 'rightjs.png',
    url: 'http://RightJS.org/',
    priority: 2
  },
  'OpenLayers': {
    icon: 'OpenLayers.ico',
    url: 'http://openlayers.org/',
    priority: 1.9
  },
  'Spine': {
    icon: 'spine.ico',
    url: 'http://spinejs.com',
    priority: 1.9
  },
  'Angular': {
    icon: 'angular.svg',
    url: 'http://angularjs.org/',
    priority: 1.5
  },
  'Zepto': {
    icon: 'zepto.png',
    url: 'http://zeptojs.com/',
    priority: 1.5
  },
  // ==== js tools ====
  'Raphael': {
    icon: 'raphael.ico',
    url: 'http://raphaeljs.com/',
    priority: 2.9
  },
  'Typekit': {
    icon: 'typekit.ico',
    url: 'http://typekit.com/',
    priority: 2.9
  },
  'Cufon': {
    icon: 'cufon.ico',
    url: 'http://cufon.shoqolate.com/',
    priority: 2.9
  },
  'sIFR': {
    icon: 'sifr.gif',
    url: 'http://www.mikeindustries.com/blog/sifr/',
    priority: 2.9
  },
  'Modernizr': {
    icon: 'modernizr.svg',
    url: 'http://www.modernizr.com/',
    priority: 2.9
  },
  'Facebook': {
    title: 'Facebook Social plugins',
    icon: 'facebook.ico',
    url: 'http://developers.facebook.com/',
    priority: 2.9
  },
  'Twitter': {
    title: 'Twitter plugins',
    icon: 'twitter.svg',
    url: 'http://dev.twitter.com',
    priority: 2.9
  },
  'Buzz': {
    title: 'Google Buzz Button',
    icon: 'buzz.png',
    url: 'http://www.google.com/buzz/stuff',
    priority: 2.9
  },
  'Plus1': {
    title: 'Google Plus 1',
    icon: 'google-plus.svg',
    url: 'http://www.google.com/+1/button/',
    priority: 2.9
  },
  'AddThis': {
    icon: 'addthis.svg',
    url: 'http://www.addthis.com',
    priority: 2.9
  },
  'Backbone.js': {
    icon: 'backbone.svg',
    url: 'http://documentcloud.github.com/backbone/',
    priority: 1.9
  },
  'Underscore.js': {
    icon: 'lodash.svg',
    url: 'http://documentcloud.github.com/underscore/',
    priority: 2.9
  },

  'Head JS': {
    icon: 'headjs.gif',
    url: 'http://headjs.com',
    priority: 2.9
  },
  'Google Loader': {
    icon: 'google.svg',
    url: 'http://code.google.com/apis/loader',
    priority: 2.9
  },

  'Woopra': {
    icon: 'woopra.ico',
    url: 'http://www.woopra.com',
    priority: 3
  },
  'OpenWebAnalytics': {
    icon: 'owa.ico',
    url: 'http://www.openwebanalytics.com',
    priority: 3
  },
  'Google Analytics': {
    icon: 'analytics.svg',
    url: 'http://www.google.com/analytics/',
    priority: 3
  },
  'SiteCatalyst': {
    icon: 'SiteCatalyst.ico',
    url: 'http://www.omniture.com',
    priority: 3
  },
  'Coremetrics': {
    icon: 'coremetrics.ico',
    url: 'http://www.coremetrics.com',
    priority: 3
  },
  'Quantcast': {
    icon: 'quantcast.svg',
    url: 'http://www.quantcast.com/',
    priority: 3
  },
  'Xiti': {
    title: 'Xiti Tracker',
    icon: 'xiti.ico',
    url: 'http://xiti.com/',
    priority: 3
  },
  'Piwik': {
    icon: 'Piwik.ico',
    url: 'http://piwik.org/',
    priority: 3
  },
  'Clicky': {
    icon: 'clicky.ico',
    url: 'http://getclicky.com/',
    priority: 3
  },

  'Disqus': {
    icon: 'disqus.svg',
    url: 'http://disqus.com/',
    priority: 1
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
  'Prettify': {
    title: 'Google Code Prettify',
    icon: 'google.svg',
    url: 'http://code.google.com/p/google-code-prettify/',
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
  'GoogleFontApi': {
    title: 'Google Font API',
    icon: 'google-fonts.png',
    url: 'http://code.google.com/apis/webfonts/',
    priority: 4
  },
  'GoogleMapApi': {
    title: 'Google Map API',
    icon: 'gmap.png',
    url: 'http://code.google.com/apis/maps/',
    priority: 4
  },
  'SWFObject': {
    icon: 'SWFObject.ico',
    url: 'http://code.google.com/p/swfobject/',
    priority: 4
  },

  'OpenX': {
    icon: 'OpenX.ico',
    url: 'http://openx.org',
    priority: 5
  },
  'AdSense': {
    icon: 'AdSense.gif',
    url: 'https://www.google.com/adsense',
    priority: 5
  },
  'Chitika': {
    icon: 'chitika.ico',
    url: 'http://chitika.com/',
    priority: 5
  },
  'BuySellAds': {
    icon: 'buysellads.ico',
    url: 'http://buysellads.com/',
    priority: 5
  },
  'HumansTxt': {
    icon: 'humanstxt.ico',
    url: 'http://humanstxt.org/',
    priority: 5
  },
  'Bootstrap': {
    icon: 'bootstrap.svg',
    url: 'http://twitter.github.com/bootstrap/',
    priority: 5
  },
  'Ning': {
    icon: 'ning.ico',
    url: 'http://www.ning.com/',
    priority: 1
  },
  'ektron': {
    icon: 'ektron.ico',
    url: 'http://www.ektron.com/',
    priority: 1
  },
  'Mura CMS': {
    title: 'Mura CMS',
    icon: 'muracms.ico',
    url: 'http://www.getmura.com/',
    priority: 1
  },
  'Tiki Wiki CMS Groupware': {
    title: 'Tiki Wiki CMS Groupware',
    icon: 'TikiWikiCms.ico',
    url: 'http://info.tiki.org/',
    priority: 1
  },
  'etracker': {
    title: 'etracker',
    icon: 'etracker.ico',
    url: 'http://etracker.com/',
    priority: 1.2
  },
  'OpenTag': {
    icon: 'OpenTag.ico',
    url: 'http://opentag.qubitproducts.com',
    priority: 1.2
  },
  'SPDY': {
    icon: 'spdy.ico',
    url: 'http://www.chromium.org/spdy',
    priority: 5
  },
  'KISSmetrics': {
    icon: 'kissmetrics.ico',
    url: 'http://kissmetrics.com/',
    priority: 1
  },
  'LiveStreet': {
    icon: 'LiveStreetCms.ico',
    url: 'http://livestreetcms.com/',
    priority: 1
  },
  'PHP': {
    icon: 'php.svg',
    url: 'http://php.net/',
    priority: 1.5
  },
  'Apache': {
    icon: 'apache.svg',
    url: 'http://httpd.apache.org/',
    priority: 1.5
  },
  'nginx': {
    icon: 'nginx.svg',
    url: 'http://nginx.org/en/',
    priority: 1.5
  },
  'Varnish': {
    icon: 'varnish.ico',
    url: 'https://www.varnish-cache.org/',
    priority: 1.5
  },
  'IIS': {
    icon: 'iis.ico',
    url: 'http://www.iis.net/',
    priority: 1.5
  },
  'ASP.NET': {
    icon: 'asp.net.ico',
    url: 'http://www.asp.net/',
    priority: 1.5
  },
  'Nette': {
    icon: 'nette.ico',
    url: 'http://nette.org/',
    priority: 1.5
  },
  'Dinkly': {
    icon: 'dinkly.ico',
    url: 'https://github.com/lewsid/dinkly/',
    priority: 1.5
  },

  // ==== misc ====
  '': { // default
    icon: 'unknown.jpg',
    url: 'http://google.com/search?q=%s'
  }
};
