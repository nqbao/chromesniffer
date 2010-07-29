var POPUP = {
  DisplayApps: function(element, matched_apps) {
    if (matched_apps.length < 8) {
      element.style.width = (matched_apps.length * 20) + "px";
    } else {
      element.style.width = "160px";
    }
    element.innerHTML = matched_apps.map(function(app) {
      return '<a target="_blank" title="' + app.title + '" href="' + app.url + '">' +
             '<img alt="' + app.title + '" width=16 height=16 src="' + app.icon + '"/>' +
             '</a>';
    }).join(' ');
  }
};
