import React, { Component } from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../actions/event";
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
        <EventForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
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
