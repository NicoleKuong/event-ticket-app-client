import React from "react";
import { getEvents } from "../../actions/events";
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
        <p className="notice">
          please LOGIN to create an event or SIGNUP to create an account
        </p>
        <br />
        <h1 className="event-title">Available Events</h1>
        <EventList events={this.props.events} user={this.props.user} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN EventList", state);
  return {
    user: state.user,
    events: state.events
  };
};

export default connect(mapStateToProps)(EventListContainer);
