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
import {
  changeCommentStatusToAccepted,
  changeCommentStatusToRejected
} from '../../actions'
import Radium from "radium";
import _ from "lodash";
import Comment from "./comment";
import Spinner from "../framework/spinner";
import Flex from "../framework/flex";

@connect(state => state.mod_comments_unmoderated )
@Radium
class ModerateCommentsTodo extends React.Component {

  onCommentAccepted(comment) {
    this.props.dispatch(changeCommentStatusToAccepted(comment))
  }
  onCommentRejected(comment) {
    this.props.dispatch(changeCommentStatusToRejected(comment))
  }
  createCommentMarkup() {
    const comments = this.props.unmoderated_comments.map((comment, i)=>{
      return (
        <Comment
          key={i}
          acceptButton
          rejectButton
          acceptClickHandler={this.onCommentAccepted.bind(this)}
          rejectClickHandler={this.onCommentRejected.bind(this)}
          comment={comment}/>
      )
    })
    return comments;
  }
  renderSpinner() {
    return (
      <Flex>
        <Spinner/>
        <span style={{
            marginLeft: 10,
            position: "relative",
            top: -2
          }}> Loading unmoderated comments... </span>
      </Flex>
    )
  }
  render() {
    return (
      <div>
        <div>
          {
            this.props.unmoderated_comments !== null ?
            this.createCommentMarkup() :
            this.renderSpinner()
          }
        </div>
      </div>
    );
  }
}

export default ModerateCommentsTodo;
