/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import { combineReducers } from "redux";
import conversations from "./conversations";
import user from "./user";
import zid_metadata from "./zid_metadata";
import mod_comments_accepted from "./mod_comments_accepted";
import mod_comments_rejected from "./mod_comments_rejected";
import mod_comments_unmoderated from "./mod_comments_unmoderated";
import mod_ptpt_default from "./mod_ptpt_default";
import mod_ptpt_featured from "./mod_ptpt_featured";
import mod_ptpt_hidden from "./mod_ptpt_hidden";
import stats from "./stats";
import seed_comments from "./seed_comments";
import signout from "./signout";
import signin from "./signin";
import comments from "./comments";
import math from "./math";
import participants from "./participants";


const rootReducer = combineReducers({
  conversations,
  user,
  zid_metadata,
  math,
  comments,
  participants,
  mod_comments_accepted,
  mod_comments_rejected,
  mod_comments_unmoderated,
  mod_ptpt_default,
  mod_ptpt_featured,
  mod_ptpt_hidden,
  seed_comments,
  stats,
  signout,
  signin
});

export default rootReducer;
