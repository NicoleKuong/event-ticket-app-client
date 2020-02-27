import React, { Component } from "react";
import { connect } from "react-redux";
import CommentsList from "./CommentsList";
import { getComments } from "../../actions/comments";

class CommentsListContainer extends Component {
  componentDidMount() {
    // const ticketId = this.props.match.params.ticketId;
    console.log("ticketId", this.props.ticketId);
    this.props.dispatch(getComments(this.props.ticketId));
  }

  render() {
    return (
      <div>
        <CommentsList comments={this.props.comments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN CommentList", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentsListContainer);
