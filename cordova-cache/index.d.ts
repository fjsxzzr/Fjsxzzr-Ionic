import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Cordova Cache
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { CordovaCache } from '@ionic-native/cordova-cache';
 *
 *
 * constructor(private cordovaCache: CordovaCache) { }
 *
 * ...
 *
 *
 * this.cordovaCache.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class CordovaCacheOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    clear(success?: Function, error?: Function): void;
    cleartemp(success?: Function, error?: Function): void;
}

export declare const CordovaCache: CordovaCacheOriginal;