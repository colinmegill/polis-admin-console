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

const conversation_stats = (state = {
  loading: false,
  conversation_stats: {},
}, action) => {
  switch (action.type) {
  case types.REQUEST_CONVERSATION_STATS:
    return Object.assign({}, state, {
      loading: true
    });
  case types.RECEIVE_CONVERSATION_STATS:
    return Object.assign({}, state, {
      loading: false,
      conversation_stats: action.data
    });
  default:
    return state;
  }
};

export default conversation_stats;
