package com.testapp;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class NativeCustomModule extends ReactContextBaseJavaModule {
    public NativeCustomModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeCustom";
    }
    private Promise mPromise;

    @ReactMethod
    public void getValue(Promise promise) {
        this.mPromise = promise;
        try {
            this.getSumValue();
        } catch (IllegalViewOperationException e) {
            promise.reject(e.getMessage(), e);
        }
    }

    private void getSumValue() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                int sum = 0;
                for (int i = 0; i < 1000; i++) {
                    for (int j = 0; j < 1000; j++) {
                        for (int k = 0; k < 1000; k++) {
                            sum = sum + i + j + k;
                        }
                    }
                }
                mPromise.resolve(sum);
            }
        }).start();
    }

}
