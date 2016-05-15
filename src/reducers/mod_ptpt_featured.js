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

const featured_participants = (state = {
  loading: false,
  featured_participants: null
}, action) => {
  switch (action.type) {
  case types.REQUEST_FEATURED_PARTICIPANTS:
    return Object.assign({}, state, {
      loading: true
    });
  case types.RECEIVE_FEATURED_PARTICIPANTS:
    return Object.assign({}, state, {
      loading: false,
      featured_participants: action.data
    });
  default:
    return state;
  }
};

export default featured_participants;
