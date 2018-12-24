# Cache Clear

This is a WebView cache plugin for Cordova 5.4.0 supporting Android (>=2.3.3) and iOS(>=6.0)
It allows the app to use javascript to initiate a cordova webview cache clear

There are two methods:

`clear(successCallback, errorCallback)`
`cleartemp()`

#### Manual Installation

You may use `cordova-cli` as follows:

```shell
cordova plugin add https://github.com/andxyz/cordova-plugin-cache.git
```

#### Usage

```javascript
document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
  var success = function(status) {
    alert('Message: ' + status);
  }

  var error = function(status) {
    alert('Error: ' + status);
  }

  window.cache.clear(success, error);
  window.cache.cleartemp();
}

```
