import React, { Component } from "react";

export default class CommentsList extends Component {
  render() {
    // const { tickets } = this.props;
    const { comments } = this.props;
    const { user } = this.props;
    // const { eventId } = this.props;

    return (
      //add comment author
      <div>
        <ul className="comment-list">
          {!comments
            ? "Loading..."
            : comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    <p>
                      <em>{user.username}</em> says: {comment.content}
                    </p>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}
