import React, { Component } from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../actions/events";
import EventListContainer from "../EventList/EventListContainer";
import "./EventForm.css";

class EventContainer extends Component {
  state = {
    name: "",
    description: "",
    imageUrl: "",
    startDate: "",
    endDate: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      createEvent(
        this.state.name,
        this.state.description,
        this.state.imageUrl,
        this.state.startDate,
        this.state.endDate
      )
    );
    this.setState({
      name: "",
      description: "",
      imageUrl: "",
      startDate: "",
      endDate: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Create a New Event</h2>
        <EventForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
        <EventListContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP", state);
  return {
    userCreated: state.user.userCreated
  };
};

export default connect(mapStateToProps)(EventContainer);
