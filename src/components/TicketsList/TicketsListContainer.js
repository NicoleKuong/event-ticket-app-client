import React from "react";
import { getTickets } from "../../actions/ticket";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap/";
import "./TicketList.css";

class TicketListContainer extends React.Component {
  componentDidMount() {
    const pageEventId = this.props.match.params.eventId;
    // console.log("event params id", pageEventId);
    this.props.dispatch(getTickets(pageEventId));
  }
  render() {
    // console.log("events props", this.props.events);
    // console.log("params id ", this.props.match.params.eventId);
    const ticketEvent = this.props.events.find(
      (event) => event.id === parseInt(this.props.match.params.eventId)
    );
    // console.log("ticket event", ticketEvent);
    return (
      <div>
        <div className="event-detail">
          <h2 className="event-detail-title">{ticketEvent.name}</h2>

          <img
            className="event-detail-img"
            src={ticketEvent.imageUrl}
            alt={ticketEvent.name}
          />
          <p className="event-detail-description">{ticketEvent.description}</p>
          <p className="event-detail-date">
            Starts: {ticketEvent.startDate.slice(0, 10)} <br />
            Ends: {ticketEvent.endDate.slice(0, 10)}
          </p>
          <Link to={`/events/${this.props.match.params.eventId}/newticket`}>
            <Button className="add-new-ticket-btn" variant="primary">
              ADD TICKET
            </Button>
          </Link>
        </div>

        <TicketsList
          events={this.props.events}
          tickets={this.props.tickets}
          eventId={this.props.match.params.eventId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN TicketList", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(TicketListContainer);
