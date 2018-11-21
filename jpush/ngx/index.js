var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Jpush = /** @class */ (function (_super) {
    __extends(Jpush, _super);
    function Jpush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jpush.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    Jpush.prototype.setDebugMode = function (enable) { return cordova(this, "setDebugMode", {}, arguments); };
    Jpush.prototype.getRegistrationID = function () { return cordova(this, "getRegistrationID", {}, arguments); };
    Jpush.prototype.stopPush = function () { return cordova(this, "stopPush", {}, arguments); };
    Jpush.prototype.resumePush = function () { return cordova(this, "resumePush", {}, arguments); };
    Jpush.prototype.isPushStopped = function () { return cordova(this, "isPushStopped", {}, arguments); };
    Jpush.prototype.setTags = function (params) { return cordova(this, "setTags", {}, arguments); };
    Jpush.prototype.addTags = function (params) { return cordova(this, "addTags", {}, arguments); };
    Jpush.prototype.deleteTags = function (params) { return cordova(this, "deleteTags", {}, arguments); };
    Jpush.prototype.cleanTags = function (params) { return cordova(this, "cleanTags", {}, arguments); };
    Jpush.prototype.getAllTags = function (params) { return cordova(this, "getAllTags", {}, arguments); };
    Jpush.prototype.checkTagBindState = function (params) { return cordova(this, "checkTagBindState", {}, arguments); };
    Jpush.prototype.setAlias = function (params) { return cordova(this, "setAlias", {}, arguments); };
    Jpush.prototype.deleteAlias = function (params) { return cordova(this, "deleteAlias", {}, arguments); };
    Jpush.prototype.getAlias = function (params) { return cordova(this, "getAlias", {}, arguments); };
    Jpush.prototype.getUserNotificationSettings = function () { return cordova(this, "getUserNotificationSettings", {}, arguments); };
    Jpush.prototype.clearLocalNotifications = function () { return cordova(this, "clearLocalNotifications", {}, arguments); };
    Jpush.prototype.setBadge = function (badge) { return cordova(this, "setBadge", {}, arguments); };
    Jpush.prototype.resetBadge = function () { return cordova(this, "resetBadge", {}, arguments); };
    Jpush.prototype.setApplicationIconBadgeNumber = function (badge) { return cordova(this, "setApplicationIconBadgeNumber", {}, arguments); };
    Jpush.prototype.getApplicationIconBadgeNumber = function () { return cordova(this, "getApplicationIconBadgeNumber", {}, arguments); };
    Jpush.prototype.addLocalNotificationForIOS = function (delayTime, content, badge, identifierKey, extras) { return cordova(this, "addLocalNotificationForIOS", {}, arguments); };
    Jpush.prototype.deleteLocalNotificationWithIdentifierKeyInIOS = function (identifierKey) { return cordova(this, "deleteLocalNotificationWithIdentifierKeyInIOS", {}, arguments); };
    Jpush.prototype.addDismissActions = function (actions, categoryId) { return cordova(this, "addDismissActions", {}, arguments); };
    Jpush.prototype.addNotificationActions = function (actions, categoryId) { return cordova(this, "addNotificationActions", {}, arguments); };
    Jpush.prototype.setLocation = function (latitude, longitude) { return cordova(this, "setLocation", {}, arguments); };
    Jpush.prototype.startLogPageView = function (pageName) { return cordova(this, "startLogPageView", {}, arguments); };
    Jpush.prototype.stopLogPageView = function (pageName) { return cordova(this, "stopLogPageView", {}, arguments); };
    Jpush.prototype.beginLogPageView = function (pageName, duration) { return cordova(this, "beginLogPageView", {}, arguments); };
    Jpush.prototype.getConnectionState = function () { return cordova(this, "getConnectionState", {}, arguments); };
    Jpush.prototype.setBasicPushNotificationBuilder = function () { return cordova(this, "setBasicPushNotificationBuilder", {}, arguments); };
    Jpush.prototype.setCustomPushNotificationBuilder = function () { return cordova(this, "setCustomPushNotificationBuilder", {}, arguments); };
    Jpush.prototype.clearAllNotification = function () { return cordova(this, "clearAllNotification", {}, arguments); };
    Jpush.prototype.clearNotificationById = function (id) { return cordova(this, "clearNotificationById", {}, arguments); };
    Jpush.prototype.setLatestNotificationNum = function (num) { return cordova(this, "setLatestNotificationNum", {}, arguments); };
    Jpush.prototype.addLocalNotification = function (builderId, content, title, notificationId, broadcastTime, extras) { return cordova(this, "addLocalNotification", {}, arguments); };
    Jpush.prototype.removeLocalNotification = function (notificationId) { return cordova(this, "removeLocalNotification", {}, arguments); };
    Jpush.prototype.reportNotificationOpened = function (msgId) { return cordova(this, "reportNotificationOpened", {}, arguments); };
    Jpush.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    Jpush.prototype.setSilenceTime = function (startHour, startMinute, endHour, endMinute) { return cordova(this, "setSilenceTime", {}, arguments); };
    Jpush.prototype.setPushTime = function (weekdays, startHour, endHour) { return cordova(this, "setPushTime", {}, arguments); };
    Jpush.pluginName = "jpush";
    Jpush.plugin = "jpush-phonegap-plugin";
    Jpush.pluginRef = "JPush";
    Jpush.platforms = ["Android", "iOS"];
    Jpush = __decorate([
        Injectable()
    ], Jpush);
    return Jpush;
}(IonicNativePlugin));
export { Jpush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2pwdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQmpHLHlCQUFpQjs7OztJQVMxQyxvQkFBSTtJQUdKLDRCQUFZLGFBQUMsTUFBZTtJQUc1QixpQ0FBaUI7SUFHakIsd0JBQVE7SUFHUiwwQkFBVTtJQUdWLDZCQUFhO0lBR2IsdUJBQU8sYUFBQyxNQUFrQjtJQUcxQix1QkFBTyxhQUFDLE1BQWtCO0lBRzFCLDBCQUFVLGFBQUMsTUFBa0I7SUFHN0IseUJBQVMsYUFBQyxNQUFrQjtJQUc1QiwwQkFBVSxhQUFDLE1BQWtCO0lBTTdCLGlDQUFpQixhQUFDLE1BQWM7SUFHaEMsd0JBQVEsYUFBQyxNQUFvQjtJQUc3QiwyQkFBVyxhQUFDLE1BQW9CO0lBR2hDLHdCQUFRLGFBQUMsTUFBb0I7SUFlN0IsMkNBQTJCO0lBRzNCLHVDQUF1QjtJQUd2Qix3QkFBUSxhQUFDLEtBQWE7SUFHdEIsMEJBQVU7SUFHViw2Q0FBNkIsYUFBQyxLQUFhO0lBRzNDLDZDQUE2QjtJQUc3QiwwQ0FBMEIsYUFBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxLQUFhLEVBQUUsYUFBcUIsRUFBRSxNQUFlO0lBR3BILDZEQUE2QyxhQUFDLGFBQXFCO0lBR25FLGlDQUFpQixhQUFDLE9BQXNCLEVBQUUsVUFBa0I7SUFHNUQsc0NBQXNCLGFBQUMsT0FBc0IsRUFBRSxVQUFrQjtJQUdqRSwyQkFBVyxhQUFDLFFBQWdCLEVBQUUsU0FBaUI7SUFHL0MsZ0NBQWdCLGFBQUMsUUFBZ0I7SUFHakMsK0JBQWUsYUFBQyxRQUFnQjtJQUdoQyxnQ0FBZ0IsYUFBQyxRQUFnQixFQUFFLFFBQWdCO0lBR25ELGtDQUFrQjtJQUdsQiwrQ0FBK0I7SUFHL0IsZ0RBQWdDO0lBR2hDLG9DQUFvQjtJQUdwQixxQ0FBcUIsYUFBQyxFQUFVO0lBR2hDLHdDQUF3QixhQUFDLEdBQVc7SUFHcEMsb0NBQW9CLGFBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLGNBQXNCLEVBQUUsYUFBcUIsRUFBRSxNQUFlO0lBR3RJLHVDQUF1QixhQUFDLGNBQXNCO0lBRzlDLHdDQUF3QixhQUFDLEtBQWE7SUFHdEMsaUNBQWlCO0lBR2pCLDhCQUFjLGFBQUMsU0FBaUIsRUFBRSxXQUFtQixFQUFFLE9BQWUsRUFBRSxTQUFpQjtJQUd6RiwyQkFBVyxhQUFDLFFBQXVCLEVBQUUsU0FBaUIsRUFBRSxPQUFlOzs7OztJQWhKNUQsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQTNDbEI7RUEyQzJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUganB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IGpwdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9qcHVzaCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUganB1c2g6IGpwdXNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5qcHVzaC5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2pwdXNoJyxcbiAgcGx1Z2luOiAnanB1c2gtcGhvbmVnYXAtcGx1Z2luJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0pQdXNoJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGVidWdNb2RlKGVuYWJsZTogYm9vbGVhbik6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVnaXN0cmF0aW9uSUQoKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBzdG9wUHVzaCgpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIHJlc3VtZVB1c2goKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBpc1B1c2hTdG9wcGVkKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VGFncyhwYXJhbXM6IFRhZ09wdGlvbnMpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIGFkZFRhZ3MocGFyYW1zOiBUYWdPcHRpb25zKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBkZWxldGVUYWdzKHBhcmFtczogVGFnT3B0aW9ucyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYW5UYWdzKHBhcmFtczogVGFnT3B0aW9ucyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsVGFncyhwYXJhbXM6IFRhZ09wdGlvbnMpOiBQcm9taXNlPGFueT47XG4gIFxuICAvKipcbiAgKiBAcGFyYW0gcGFyYW1zIHsgc2VxdWVuY2U6IG51bWJlciwgdGFnOiBzdHJpbmcgfVxuICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrVGFnQmluZFN0YXRlKHBhcmFtczogb2JqZWN0KTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBzZXRBbGlhcyhwYXJhbXM6IEFsaWFzT3B0aW9ucyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlQWxpYXMocGFyYW1zOiBBbGlhc09wdGlvbnMpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIGdldEFsaWFzKHBhcmFtczogQWxpYXNPcHRpb25zKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgLyoqXG4gICogRGV0ZXJtaW5hdGUgd2hldGhlciB0aGUgYXBwbGljYXRpb24gbm90aWZpY2F0aW9uIGhhcyBiZWVuIG9wZW5lZC5cbiAgKlxuICAqIGlPUzogMDogY2xvc2VkOyA+MTogb3BlbmVkLlxuICAqICBVSVJlbW90ZU5vdGlmaWNhdGlvblR5cGVOb25lID0gMCxcbiAgKiAgVUlSZW1vdGVOb3RpZmljYXRpb25UeXBlQmFkZ2UgPSAxIDw8IDAsXG4gICogIFVJUmVtb3RlTm90aWZpY2F0aW9uVHlwZVNvdW5kID0gMSA8PCAxLFxuICAqICBVSVJlbW90ZU5vdGlmaWNhdGlvblR5cGVBbGVydCA9IDEgPDwgMixcbiAgKiAgVUlSZW1vdGVOb3RpZmljYXRpb25UeXBlTmV3c3N0YW5kQ29udGVudEF2YWlsYWJpbGl0eSA9IDEgPDwgM1xuICAqXG4gICogQW5kcm9pZDogMDogY2xvc2VkOyAxOiBvcGVuZWQuXG4gICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXJMb2NhbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBzZXRCYWRnZShiYWRnZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICByZXNldEJhZGdlKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXBwbGljYXRpb25JY29uQmFkZ2VOdW1iZXIoYmFkZ2U6IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwbGljYXRpb25JY29uQmFkZ2VOdW1iZXIoKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBhZGRMb2NhbE5vdGlmaWNhdGlvbkZvcklPUyhkZWxheVRpbWU6IG51bWJlciwgY29udGVudDogc3RyaW5nLCBiYWRnZTogbnVtYmVyLCBpZGVudGlmaWVyS2V5OiBzdHJpbmcsIGV4dHJhcz86IG9iamVjdCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlTG9jYWxOb3RpZmljYXRpb25XaXRoSWRlbnRpZmllcktleUluSU9TKGlkZW50aWZpZXJLZXk6IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgYWRkRGlzbWlzc0FjdGlvbnMoYWN0aW9uczogQXJyYXk8b2JqZWN0PiwgY2F0ZWdvcnlJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBhZGROb3RpZmljYXRpb25BY3Rpb25zKGFjdGlvbnM6IEFycmF5PG9iamVjdD4sIGNhdGVnb3J5SWQ6IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TG9jYXRpb24obGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIHN0YXJ0TG9nUGFnZVZpZXcocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcExvZ1BhZ2VWaWV3KHBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIGJlZ2luTG9nUGFnZVZpZXcocGFnZU5hbWU6IHN0cmluZywgZHVyYXRpb246IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29ubmVjdGlvblN0YXRlKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QmFzaWNQdXNoTm90aWZpY2F0aW9uQnVpbGRlcigpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIHNldEN1c3RvbVB1c2hOb3RpZmljYXRpb25CdWlsZGVyKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXJBbGxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBjbGVhck5vdGlmaWNhdGlvbkJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TGF0ZXN0Tm90aWZpY2F0aW9uTnVtKG51bTogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xuICBcbiAgQENvcmRvdmEoKVxuICBhZGRMb2NhbE5vdGlmaWNhdGlvbihidWlsZGVySWQ6IG51bWJlciwgY29udGVudDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBub3RpZmljYXRpb25JZDogbnVtYmVyLCBicm9hZGNhc3RUaW1lOiBudW1iZXIsIGV4dHJhcz86IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlTG9jYWxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgcmVwb3J0Tm90aWZpY2F0aW9uT3BlbmVkKG1zZ0lkOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PjtcbiAgXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2lsZW5jZVRpbWUoc3RhcnRIb3VyOiBudW1iZXIsIHN0YXJ0TWludXRlOiBudW1iZXIsIGVuZEhvdXI6IG51bWJlciwgZW5kTWludXRlOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG4gIFxuICBAQ29yZG92YSgpXG4gIHNldFB1c2hUaW1lKHdlZWtkYXlzOiBBcnJheTxzdHJpbmc+LCBzdGFydEhvdXI6IG51bWJlciwgZW5kSG91cjogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ09wdGlvbnMge1xuICBzZXF1ZW5jZTogbnVtYmVyO1xuICB0YWdzPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGlhc09wdGlvbnMge1xuICBzZXF1ZW5jZTogbnVtYmVyO1xuICBhbGlhcz86IHN0cmluZztcbn0iXX0=