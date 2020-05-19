import React, { Component } from "react";
import CreateCommentForm from "./CreateCommentForm";
import { connect } from "react-redux";
import { createComment } from "../../actions/comments";
import "./CreateComment.css";

class CreateCommentContainer extends Component {
  state = {
    content: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      createComment(
        this.state.content,
        this.props.ticketId,
        this.props.userId
        // this.props.history
      )
    );
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        {/* {this.props.userCreated ? <h1>Account created</h1> : null} */}
        <CreateCommentForm
          text={"CommentForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN comment", state);
  return {
    userId: state.user.userId,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CreateCommentContainer);
