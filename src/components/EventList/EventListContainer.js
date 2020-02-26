import React from "react";
import { getEvents } from "../../actions/events";
import { connect } from "react-redux";
import EventListForm from "./EventListForm";

class EventListContainer extends React.Component {
  // state = {
  //   events: []
  // };
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    return <EventListForm events={this.props.events} user={this.props.user} />;
  }
}
//get the state of the user to see if it is an empty string
const mapStateToProps = state => {
  console.log("STATE IN EventList", state);
  return {
    userCreated: state.user.userCreated,
    events: state.event
  };
};

const mapDispatchToProps = {
  getEvents
};
export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
