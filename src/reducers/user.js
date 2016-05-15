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

const user = (state = {
  loading: false,
  user: null,
  error: false,
  isLoggedIn: undefined
}, action) => {
  switch (action.type) {
  case types.REQUEST_USER:
    return Object.assign({}, state, {
      loading: true
    });
  case types.RECEIVE_USER:
    return Object.assign({}, state, {
      loading: false,
      user: action.data,
      isLoggedIn: !!action.data.email,
      error: false
    });
  case types.USER_FETCH_ERROR:
    return Object.assign({}, state, {
      loading: false,
      user: null,
      error: true,
      status: action.status,
      isLoggedIn: false
    });
  default:
    return state;
  }
};

export default user;
