//
//  TaskManager.m
//  TestApp
//
//  Created by Admin on 06/05/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "TaskManager.h"
#import <React/RCTLog.h>

@implementation TaskManager
RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getCalculatedValue, resolver: (RCTPromiseResolveBlock)resolve
     rejecter:(RCTPromiseRejectBlock)reject)
{
  long sum = 0;
  for (long i = 0; i < 1000; i++) {
      for (long j = 0; j < 1000; j++) {
          for (long k = 0; k < 1000; k++) {
              sum = sum + i + j + k;
          }
      }
  }
  NSString* valueToReturn = [NSString stringWithFormat:@"%ld", sum];

  if( valueToReturn ) {
    resolve(valueToReturn);
  } else {
    NSString *code = @"500";
    NSString *message = @"Cannot get value, something went wrong!";
    NSError *error = [NSError errorWithDomain:@"Internal error" code:500 userInfo:@{ @"text": @"something happend" }];
    reject(code, message, error);
  }
}

@end
