/**
 * Chrome AppSniffer
 *
 * Web Application definition
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

var SNIFFER = SNIFFER || {};

SNIFFER.groups = [
  ['services', 'Services'],
  ['cms_or_frameworks', 'CMS or Frameworks'],
  ['js_frameworks', 'JavaScript Frameworks'],
  ['js_tools', 'JavaScript Tools'],
];

SNIFFER.apps = [
  // Popup will use the same order as below.

  // Provide one or more "match_*" property.
  // {
  //   name: NAME,
  //   title: TITLE,
  //   icon: ICON_FILE,
  //   url: HOME_PAGE_URL,
  //   match_script_src: REGEX,
  //   match_meta: [META_KEY, VALUE_REGEX],
  //   match_html: REGEX,
  //   match_inline: FUNCTION,
  //   group: group_key
  //   TODO: add tests for matches
  // },

  // ==== services ====
  {
    name: 'Tumblr',
    icon: 'Tumblr.ico',
    url: 'http://tumblr.com',
    match_html: /<iframe src=[\"\']http:\/\/www\.tumblr\.com/i,
    group: 'services',
  },
  {
    name: 'TypePad',
    icon: 'TypePad.ico',
    url: 'http://typepad.com',
    match_meta: ['generator', /TypePad/i],
    group: 'services',
  },
  {
    name: 'Blogger',
    icon: 'Blogger.ico',
    url: 'http://blogger.com',
    match_meta: ['generator', /Blogger/i],
    group: 'services',
  },

  // ==== cms or framework ====
  {
    name: 'Ubercart',
    icon: 'Ubercart.ico',
    url: 'http://www.ubercart.org/',
    match_script_src: /uc_cart/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'vBulletin',
    icon: 'vBulletin.ico',
    url: 'http://www.vbulletin.com/',
    match_meta: ['generator', /vBulletin/i],
    match_html: /vbmenu_control/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'SMF',
    title: 'Simple Machines Forum',
    icon: 'SMF.ico',
    url: 'http://www.simplemachines.org/',
    match_html: /<script .+\s+var smf_/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'phpBB',
    icon: 'phpBB.ico',
    url: 'http://phpbb.org',
    match_meta: ['copyright', /phpBB/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'IPB',
    title: 'Invision Power Board',
    icon: 'IPB.ico',
    url: 'http://invisionpower.com/',
    match_script_src: /ipb.*js/,
    group: 'cms_or_frameworks',
  },
  {
    name: 'miniBB',
    icon: 'miniBB.ico',
    url: 'http://www.minibb.com/',
    match_html: /<a href=[\"\'][^>]+minibb.+\s*<!--End of copyright link/is,
    group: 'cms_or_frameworks',
  },

  {
    name: 'Drupal',
    icon: 'Drupal.ico',
    url: 'http://drupal.org',
    match_inline: function() { return window.Drupal != null; },
    group: 'cms_or_frameworks',
  },
  {
    name: 'WordPress',
    icon: 'WordPress.ico',
    url: 'http://wordpress.org',
    match_meta: ['generator', /WordPress/i],
    match_html: /<link rel=[\"\']stylesheet[\"\'] [^>]+wp-content/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'bbPress',
    icon: 'bbPress.ico',
    url: 'http://bbpress.org',
    match_meta: ['generator', /bbPress/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Movable Type',
    icon: 'MovableType.ico',
    url: 'http://www.movabletype.org/',
    match_meta: ['generator', /Movable Type/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Serendipity',
    icon: 'Serendipity.png',
    url: 'http://www.s9y.org/',
    match_meta: ['powered-by', /Serendipity/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'MediaWiki',
    icon: 'MediaWiki.ico',
    url: 'http://www.mediawiki.org/',
    match_meta: ['generator', /MediaWiki/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'DokuWiki',
    icon: 'DokuWiki.ico',
    url: 'http://www.dokuwiki.org/',
    match_meta: ['generator', /DokuWiki/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Joomla',
    icon: 'Joomla.ico',
    url: 'http://joomla.org',
    match_script_src: /\/components\/com_/,
    match_meta: ['generator', /joomla/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Magento',
    icon: 'Magento.ico',
    url: 'http://www.magentocommerce.com/',
    match_html: /var BLANK_URL = '[^>]+js\/blank\.html'/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'XOOPS',
    icon: 'XOOPS.ico',
    url: 'http://xoops.org',
    match_meta: ['generator', /xoops/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Plone',
    icon: 'Plone.ico',
    url: 'http://plone.org/',
    match_meta: ['generator', /plone/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'CMSMadeSimple',
    title: 'CMS Made Simple',
    icon: 'CMSMadeSimple.ico',
    url: 'http://www.cmsmadesimple.org/',
    match_meta: ['generator', /CMS Made Simple/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'SilverStripe',
    icon: 'SilverStripe.png',
    url: 'http://silverstripe.org',
    match_meta: ['generator', /SilverStripe/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'MODx',
    icon: 'MODx.ico',
    url: 'http://modxcms.com/',
    match_script_src: /\/min\/.*f=.*/,
    match_html: /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=["']text\/javascript["']>var MODX_MEDIA_PATH = "media";)/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'Amiro.CMS',
    icon: 'Amiro.CMS.ico',
    url: 'http://www.amirocms.com/',
    match_meta: ['generator', /Amiro CMS/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'JaliosJCMS',
    title: 'Jalios JCMS',
    icon: 'JaliosJCMS.ico',
    url: 'http://www.jalios.com',
    match_meta: ['generator', /Jalios JCMS/i],
    group: 'cms_or_frameworks'
  },
  {
    name: 'Koobi',
    icon: 'Koobi.ico',
    url: 'http://www.dream4.de/cms/',
    match_meta: ['generator', /koobi/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Liferay',
    icon: 'LifeRay.ico',
    url: 'http://www.liferay.com',
    match_html: /<script[^>]*>.*LifeRay\.currentURL/is,
    group: 'cms_or_frameworks',
  },
  {
    name: 'TYPO3',
    icon: 'TYPO3.ico',
    url: 'http://typo3.org/',
    match_meta: ['generator', /TYPO3/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Contao',
    icon: 'contao.ico',
    url: 'http://www.contao.org',
    match_html: /powered by (TYPOlight|Contao)/is,
    group: 'cms_or_frameworks',
  },
  {
    name: 'Fatwire',
    icon: 'Fatwire.ico',
    url: 'http://www.fatwire.com',
    match_html: /\/Satellite\?|\/ContentServer\?/s,
    group: 'cms_or_frameworks',
  },
  {
    name: 'PHP-Fusion',
    icon: 'PHP-Fusion.ico',
    url: 'http://php-fusion.co.uk/',
    match_html: /(href|src)=[\"\']?infusions\//i, // @todo: recheck this pattern again
    group: 'cms_or_frameworks',
  },
  {
    name: 'PHP-Nuke',
    icon: 'PHP-Nuke.ico',
    url: 'http://phpnuke.org/',
    match_meta: ['generator', /PHP-Nuke/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'WebGUI',
    icon: 'WebGUI.ico',
    url: 'http://www.webgui.org/',
    match_meta: ['generator', /WebGUI/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'ez Publish',
    icon: 'eZ.ico',
    url: 'http://ez.no/',
    match_meta: ['generator', /ez\s*Publish/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'BIGACE',
    icon: 'BIGACE.ico',
    url: 'http://www.bigace.de/',
    match_meta: ['generator', /BIGACE/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Elgg',
    icon: 'Elgg.ico',
    url: 'http://www.elgg.org/',
    match_meta: ['Elgg', /.+/],
    group: 'cms_or_frameworks',
  },
  {
    name: 'DotNetNuke',
    icon: 'DotNetNuke.ico',
    url: 'http://www.dotnetnuke.com/',
    match_meta: ['generator', /PHP-Nuke/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'Sitefinity',
    icon: 'Sitefinity.ico',
    url: 'http://www.sitefinity.com/',
    match_meta: ['generator', /Sitefinity/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'SharePoint',
    icon: 'SharePoint.png',
    url: 'http://sharepoint.microsoft.com',
    match_meta: ['generator', /SharePoint/i],
    title: 'Microsoft SharePoint',
    group: 'cms_or_frameworks',
  },
  {
    name: 'ZenPhoto',
    icon: 'ZenPhoto.ico',
    url: 'http://www.zenphoto.org',
    match_script_src: /zp-core\/js/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'Gallery2',
    icon: 'Gallery2.ico',
    url: 'http://gallery.menalto.com/',
    match_script_src: /main\.php\?.*g2_.*/i,
    group: 'cms_or_frameworks',
  },
  {
    name: 'PrestaShop',
    icon: 'PrestaShop.ico',
    url: 'http://www.prestashop.com/',
    match_meta: ['generator', /PrestaShop/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'ZenCart',
    icon: 'zencart.ico',
    url: 'http://www.zen-cart.com',
    match_meta: ['generator', /zen-cart/i],
    group: 'cms_or_frameworks',
  },
  {
    name: 'ErainCart',
    icon: 'eraincart.ico',
    url: 'http://eraincart.com',
    match_inline: function() { return window.fn_register_hooks != null; },
    group: 'cms_or_frameworks',
  },
  {
    name: 'Moodle',
    icon: 'moodle.png',
    url: 'http://moodle.org',
    match_html: /<link[^>]*\/theme\/standard\/styles.php\".*>/,
    group: 'cms_or_frameworks',
  },
  {
    name: 'SugarCRM',
    icon: 'sugarcrm.ico',
    url: 'http://www.sugarcrm.com',
    match_inline: function() { return window.SUGAR != null; },
    group: 'cms_or_frameworks',
  },

  // ==== js framework ====
  {
    name: 'jQuery UI',
    icon: 'jQuery_UI.ico',
    url: 'http://jqueryui.com/',
    match_inline: function() { return window.jQuery != null && window.jQuery.ui != null; },
    group: 'js_frameworks',
  },
  {
    name: 'script.aculo.us',
    icon: 'script.aculo.us.ico',
    url: 'http://script.aculo.us/',
    match_script_src: /scriptaculous\.js/i,
    group: 'js_frameworks',
  },
  {
    name: 'jQuery',
    icon: 'jquery.ico',
    url: 'http://jquery.com',
    match_inline: function() { return window.jQuery != null; },
    group: 'js_frameworks',
  },
  {
    name: 'ExtJS',
    icon: 'ExtJS.ico',
    url: 'http://www.extjs.com/',
    match_inline: function() { return window.Ext != null; },
    group: 'js_frameworks',
  },
  {
    name: 'Prototype',
    icon: 'Prototype.ico',
    url: 'http://www.prototypejs.org/',
    match_script_src: /prototype\.js/i,
    group: 'js_frameworks',
  },
  {
    name: 'Closure',
    icon: 'Closure.png',
    url: 'http://code.google.com/closure/',
    match_script_src: /\/goog\/base\.js/i,
    match_html: /<script[^>]*>.*goog\.require/is,
    group: 'js_frameworks',
  },
  {
    name: 'MooTools',
    icon: 'MooTools.ico',
    url: 'http://mootools.net/',
    match_script_src: /mootools/i,
    group: 'js_frameworks',
  },
  {
    name: 'Dojo',
    icon: 'dojo.ico',
    url: 'http://www.dojotoolkit.org/',
    match_script_src: /dojo(\.xd)?\.js/i,
    group: 'js_frameworks',
  },
  {
    name: 'YUI',
    icon: 'YUI.ico',
    url: 'http://developer.yahoo.com/yui/',
    match_inline: function() { return window.YAHOO != null; },
    group: 'js_frameworks',
  },

  // ==== js tools ====

  {
    name: 'Google Analytics',
    icon: 'Google_Analytics.ico',
    url: 'http://www.google.com/analytics/',
    match_script_src: /google-analytics.com\/(ga|urchin).js/i,
    group: 'js_tools',
  },
  {
    name: 'Quantcast',
    icon: 'Quantcast.ico',
    url: 'http://www.quantcast.com/',
    match_script_src: /quantserve\.com\/quant\.js/i,
    group: 'js_tools',
  },
  {
    name: 'Xiti',
    title: 'Xiti Tracker',
    icon: 'xiti.ico',
    url: 'http://xiti.com/',
    match_inline: function() { return window.xtsite != null && window.xtpage != null; },
    group: 'js_tools',
  },
  {
    name: 'Disqus',
    icon: 'Disqus.ico',
    url: 'http://disqus.com/',
    match_script_src: /disqus.com\/forums/i,
    group: 'js_tools',
  },
  {
    name: 'GetSatisfaction',
    icon: 'GetSatisfaction.gif',
    url: 'http://getsatisfaction.com',
    match_script_src: /getsatisfaction\.com\/feedback/i,
    match_html: /asset_host\s*\+\s*\"javascripts\/feedback.*\.js/igm, // better recognition
    group: 'js_tools',
  },
  {
    name: 'Wibiya',
    icon: 'Wibiya.ico',
    url: 'http://wibiya.com/',
    match_script_src: /wibiya\.com\/Loaders\//i,
    group: 'js_tools',
  },
  {
    name: 'reCaptcha',
    icon: 'reCaptcha.ico',
    url: 'http://recaptcha.net/',
    match_script_src: /api\.recaptcha\.net\//i,
    group: 'js_tools',
  },
  {
    name: 'Mollom',
    icon: 'mollom.ico',
    url: 'http://mollom.com',
    match_script_src: /mollom\/mollom\.js/i, // only work on Drupal now
    group: 'js_tools',
  },
  {
    name: 'Raphael',
    icon: 'raphael.ico',
    url: 'http://raphaeljs.com/',
    match_inline: function() { return window.Raphael != null; },
    group: 'js_tools',
  },
  {
    name: 'Typekit',
    icon: 'typekit.ico',
    url: 'http://typekit.com/',
    match_inline: function() { return window.Typekit != null; },
    group: 'js_tools',
  },
  {
    name: 'Modernizr',
    icon: 'modernizr.ico',
    url: 'http://www.modernizr.com/',
    match_inline: function() { return window.Modernizr != null; },
    group: 'js_tools',
  },
  {
    name: 'Facebook',
    title: 'Facebook Social plugins',
    icon: 'facebook.ico',
    url: 'http://developers.facebook.com/',
    match_inline: function() { return window.FB != null; },
    group: 'js_tools',
  },
  {
    name: 'GoogleFontApi',
    title: 'Google Font API',
    icon: 'google-font-api.gif',
    url: 'http://code.google.com/apis/webfonts/',
    match_html: /ref=[\"\']?http:\/\/fonts.googleapis.com\//i,
    group: 'js_tools',
  },
// TODO: Find a less expensive pattern for OpenX.
//   {
//     name: 'OpenX',
//     icon: 'OpenX.ico',
//     url: 'http://openx.org',
//     match_html: /(?:href|src)=[\"\'].*delivery\/(?:afr|ajs|avw|ck)\.php/,
//     group: 'js_tools',
//   },
  {
    name: 'AdSense',
    icon: 'google.ico',
    url: 'https://www.google.com/adsense',
    match_script_src: /pagead\/show_ads\.js/,
    group: 'js_tools',
  },
  {
    name: 'KISSmetrics',
    icon: 'KISSmetrics.ico',
    url: 'http://kissmetrics.com/',
    match_script_src: /i.kissmetrics.com\/i.js/,
    group: 'js_tools',
  }
];

// Set default values.
SNIFFER.apps.forEach(function(app) {
  if (!('title' in app)) {
    app.title = app.name;
  }
  if (!('icon' in app)) {
    app.icon = 'unknown.jpg';
  }
  app.icon = 'apps/' + app.icon;
  if (!('url' in app)) {
    app.url = 'http://google.com/search?q=' + app.title.replace(' ', '+');
  }
});
