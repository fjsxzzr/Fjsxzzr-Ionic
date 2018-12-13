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
var CordovaCache = /** @class */ (function (_super) {
    __extends(CordovaCache, _super);
    function CordovaCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaCache.prototype.clear = function (success, error) { return cordova(this, "clear", {}, arguments); };
    CordovaCache.prototype.cleartemp = function (success, error) { return cordova(this, "cleartemp", {}, arguments); };
    CordovaCache.pluginName = "CordovaCache";
    CordovaCache.plugin = "org.apache.cordova.plugin.cache";
    CordovaCache.pluginRef = "cache";
    CordovaCache.platforms = ["Android", "iOS"];
    CordovaCache = __decorate([
        Injectable()
    ], CordovaCache);
    return CordovaCache;
}(IonicNativePlugin));
export { CordovaCache };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtY2FjaGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQStCMUYsZ0NBQWlCOzs7O0lBU2pELDRCQUFLLGFBQUMsT0FBa0IsRUFBRSxLQUFnQjtJQUcxQyxnQ0FBUyxhQUFDLE9BQWtCLEVBQUUsS0FBZ0I7Ozs7O0lBWm5DLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkEzQ3pCO0VBMkNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIENvcmRvdmEgQ2FjaGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvcmRvdmFDYWNoZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZG92YS1jYWNoZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZG92YUNhY2hlOiBDb3Jkb3ZhQ2FjaGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNvcmRvdmFDYWNoZS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NvcmRvdmFDYWNoZScsXG4gIHBsdWdpbjogJ29yZy5hcGFjaGUuY29yZG92YS5wbHVnaW4uY2FjaGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY2FjaGUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhQ2FjaGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcihzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pOiB2b2lkIHt9XG4gIFxuICBAQ29yZG92YSgpXG4gIGNsZWFydGVtcChzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbn1cbiJdfQ==