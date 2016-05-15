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
import _ from "lodash";

const accepted_comments = (state = {
  loading: false,
  comments: null,
  error: null
}, action) => {
  switch (action.type) {
  case types.REQUEST_COMMENTS:
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  case types.RECEIVE_COMMENTS:
    return Object.assign({}, state, {
      loading: false,
      error: null,
      comments: _.sortBy(action.data, "tid")
    });
  case types.COMMENTS_FETCH_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.data
    });
  default:
    return state;
  }
};

export default accepted_comments;
