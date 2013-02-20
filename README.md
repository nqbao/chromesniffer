# ChromeSniffer
This is a fork of the original ChromeSniffer.  The maintainer hasn't merged a pull request in quite some time, so I'm pulling them here and adding my own along the way.

## Installation
First, you'll need to clone this repo:

```git clone git://github.com/chieffancypants/chromesniffer.git```

To install in chrome, go to the extensions panel (chrome://settings/extensions) and click the "Load unpacked extension' and provide it with the directory you just cloned.



## Documentation
There are lots of work-arounds in this script, which makes the flow of events and operations difficult to understand.  For that reason I'm documenting the basic workflow of the extension:

1. one instance of the "background" page is loaded
2. `main.js` gets injected into each tab by chrome
3. `main.js` injects `detector.js` into the tab
4. `detector.js` runs on the page detecting apps
5. `detector.js` serializes the apps in JSON in a special `<meta>` tag
6. `detector.js` issues "ready" event that is listened to by `main.js`
7. upon receiving that event, `main.js` sends a "result" message to `background.js` along with the json.parsed app list
8. `background.js` recieves the list of apps, stores it in `tabinfo` array
9. `background.js` sets the icon for the popup
10. `background.js` tells chrome to show/load `popup.js`
11. `popup.js` sends `background.js` a message asking for the list of apps
