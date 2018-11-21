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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppUpdateOriginal = /** @class */ (function (_super) {
    __extends(AppUpdateOriginal, _super);
    function AppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdateOriginal.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdateOriginal.pluginName = "AppUpdate";
    AppUpdateOriginal.plugin = "cordova-plugin-app-update";
    AppUpdateOriginal.pluginRef = "AppUpdate";
    AppUpdateOriginal.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdateOriginal.platforms = ["Android"];
    return AppUpdateOriginal;
}(IonicNativePlugin));
var AppUpdate = new AppUpdateOriginal();
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUR6Qyw2QkFBaUI7Ozs7SUFVOUMsa0NBQWMsYUFBQyxTQUFpQixFQUFFLE9BQTBCOzs7Ozs7b0JBOUQ5RDtFQW9EK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBVcGRhdGVPcHRpb25zIHtcbiAgYXV0aFR5cGU/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgc2tpcFByb21wdERpYWxvZz86IGJvb2xlYW4sXG4gIHNraXBQcm9ncmVzc0RpYWxvZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgVXBkYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc2VsZi11cGRhdGUgZm9yIGFuZHJvaWRcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBZb3Ugc2hvdWxkIGZpcnN0IGhvc3QgYW4gWE1MIGZpbGUgb24geW91ciBzZXJ2ZXIgd2l0aCB0aGUgZm9sbG93aW5nIGRhdGEgaW4gaXQ6XG4gKiBgYGB4bWxcbiAqIDx1cGRhdGU+XG4gKiAgICAgPHZlcnNpb24+MzAyMDQ4PC92ZXJzaW9uPlxuICogICAgIDxuYW1lPkFQSyBOYW1lPC9uYW1lPlxuICogICAgIDx1cmw+aHR0cHM6Ly95b3VyLXJlbW90ZS1hcGkuY29tL1lvdXJBcHAuYXBrPC91cmw+XG4gKiA8L3VwZGF0ZT5cbiAqIGBgYFxuICpcbiAqIFRoZW4gdXNlIHRoZSBmb2xsb3dpbmcgY29kZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBVcGRhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC11cGRhdGUnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVXBkYXRlOiBBcHBVcGRhdGUpIHtcbiAqXG4gKiAgICBjb25zdCB1cGRhdGVVcmwgPSAnaHR0cHM6Ly95b3VyLXJlbW90ZS1hcGkuY29tL3VwZGF0ZS54bWwnO1xuICogICAgdGhpcy5hcHBVcGRhdGUuY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ1VwZGF0ZSBhdmFpbGFibGUnKSB9KTtcbiAqXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBUaGUgcGx1Z2luIHdpbGwgY29tcGFyZSB0aGUgYXBwIHZlcnNpb24gYW5kIHVwZGF0ZSBpdCBhdXRvbWF0aWNhbGx5IGlmIHRoZSBBUEkgaGFzIGEgbmV3ZXIgdmVyc2lvbiB0byBpbnN0YWxsLlxuICogQGludGVyZmFjZXNcbiAqIEFwcFVwZGF0ZU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJyxcbiAgcGx1Z2luUmVmOiAnQXBwVXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YWVub3cvY29yZG92YS1wbHVnaW4tYXBwLXVwZGF0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgYW5kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlVXJsIHVwZGF0ZSBhcGkgdXJsXG4gICAqIEBwYXJhbSB7QXBwVXBkYXRlT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBBcHBVcGRhdGVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==