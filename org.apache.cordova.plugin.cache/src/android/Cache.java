/*
 The MIT License (MIT)
 Copyright © 2014-2015 Andrew Stevens <andy@andxyz.com>, Modern Alchemits <office@modalog.at>

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

package org.apache.cordova.plugin.cache;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.File;

import android.annotation.TargetApi;
import android.app.Activity;
import android.util.Log;

@TargetApi(19)
public class Cache extends CordovaPlugin {
	private static final String LOG_TAG = "Cache";
	private CallbackContext callbackContext;

	/**
	 * Constructor.
	 */
	public Cache() {

	}

	@Override
	public boolean execute (String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		/*try
		{
		*/
		if ( action.equals("clear") ) {
			Log.v(LOG_TAG, "Cordova Android Cache.clear() called.");
			this.callbackContext = callbackContext;

			final Cache self = this;
			cordova.getActivity().runOnUiThread( new Runnable() {
				public void run() {
					try {
						// clear the cache
						self.webView.clearCache(true);

						// clear the data
						self.clearApplicationData();

						// send success result to cordova
						PluginResult result = new PluginResult(PluginResult.Status.OK);
						result.setKeepCallback(false);
						self.callbackContext.sendPluginResult(result);
					} catch ( Exception e ) {
						String msg = "Error while clearing webview cache.";
						Log.e(LOG_TAG, msg );

						// return error answer to cordova
						PluginResult result = new PluginResult(PluginResult.Status.ERROR, msg);
						result.setKeepCallback(false);
						self.callbackContext.sendPluginResult(result);
					}
				}
			});
			return true;
		}else if(action.equals("getCacheSize")){
			Log.v(LOG_TAG, "Cordova Android Cache.getCacheSize() called.");
			this.callbackContext = callbackContext;

			final Cache self = this;
			cordova.getActivity().runOnUiThread( new Runnable() {
				public void run() {
					try {
						long fileSize = self.getApplicationData();

						// send success result to cordova
						self.callbackContext.success(fileSize+"");
					} catch ( Exception e ) {
						String msg = "Error while clearing webview cache.";
						Log.e(LOG_TAG, msg );

						// return error answer to cordova
						PluginResult result = new PluginResult(PluginResult.Status.ERROR, msg);
						result.setKeepCallback(false);
						self.callbackContext.sendPluginResult(result);
					}
				}
			});
			return true;
		}
		return false;
		/*
		}
		catch (JSONException e)
		{
		// TODO: signal JSON problem to JS
		//callbackContext.error("Problem with JSON");
		return false;
		}
		*/
	}

	// http://www.hrupin.com/2011/11/how-to-clear-user-data-in-your-android-application-programmatically
	private void clearApplicationData() {
		File cache = this.cordova.getActivity().getCacheDir();
		File appDir = new File(cache.getParent());
		Log.i(LOG_TAG, "Absolute path: " + appDir.getAbsolutePath());
		if (appDir.exists()) {
			String[] children = appDir.list();
			for (String s : children) {
				if (!s.equals("lib")) {
					deleteDir(new File(appDir, s));
					Log.i(LOG_TAG, "File /data/data/APP_PACKAGE/" + s + " DELETED");
				}
			}
		}
	}

	private static boolean deleteDir(File dir) {
		Log.i(LOG_TAG, "Deleting: " + dir.getAbsolutePath());
		if (dir != null && dir.isDirectory()) {
			String[] children = dir.list();
			for (int i = 0; i < children.length; i++) {
				boolean success = deleteDir(new File(dir, children[i]));
				if (!success) {
					return false;
				}
			}
		}

		if(!"house.decor.mall.db".equals(dir.getName()) && !dir.isDirectory() && dir.exists()){
		  return dir.delete();
    }else{
      return true;
    }
	}


	// http://www.hrupin.com/2011/11/how-to-clear-user-data-in-your-android-application-programmatically
	private long getApplicationData() {
		File cache = this.cordova.getActivity().getCacheDir();
		File appDir = new File(cache.getParent());
		//Log.i(LOG_TAG, "Absolute path: " + appDir.getAbsolutePath());
		long fileSize = 0;
		if (appDir.exists()) {
			String[] children = appDir.list();
			for (String s : children) {
				if (!s.equals("lib")) {
					fileSize += getDirSize(new File(appDir, s));
					//Log.i(LOG_TAG, "File /data/data/APP_PACKAGE/" + s + " DELETED");
				}
			}
		}
		return fileSize;
	}

	private static long getDirSize(File dir) {
		if (dir != null && dir.isDirectory()) {
		  long fileSize = 0;
			String[] children = dir.list();
			for (int i = 0; i < children.length; i++) {
				fileSize += getDirSize(new File(dir, children[i]));
			}
		  Log.i(LOG_TAG, "add: " + dir.getName()+" size: "+dir.length()+" is dir: "+dir.isDirectory());
			return fileSize;
		}

		Log.i(LOG_TAG, "add: " + dir.getName()+" size: "+dir.length()+" is dir: "+dir.isDirectory());
    return dir.length();
	}
}
