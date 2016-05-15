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

import { doSignout } from "../actions";
import Flex from "./framework/flex";
import Button from "./framework/generic-button";
import Awesome from "react-fontawesome";
import StaticContentContainer from "./framework/static-content-container";

const styles = {
  heading: {
    fontSize: 36,
    display: "block",
    marginBottom: 20,
    color: "white"
  }
}

@connect(state => state.signout)
@Radium
class SignOut extends React.Component {

  componentWillMount () {
    var dest = this.props.location.pathname.slice("/signout".length);
    this.props.dispatch(doSignout(dest))
  }

  render() {
    return (
      <StaticContentContainer>
        <Flex>
          <p style={styles.heading}><Awesome name="sign-out" /> Signing Out</p>
        </Flex>
      </StaticContentContainer>
    );
  }
}

export default SignOut;
