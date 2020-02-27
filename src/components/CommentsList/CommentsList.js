import React, { Component } from "react";

export default class CommentsList extends Component {
  render() {
    // const { tickets } = this.props;
    const { comments } = this.props;
    // const { eventId } = this.props;

    return (
      //add comment author
      <div>
        <h2>Comments</h2>
        <ul>
          {!comments
            ? "Loading..."
            : comments.map(comment => {
                return (
                  <li key={comment.id}>
                    <p>Content: {comment.content}</p>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}
