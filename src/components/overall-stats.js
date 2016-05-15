/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import _ from "lodash";

// @connect(state => state.data)
@Radium
class OverallStats extends React.Component {
  render() {
    return (
      <div>
        <h1>OverallStats</h1>
        <div>
          "OverallStats"
        </div>
      </div>
    );
  }
}

export default OverallStats;
