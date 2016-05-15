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

const styles = {
  root: {
    fontWeight: 300,
  },
  header: {
    backgroundColor: "rgba(3, 169, 244,.5)",
    color: "white",
    padding: "16px",
    fontSize: "1em"
  }
};

const TrialBanner = (props) => {
  const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

  return (
    <div style={rootStyle}>
      {
        false ?
          <div style={styles.header}>
            { props.title }
          </div> : ""
      }
      {props.children}
    </div>
  );
};

export default TrialBanner;
