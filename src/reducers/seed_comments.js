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

const seed_comments = (state = {
  seedText: "",
  loading: false,
  error: false,
  success: false,
}, action) => {
  switch (action.type) {
  case types.SEED_COMMENT_LOCAL_UPDATE:
    return Object.assign({}, state, {
      loading: false,
      error: false,
      seedText: action.text,
      success: false
    });
  case types.SUBMIT_SEED_COMMENT:
    return Object.assign({}, state, {
      loading: true,
      error: false,
      success: false
    });
  case types.SUBMIT_SEED_COMMENT_SUCCESS:
    return Object.assign({}, state, {
      loading: false,
      seedText: "",
      error: false,
      success: true
    });
  case types.SUBMIT_SEED_COMMENT_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.data.responseText,
      success: false
    });
  case types.SEED_COMMENT_TWEET_LOCAL_UPDATE:
    return Object.assign({}, state, {
      loading: false,
      error: false,
      seedText: action.text,
      success: false
    });
  case types.SUBMIT_SEED_COMMENT_TWEET:
    return Object.assign({}, state, {
      loading: true,
      error: false,
    });
  case types.SUBMIT_SEED_COMMENT_TWEET_SUCCESS:
    return Object.assign({}, state, {
      seedText: "",
      loading: false,
      error: false,
      success: true,
    });
  case types.SUBMIT_SEED_COMMENT_TWEET_ERROR: {
    return Object.assign({}, state, {
      loading: false,
      error: action.data.responseText,
    });
  }
  default:
    return state;
  }
};

export default seed_comments;
