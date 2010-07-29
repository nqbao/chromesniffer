/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

var SNIFFER = SNIFFER || {};


SNIFFER.MetaMatcher = function() {
  var test_key = "match_meta";
  var meta_pairs;

  return {
    init: function(metas) {
      meta_pairs = [];
      if (metas === undefined) {
        metas = document.documentElement.getElementsByTagName("meta");
      }
      for (var i = 0; i < metas.length; i++) {
        var meta = metas[i];
        var name = meta.name || "";
        name = name.toLowerCase();
        if (name != "") {
          meta_pairs.push([name, meta.content]);
        }
      }
    },

    is_match: function(app) {
      if (!(test_key in app) || meta_pairs.length == 0) {
        return false;
      }
      var name = app[test_key][0];
      var content_re = app[test_key][1];
      return meta_pairs.some(
          function(pair) {
            return name == pair[0] && content_re.test(pair[1]);
          });
    }
  };
}();


SNIFFER.ScriptSrcMatcher = function() {
  var test_key = "match_script_src";
  var script_srcs;

  return {
    init: function(scripts) {
      script_srcs = [];
      if (scripts === undefined) {
        scripts = document.documentElement.getElementsByTagName("script");
      }
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (script.src) {
          script_srcs.push(script.src);
        }
      }
    },

    is_match: function(app) {
      if (!(test_key in app)) {
        return false;
      }
      var script_src_re = app[test_key];
      return script_srcs.some(
          function(src) { return script_src_re.test(src); });
    }
  };
}();


SNIFFER.HtmlMatcher = function() {
  var test_key = "match_html";
  var html;

  return {
    init: function(forced_html) {
      if (forced_html === undefined) {
        html = document.documentElement.outerHTML;
      } else {
        html = forced_html;
      }
    },

    is_match: function(app) {
      return test_key in app && app[test_key].test(html);
    }
  };
}();


SNIFFER.InlineMatcher = function() {
  var test_key = "match_inline";

  return {
    init: function() {},

    is_match: function(app) {
      return test_key in app && app[test_key]();
    }
  };
}();


function log(msg) {
  // Do logging for Chrome's Speed Tracer Extension.
  var logger = window.console;
  if (logger && logger.markTimeline) {
    logger.markTimeline(msg);
  }
}

SNIFFER.Detector = function(apps, matchers) {
  var matched_apps = apps.filter(
      function(app) {
          log('test: ' + app['name']);
          return matchers.some(
              function(matcher) { return matcher.is_match(app); });
      });
  if (matched_apps.length > 0) {
    chrome.extension.sendRequest({matched_apps: matched_apps});
  }
};


SNIFFER.matchers = [
      SNIFFER.MetaMatcher,
      SNIFFER.ScriptSrcMatcher,
      SNIFFER.HtmlMatcher,
      SNIFFER.InlineMatcher
];

if ('apps' in SNIFFER) {  // 'apps' is not set for unit tests
  SNIFFER.matchers.forEach(function(matcher) {
      matcher.init();
  });
  SNIFFER.Detector(SNIFFER.apps, SNIFFER.matchers);
}
