import React from "react";
import { getTickets } from "../../actions/ticket";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";
import Card from "react-bootstrap/Card";
import "./TicketList.css";

class TicketListContainer extends React.Component {
  componentDidMount() {
    const pageEventId = this.props.match.params.eventId;
    console.log("event params id", pageEventId);
    this.props.dispatch(getTickets(pageEventId));
  }
  render() {
    // console.log("events props", this.props.events);
    // console.log("params id ", this.props.match.params.eventId);
    const ticketEvent = this.props.events.find(
      event => event.id === parseInt(this.props.match.params.eventId)
    );
    console.log("ticket event", ticketEvent);
    return (
      <div>
        <div className="event-detail">
          <h2 className="event-detail-name">Event Details:</h2>
          <h3>{ticketEvent.name}</h3>
          <img
            className="event-detail-img"
            src={ticketEvent.imageUrl}
            alt={ticketEvent.name}
          />
          <p className="event-detail-description">
            Description: {ticketEvent.description}
          </p>
          <p className="event-detail-date">
            Event End Date: {ticketEvent.endDate.slice(0, 10)}
          </p>
        </div>

        <br />
        <TicketsList
          events={this.props.events}
          tickets={this.props.tickets}
          eventId={this.props.match.params.eventId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN TicketList", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(TicketListContainer);
