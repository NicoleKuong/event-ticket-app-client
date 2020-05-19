import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommnetContainer from "../CreateComment/CreateCommentContainer";
import CommentsListContainer from "../CommentsList/CommentsListContainer";
import { getEvents } from "../../actions/events";
import { getOneUserTickets } from "../../actions/ticket";
import { getAllTickets } from "../../actions/ticket";
import { getComments } from "../../actions/comments";
import TicketDetails from "./TicketDetails";

import "./TicketDetails.css";

class TicketDetailsContainer extends Component {
  componentDidMount = () => {
    this.props.dispatch(getEvents());
    this.props.dispatch(getOneUserTickets(this.props.match.params.ticketId));
    this.props.dispatch(getAllTickets());
    this.props.dispatch(getComments(this.props.match.params.ticketId));
  };

  render() {
    const currentTicket = this.props.tickets.find(
      (ticket) => ticket.id === parseInt(this.props.match.params.ticketId)
    );
    const currentEvent = this.props.events.find(
      (event) => event.id == currentTicket.eventId
    );

    const currentNoOfComments = this.props.comments.length;

    // console.log("comments props", currentNoOfComments);
    // console.log("currentTicket", currentTicket);
    // console.log("currentEvent", this.props.events);

    // console.log("ticket test", this.props.tickets.length);
    const ticketsPerUser =
      this.props.tickets.length &&
      this.props.tickets.filter(
        (ticket) => ticket.userId == currentTicket.userId
      ).length;

    // console.log("ticketsPerUser", ticketsPerUser);

    const ticketPerEvent =
      this.props.tickets.length &&
      this.props.tickets.filter(
        (ticket) => ticket.eventId == currentTicket.eventId
      ).length;

    // console.log("ticketPerEvent", ticketPerEvent);

    const sumOfTicketPrice =
      this.props.tickets.length &&
      this.props.tickets
        .filter((ticket) => ticket.eventId == currentTicket.eventId)
        .map((ticket) => parseInt(ticket.price))
        .reduce((a, c) => a + c, 0);

    // console.log("sumOfTicketPrice", sumOfTicketPrice);

    const avgTicketPrice = sumOfTicketPrice / ticketPerEvent;

    // console.log("currentticketprice",  currentTicket.price);
    const currentTicketPrice = parseInt(currentTicket.price);
    const testing =
      ((currentTicketPrice - avgTicketPrice) / avgTicketPrice) * 100;
    // console.log("testing price", testing);

    const createTicketTime =
      currentTicket && currentTicket.createdAt.slice(11, 13);

    console.log("createTicketTime", createTicketTime);

    const commentsPerTicket = currentTicket.comments && currentNoOfComments;
    // console.log("commentsPerTicket", commentsPerTicket);

    const calculateRisk = () => {
      let risk = 0;

      if (ticketsPerUser === 1) {
        risk = risk + 10;
      }

      const currentTicketPrice = parseInt(currentTicket.price);
      const pctDifference =
        (Math.abs(currentTicketPrice - avgTicketPrice) / avgTicketPrice) * 100;
      if (pctDifference > 10 && currentTicketPrice > avgTicketPrice) {
        risk = risk - 10;
      } else if (pctDifference < 10 && currentTicketPrice > avgTicketPrice) {
        risk = risk - pctDifference;
      } else if (currentTicketPrice < avgTicketPrice) {
        risk = risk + pctDifference;
      }

      if (createTicketTime > 9 && createTicketTime < 17) {
        risk = risk - 10;
      } else {
        risk = risk + 10;
      }

      if (commentsPerTicket > 3) {
        risk = risk + 5;
      }

      if (risk < 5) {
        risk = 5;
      } else if (risk > 95) {
        risk = 95;
      }
      return Math.round(risk);
    };

    const fraudRiskResult = calculateRisk();

    return (
      <div>
        {/* {console.log("currentTicket", currentTicket)} */}
        <TicketDetails
          ticketId={this.props.match.params.ticketId}
          fraudRiskResult={fraudRiskResult}
          curretEventName={currentEvent.name}
          currentTicket={currentTicket}
          currentUserName={this.props.user.username}
          userId={this.props.user.userId}
        />

        <CommentsListContainer ticketId={currentTicket.id} />

        <CreateCommnetContainer ticketId={currentTicket.id} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN Ticket Details", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(TicketDetailsContainer);
