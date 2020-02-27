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
        <h3>Comments</h3>
        <ul className="comment-list">
          {!comments
            ? "Loading..."
            : comments.map(comment => {
                return (
                  <li key={comment.id}>
                    <p>
                      {user.username} says: {comment.content}
                    </p>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}
