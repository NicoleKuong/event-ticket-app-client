import React from "react";
import { getTickets } from "../../actions/ticket";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    // console.log("params id", eventId);
    this.props.dispatch(getTickets(eventId));
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
        <h1>Event: {ticketEvent.name}</h1>
        <img src={ticketEvent.imageUrl} alt-={ticketEvent.name} />
        <TicketsList events={this.props.events} tickets={this.props.tickets} />
      </div>
    );
  }
}
//get the state of the user to see if it is an empty string
const mapStateToProps = state => {
  console.log("STATE IN TicketList", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(TicketListContainer);
