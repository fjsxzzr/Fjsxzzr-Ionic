import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Baidumap Location
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BaidumapLocation } from '@ionic-native/baidumap-location';
 *
 *
 * constructor(private baidumapLocation: BaidumapLocation) { }
 *
 * ...
 *
 *
 * this.baidumapLocation.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BaidumapLocationOriginal extends IonicNativePlugin {
    getCurrentPosition(success?: Function, error?: Function, options?: any): void;
}

export declare const BaidumapLocation: BaidumapLocationOriginal;