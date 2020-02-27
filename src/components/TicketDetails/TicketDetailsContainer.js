import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommnetContainer from "../CreateComment/CreateCommentContainer";
import CommentsListContainer from "../CommentsList/CommentsListContainer";
import "./TicketDetails.css";

class TicketDetailsContainer extends Component {
  // componentDidMount() {
  //   const ticketId = this.props.match.params.ticketId;
  //   console.log;
  // }

  render() {
    console.log("user props", this.props.users);
    const commentTicket = this.props.tickets.find(
      ticket => ticket.id === parseInt(this.props.match.params.ticketId)
    );
    console.log("commentTicket", commentTicket);

    return (
      <div>
        <div className="ticket-detail">
          <h2>Ticket Details:</h2>
          <p>Created By: {this.props.users.username}</p>
          <img src={commentTicket.imageUrl} alt="image" />
          <h3>Price:{commentTicket.price}</h3>
          <p>Description: {commentTicket.description}</p>
        </div>

        <CommentsListContainer ticketId={commentTicket.id} />

        <CreateCommnetContainer ticketId={commentTicket.id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN Ticket Details", state);
  return {
    users: state.user,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments
  };
};

export default connect(mapStateToProps)(TicketDetailsContainer);
