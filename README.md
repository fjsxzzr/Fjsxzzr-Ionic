# Fjsxzzr-Ionic

自用留底:

ionic4
版本: 5.0.0-beta.21

1.添加@ionic-native/app-update中AppUpdateOptions的参数
skipPromptDialog,skipProgressDialog

npm install @fjsxzzr/ionic-native-app-update

2.添加支持cordova-plugin-baidumaplocation插件
npm install @fjsxzzr/baidumap-location

3.添加支持jpush-phonegap-plugin插件
npm install @fjsxzzr/jpush

4.添加支持org.apache.cordova.plugin.cache插件
npm install @fjsxzzr/cordova-cache

5.org.apache.cordova.plugin.cache插件
ionic cordova plugin add cordova-plugin-cache
修改android部分代码支持获取缓存大小(存在误差),ios部分改为https://github.com/lwz467666145/cordova-plugin-clearcache插件代码

6.cordova-plugin-baidumaplocation插件
ionic cordova plugin add https://github.com/aruis/cordova-plugin-baidumaplocation.git --variable ANDROID_KEY="BAIDU_LOCATION_KEY" --variable IOS_KEY="BAIDU_LOCATION_KEY"

7.cordova-plugin-jcore插件
https://github.com/jpush/cordova-plugin-jcore 1.2.3

8.jpush-phonegap-plugin插件
https://github.com/jpush/jpush-phonegap-plugin.git 3.4.3

