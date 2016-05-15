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

const conversations = (state = {
  loading: false,
  error: false,
  conversations: null
}, action) => {
  switch (action.type) {
  case types.REQUEST_CONVERSATIONS:
    return Object.assign({}, state, {
      loading: true,
      error: false,
    });
  case types.RECEIVE_CONVERSATIONS:
    return Object.assign({}, state, {
      loading: false,
      error: false,
      conversations: action.data
    });
  case types.CONVERSATIONS_FETCH_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.data,
      conversations: null
    })
  default:
    return state;
  }
};

export default conversations;
