/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */


import en_us from "./en_us";

var s = {};

// TODO port language choosing code
s = en_us;


function f(key) {
  // strip whitespace from key
  key = key.replace(/\s+$/,"").replace(/^s+/,"");
  if (typeof s[key] === "undefined") {
    return key;
  }
  return s[key];
}

export default f;
