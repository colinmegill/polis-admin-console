/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import * as types from "../actions";

const signout = (state = {
  loading: false,
  signout: false,
  error: false
}, action) => {
  switch (action.type) {
  case types.SIGNOUT_INITIATED:
    return Object.assign({}, state, {
      loading: true,
      error: false
    });
  case types.SIGNOUT_SUCCESSFUL:
    return Object.assign({}, state, {
      loading: false,
      signout: true,
      error: false
    });
  case types.SIGNOUT_SUCCESSFUL:
    return Object.assign({}, state, {
      loading: false,
      signout: false,
      error: true
    });
  default:
    return state;
  }
};

export default signout;
