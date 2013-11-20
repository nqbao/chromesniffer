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
  var _apps = {};
  var doc = document.documentElement;
  var name;
  var r;

  // 1: detect by meta tags, the first matching group will be version
  var metas = doc.getElementsByTagName("meta");
  var meta_tests = {
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
      'ClanSphere': /ClanSphere/,
      'Mura CMS': /Mura CMS\s*(.*)/i,
      'Tiki Wiki CMS Groupware': /Tiki/i
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

  for (var idx in metas) {
    var m = metas[idx];
    name = m.name ? m.name.toLowerCase() : "";

    if (!meta_tests[name]) continue;

    for (var t in meta_tests[name]) {
      if (t in _apps) continue;

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
    'Disqus': /disqus.com/i,
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
    'Alfresco': /(alfresco)+(-min)?(\/scripts\/menu)?\.js/, // both Alfresco Share and Explorer apps
    'Mura CMS': /mura\/js/,
    'Tiki Wiki CMS Groupware': /tiki-js/,
    'OpenTag': /opentag.*\.js/,
    'KISSmetrics': /i.kissmetrics.com\/i.js/
  };

  for (var idx in scripts) {
    var s = scripts[idx];
    if (!s.src) continue;
    s = s.src;

    for (var t in script_tests) {
      if (t in _apps) continue;
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
    'Moodle': /<link[^>]*\/theme\/standard\/styles.php".*>|<link[^>]*\/theme\/styles.php\?theme=.*".*>/,
    '1c-bitrix': /<link[^>]*\/bitrix\/.*?>/i,
    'OpenCMS': /<link[^>]*\.opencms\..*?>/i,
    'HumansTxt': /<link[^>]*rel=['"]?author['"]?/i,
    'GoogleFontApi': /ref=["']?http:\/\/fonts.googleapis.com\//i,
    'Prostores': /-legacycss\/Asset">/,
    'osCommerce': /(product_info\.php\?products_id|_eof \/\/-->)/,
    'OpenCart': /index.php\?route=product\/product/,
    'Shibboleth': /<form action="\/idp\/Authn\/UserPassword" method="post">/,
    'AwsCloudFront': /<(a|link|script|img)[^>]*.cloudfront.net.*>/,
    'AwsS3': /<(a|link|script|img)[^>]*.s3.amazonaws.com.*>/,
    'Youtube': /<iframe[^>]*www.youtube.com\/embed.*>/,
    'Dailymotion': /iframe[^>]*www.dailymotion.com\/embed.*>/,
    'Vimeo': /<iframe[^>]*player.vimeo.com\/video.*>/,
    'FlickR': /<(a|img)[^>]*.flickr.com.*>/,
    'Optimizely': /<script[^>]*cdn.optimizely.com.*>/,
    'Typography': /<link[^>]*cloud.typography.com.*>/,
 };

  for (var t in text_tests) {
    if (t in _apps) continue;
    if (text_tests[t].test(text)) {
      _apps[t] = -1;
    }
  }

  // TODO: merge inline detector with version detector

  // 5: detect by inline javascript
  var js_tests = {
    'Drupal': function () {
      return window.Drupal;
    },
    'TomatoCMS': function () {
      return window.Tomato;
    },
    'MojoMotor': function () {
      return window.Mojo;
    },
    'ErainCart': function () {
      return window.fn_register_hooks;
    },
    'SugarCRM': function () {
      return window.SUGAR;
    },
    'YUI': function () {
      return window.YAHOO | window.YUI;
    },
    'jQuery': function () {
      return window.jQuery;
    },
    'jQuery UI': function () {
      return window.jQuery && window.jQuery.ui;
    },
    'Typekit': function () {
      return window.Typekit;
    },
    'Facebook': function () {
      return window.FB && window.FB.api;
    },
    'ExtJS': function () {
      return window.Ext;
    },
    'Modernizr': function () {
      return window.Modernizr;
    },
    'Raphael': function () {
      return window.Raphael;
    },
    'Cufon': function () {
      return window.Cufon;
    },
    'sIFR': function () {
      return window.sIFR;
    },
    'Xiti': function () {
      return window.xtsite && window.xtpage;
    },
    'Piwik': function () {
      return window.Piwik;
    },
    'IPB': function () {
      return window.IPBoard;
    },
    'MyBB': function () {
      return window.MyBB;
    },
    'Clicky': function () {
      return window.clicky;
    },
    'Woopra': function () {
      return window.woopraTracker;
    },
    'RightJS': function () {
      return window.RightJS;
    },
    'OpenWebAnalytics': function () {
      return window.owa_baseUrl;
    },
    'Prettify': function () {
      return window.prettyPrint;
    },
    'SiteCatalyst': function () {
      return window.s_account;
    },
    'Twitter': function () {
      return window.twttr;
    },
    'Coremetrics': function () {
      return window.cmCreatePageviewTag;
    },
    'Buzz': function () {
      return window.google_buzz__base_url;
    },
    'Plus1': function () {
      return window.gapi && window.gapi.plusone;
    },
    'Google Loader': function () {
      return window.google && window.google.load;
    },
    'GoogleMapApi': function () {
      return window.google && window.google.maps;
    },
    'Head JS': function () {
      return window.head && window.head.js;
    },
    'SWFObject': function () {
      return window.swfobject;
    },
    'Chitika': function () {
      return window.ch_client && window.ch_write_iframe;
    },
    'Jimdo': function () {
      return window.jimdoData;
    },
    'Webs': function () {
      return window.webs;
    },
    'Backbone.js': function () {
      return window.Backbone && typeof(window.Backbone.sync) === 'function';
    },
    'Underscore.js': function () {
      return window._ && typeof(window._.identity) === 'function' &&
        window._.identity('abc') === 'abc';
    },
    'Spine': function () {
      return window.Spine;
    },
    'Angular': function () {
      return window.angular;
    },
    'Ning': function () {
      return window.ning;
    },
    'ektron': function () {
      return window.Ektron;
    },
    'etracker': function () {
      return window.et_params;
    },
    'SPDY': function () {
      return window.chrome.loadTimes().wasFetchedViaSpdy;
    },
    'LiveStreet': function () {
      return window.LIVESTREET_SECURITY_KEY;
    },
    'Olark': function () {
      return window.olark;
    },
    'SegmentIO': function () {
      return window.Segment;
    },
  };

  for (var t in js_tests) {
    if (t in _apps) continue;
    if (js_tests[t]()) {
      _apps[t] = -1;
    }
  }

  // 6: detect some script version when available
  var js_versions = {
    'Prototype': function () {
      if ('Prototype' in window && Prototype.Version !== undefined)
        return window.Prototype.Version;
    },
    'script.aculo.us': function () {
      if ('Scriptaculous' in window && Scriptaculous.Version !== undefined)
        return window.Scriptaculous.Version;
    },
    'jQuery': function () {
      if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined)
        return jQuery.prototype.jquery;
    },
    'jQuery UI': function () {
      if (typeof jQuery === 'function' && jQuery.ui && jQuery.ui.version !== undefined)
        return jQuery.ui.version;
    },
    'Dojo': function () {
      if (typeof dojo === 'object' && dojo.version.toString() !== undefined)
        return dojo.version;
    },
    'YUI': function () {
      if (typeof YAHOO === 'object' && YAHOO.VERSION !== undefined)
        return YAHOO.VERSION;
      if ('YUI' in window && typeof YUI === 'function' && YUI().version !== undefined)
        return YUI().version;
    },
    'MooTools': function () {
      if (typeof MooTools === 'object' && MooTools.version !== undefined)
        return MooTools.version;
    },
    'ExtJS': function () {
      if (typeof Ext === 'object' && Ext.version !== undefined)
        return Ext.version;
    },
    'RightJS': function () {
      if ('RightJS' in window && RightJS.version !== undefined)
        return RightJS.version;
    },
    'Modernizr': function () {
      if (window.Modernizr && Modernizr._version !== undefined)
        return Modernizr._version;
    },
    'Raphael': function () {
      if (window.Raphael && Raphael.version !== undefined)
        return Raphael.version;
    },
    'Backbone.js': function () {
      if (window.Backbone && window.Backbone.VERSION)
        return window.Backbone.VERSION;
    },
    'Underscore.js': function () {
      if (window._ && window._.VERSION)
        return window._.VERSION;
    },
    'Spine': function () {
      if (window.Spine && window.Spine.version)
        return window.Spine.version;
    },
    'Angular': function () {
      if (window.angular && window.angular.version && 'full' in window.angular.version)
        return window.angular.version.full;
    }
  };

  for (var a in _apps) {
    if (_apps[a] === -1 && js_versions[a]) {
      r = js_versions[a]();
      _apps[a] = r ? r : -1;
    }
  }

  // 7: detect by header
  // @todo

  // 8: detect based on built-in database
  // @todo

  // 9: detect based on defined css classes
  var cssClasses = {
    'Bootstrap': ['hero-unit', '.carousel-control', '[class^="icon-"]:last-child']
  };

  for (var t in cssClasses) {
    if (t in _apps) continue;

    var found = true;
    for (var css in cssClasses[t]) {
      var act = false;
      name = cssClasses[t][css];

      /* Iterate through all registered css classes and check for presence */
      for (var cssFile in document.styleSheets) {
        for (var cssRule in document.styleSheets[cssFile].cssRules) {
          var style = document.styleSheets[cssFile].cssRules[cssRule];

          if (typeof style === "undefined") continue;
          if (typeof style.selectorText === "undefined") continue;

          if (style.selectorText.indexOf(name) !== -1) {
            act = true;
            break;
          }
        }
        if (act === true) break;
      }

      found = found & act;
    }

    if (found === true) {
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
