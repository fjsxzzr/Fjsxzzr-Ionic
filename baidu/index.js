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
var BaidumapLocationOriginal = /** @class */ (function (_super) {
    __extends(BaidumapLocationOriginal, _super);
    function BaidumapLocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaidumapLocationOriginal.prototype.getCurrentPosition = function (success, error, options) { return cordova(this, "getCurrentPosition", {}, arguments); };
    BaidumapLocationOriginal.pluginName = "BaidumapLocation";
    BaidumapLocationOriginal.plugin = "cordova-plugin-baidumaplocation";
    BaidumapLocationOriginal.pluginRef = "baidumap_location";
    BaidumapLocationOriginal.platforms = ["Android", "iOS"];
    return BaidumapLocationOriginal;
}(IonicNativePlugin));
var BaidumapLocation = new BaidumapLocationOriginal();
export { BaidumapLocation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhaWR1bWFwLWxvY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCbEMsb0NBQWlCOzs7O0lBR3JELDZDQUFrQixhQUFDLE9BQWtCLEVBQUUsS0FBZ0IsRUFBRSxPQUFhOzs7OzsyQkE3Q3hFO0VBMENzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCYWlkdW1hcCBMb2NhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFpZHVtYXBMb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFpZHVtYXAtbG9jYXRpb24nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhaWR1bWFwTG9jYXRpb246IEJhaWR1bWFwTG9jYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhaWR1bWFwTG9jYXRpb24uZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWlkdW1hcExvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmFpZHVtYXBsb2NhdGlvbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdiYWlkdW1hcF9sb2NhdGlvbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhaWR1bWFwTG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uLCBvcHRpb25zPzogYW55KTogdm9pZCB7fVxufVxuIl19