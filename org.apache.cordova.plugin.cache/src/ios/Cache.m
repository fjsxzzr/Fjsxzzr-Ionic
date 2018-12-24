
/*
 Copyright © 2014-2015 Andrew Stevens <andy@andxyz.com>,
 Modern Alchemits <office@modalog.at>
 
 Licensed under MIT.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 persons to whom the Software is furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

#import "Cache.h"

@implementation Cache

@synthesize command;

- (void)clear:(CDVInvokedUrlCommand *)command
{
    NSLog(@"Cordova Cache Plugin method clear() called.");
    /*
    _callbackId = command.callbackId;
    
    // Plugin arguments are not used at the moment.
    // NSArray* arguments = command.arguments;
    
    [self.commandDelegate runInBackground:^{
        // clear cache
        [[NSURLCache sharedURLCache] removeAllCachedResponses];
    }];
    
    [self success:@"NSURLCache"];*/
    NSString *cachesPath = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES)[0];
    NSArray *subPathArr = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:cachesPath error:nil];
    NSString *filePath = nil;
    NSError *error = nil;
    for (NSString *subPath in subPathArr) {
        filePath = [cachesPath stringByAppendingPathComponent:subPath];
        [[NSFileManager defaultManager] removeItemAtPath:filePath error:&error];
    }
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"true"];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    
}

- (void)cleartemp:(CDVInvokedUrlCommand *)command
{
    NSLog(@"Cordova Cache Plugin method cleartemp() called.");
    
    _callbackId = command.callbackId;
    
    // empty the tmp directory
    NSFileManager *fileMgr = [[NSFileManager alloc] init];
    // setup loop vars
    NSError *err = nil;
    BOOL hasErrors = NO;
    NSString *tempDirectoryPath = NSTemporaryDirectory();
    NSDirectoryEnumerator *directoryEnumerator = [fileMgr enumeratorAtPath:tempDirectoryPath];
    NSString *fileName = nil;
    BOOL result;
    // clear contents of NSTemporaryDirectory
    while ((fileName = [directoryEnumerator nextObject])) {
        NSString *filePath = [tempDirectoryPath stringByAppendingPathComponent:fileName];
        result = [fileMgr removeItemAtPath:filePath error:&err];
        if (!result && err) {
            NSLog(@"Failed to delete: %@ (error: %@)", filePath, err);
            hasErrors = YES;
        }
    }
    
    // send result
    if (hasErrors) {
        [self error:@"NSTemporaryDirectory"];
    }
    else {
        [self success:@"NSTemporaryDirectory"];
    }
}

- (void)success:(NSString *)message
{
    NSString *resultMsg = [NSString stringWithFormat:@"Cordova Cache Plugin cleared the cache: (%@).", message];
    NSLog(@"%@", resultMsg);
    
    // create cordova result
    CDVPluginResult *pluginResult = [CDVPluginResult
                                     resultWithStatus:CDVCommandStatus_OK
                                     messageAsString:[resultMsg stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding]];
    
    // send cordova result
    [self.commandDelegate sendPluginResult:pluginResult callbackId:_callbackId];
}

- (void)error:(NSString *)message
{
    NSString *resultMsg = [NSString stringWithFormat:@"Cordova Cache Plugin error clearing: (%@).", message];
    NSLog(@"%@", resultMsg);
    
    // create cordova result
    CDVPluginResult *pluginResult = [CDVPluginResult
                                     resultWithStatus:CDVCommandStatus_ERROR
                                     messageAsString:[resultMsg stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding]];
    
    // send cordova result
    [self.commandDelegate sendPluginResult:pluginResult callbackId:_callbackId];
}

- (void)onPause
{
    NSLog(@"Cordova Cache Plugin onPause() fired");
    // [self clear];
    // [self cleartemp];
}

- (void)onResume
{
    NSLog(@"Cordova Cache Plugin onResume() fired");
    // [self clear];
    // [self cleartemp];
}

- (void)pluginInitialize
{
    if (UIApplicationDidEnterBackgroundNotification && UIApplicationWillEnterForegroundNotification) {
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onPause)
                                                     name:UIApplicationDidEnterBackgroundNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onResume)
                                                     name:UIApplicationWillEnterForegroundNotification
                                                   object:nil];
    }
}

- (void)getCacheSize:(CDVInvokedUrlCommand *)command{
    //_callbackId = command.callbackId;
    /*
    NSInteger sizeInteger = [[NSURLCache] currentDiskUsage];

    NSString *resultMsg = [NSString stringWithFormat:@"%d", sizeInteger];
    
    
    NSLog(@"%@", resultMsg);
    
    // create cordova result
    CDVPluginResult *pluginResult = [CDVPluginResult
                                     resultWithStatus:CDVCommandStatus_OK
                                     messageAsString:resultMsg];
    
    // send cordova result
    [self.commandDelegate sendPluginResult:pluginResult callbackId:_callbackId];
    */
    NSString *cachesPath = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES)[0];
    NSArray *subPathArr = [[NSFileManager defaultManager] subpathsAtPath:cachesPath];
    NSString *filePath = nil;
    NSInteger totleSize = 0;
    for (NSString *subPath in subPathArr){
        filePath = [cachesPath stringByAppendingPathComponent:subPath];
        NSLog(filePath);
        BOOL isDirectory = NO;
        BOOL isExist = [[NSFileManager defaultManager] fileExistsAtPath:filePath isDirectory:&isDirectory];
        if (!isExist || isDirectory || [filePath containsString:@".DS"]){
            continue;
        }
        NSDictionary *dict = [[NSFileManager defaultManager] attributesOfItemAtPath:filePath error:nil];
        NSInteger size = [dict[@"NSFileSize"] integerValue];
        totleSize += size;
    }
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:totleSize];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    
}
@end
