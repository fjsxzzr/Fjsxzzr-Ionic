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
var CordovaCacheOriginal = /** @class */ (function (_super) {
    __extends(CordovaCacheOriginal, _super);
    function CordovaCacheOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaCacheOriginal.prototype.clear = function (success, error) { return cordova(this, "clear", {}, arguments); };
    CordovaCacheOriginal.prototype.cleartemp = function (success, error) { return cordova(this, "cleartemp", {}, arguments); };
    CordovaCacheOriginal.pluginName = "CordovaCache";
    CordovaCacheOriginal.plugin = "org.apache.cordova.plugin.cache";
    CordovaCacheOriginal.pluginRef = "cache";
    CordovaCacheOriginal.platforms = ["Android", "iOS"];
    return CordovaCacheOriginal;
}(IonicNativePlugin));
var CordovaCache = new CordovaCacheOriginal();
export { CordovaCache };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtY2FjaGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IxRixnQ0FBaUI7Ozs7SUFTakQsNEJBQUssYUFBQyxPQUFrQixFQUFFLEtBQWdCO0lBRzFDLGdDQUFTLGFBQUMsT0FBa0IsRUFBRSxLQUFnQjs7Ozs7dUJBdkRoRDtFQTJDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBDb3Jkb3ZhIENhY2hlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb3Jkb3ZhQ2FjaGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmRvdmEtY2FjaGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmRvdmFDYWNoZTogQ29yZG92YUNhY2hlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jb3Jkb3ZhQ2FjaGUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb3Jkb3ZhQ2FjaGUnLFxuICBwbHVnaW46ICdvcmcuYXBhY2hlLmNvcmRvdmEucGx1Z2luLmNhY2hlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NhY2hlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZG92YUNhY2hlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXIoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKTogdm9pZCB7fVxuICBcbiAgQENvcmRvdmEoKVxuICBjbGVhcnRlbXAoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG59XG4iXX0=