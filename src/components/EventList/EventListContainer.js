import React from "react";
import { getEvents } from "../../actions/events";
import { connect } from "react-redux";
import EventList from "./EventList";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEvents());
  }
  render() {
    return <EventList events={this.props.events} user={this.props.user} />;
  }
}

const mapStateToProps = state => {
  console.log("STATE IN EventList", state);
  return {
    userCreated: state.user.userCreated,
    events: state.events
  };
};

// const mapDispatchToProps = {
//   getEvents
// };
export default connect(mapStateToProps)(EventListContainer);
