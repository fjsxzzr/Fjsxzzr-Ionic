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
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppUpdate = /** @class */ (function (_super) {
    __extends(AppUpdate, _super);
    function AppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdate.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdate.pluginName = "AppUpdate";
    AppUpdate.plugin = "cordova-plugin-app-update";
    AppUpdate.pluginRef = "AppUpdate";
    AppUpdate.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdate.platforms = ["Android"];
    AppUpdate = __decorate([
        Injectable()
    ], AppUpdate);
    return AppUpdate;
}(IonicNativePlugin));
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC11cGRhdGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUR6Qyw2QkFBaUI7Ozs7SUFVOUMsa0NBQWMsYUFBQyxTQUFpQixFQUFFLE9BQTBCOzs7Ozs7SUFWakQsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQXBEdEI7RUFvRCtCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwVXBkYXRlT3B0aW9ucyB7XG4gIGF1dGhUeXBlPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHNraXBQcm9tcHREaWFsb2c/OiBib29sZWFuLFxuICBza2lwUHJvZ3Jlc3NEaWFsb2c/OiBib29sZWFuXG59XG5cbi8qKlxuICogQG5hbWUgQXBwIFVwZGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNlbGYtdXBkYXRlIGZvciBhbmRyb2lkXG4gKlxuICogQHVzYWdlXG4gKlxuICogWW91IHNob3VsZCBmaXJzdCBob3N0IGFuIFhNTCBmaWxlIG9uIHlvdXIgc2VydmVyIHdpdGggdGhlIGZvbGxvd2luZyBkYXRhIGluIGl0OlxuICogYGBgeG1sXG4gKiA8dXBkYXRlPlxuICogICAgIDx2ZXJzaW9uPjMwMjA0ODwvdmVyc2lvbj5cbiAqICAgICA8bmFtZT5BUEsgTmFtZTwvbmFtZT5cbiAqICAgICA8dXJsPmh0dHBzOi8veW91ci1yZW1vdGUtYXBpLmNvbS9Zb3VyQXBwLmFwazwvdXJsPlxuICogPC91cGRhdGU+XG4gKiBgYGBcbiAqXG4gKiBUaGVuIHVzZSB0aGUgZm9sbG93aW5nIGNvZGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwVXBkYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtdXBkYXRlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFVwZGF0ZTogQXBwVXBkYXRlKSB7XG4gKlxuICogICAgY29uc3QgdXBkYXRlVXJsID0gJ2h0dHBzOi8veW91ci1yZW1vdGUtYXBpLmNvbS91cGRhdGUueG1sJztcbiAqICAgIHRoaXMuYXBwVXBkYXRlLmNoZWNrQXBwVXBkYXRlKHVwZGF0ZVVybCkudGhlbigoKSA9PiB7IGNvbnNvbGUubG9nKCdVcGRhdGUgYXZhaWxhYmxlJykgfSk7XG4gKlxuICogfVxuICogYGBgXG4gKlxuICogVGhlIHBsdWdpbiB3aWxsIGNvbXBhcmUgdGhlIGFwcCB2ZXJzaW9uIGFuZCB1cGRhdGUgaXQgYXV0b21hdGljYWxseSBpZiB0aGUgQVBJIGhhcyBhIG5ld2VyIHZlcnNpb24gdG8gaW5zdGFsbC5cbiAqIEBpbnRlcmZhY2VzXG4gKiBBcHBVcGRhdGVPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwVXBkYXRlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwLXVwZGF0ZScsXG4gIHBsdWdpblJlZjogJ0FwcFVwZGF0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdmFlbm93L2NvcmRvdmEtcGx1Z2luLWFwcC11cGRhdGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFVwZGF0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGFuZCB1cGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZVVybCB1cGRhdGUgYXBpIHVybFxuICAgKiBAcGFyYW0ge0FwcFVwZGF0ZU9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGNoZWNrQXBwVXBkYXRlKHVwZGF0ZVVybDogc3RyaW5nLCBvcHRpb25zPzogQXBwVXBkYXRlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=