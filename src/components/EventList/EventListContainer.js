import React from "react";
import { getEvents } from "../../actions/events";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import EventList from "./EventList";
import "./EventList.css";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEvents());
  }

  render() {
    return (
      <div>
        <h1 className="event-title">Upcoming Events</h1>

        <EventList events={this.props.events} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN EventList", state);
  return {
    user: state.user,
    events: state.events,
  };
};

export default connect(mapStateToProps)(EventListContainer);
