import React, { Component } from "react";
import { connect } from "react-redux";
import EditTicketForm from "./EditTicketForm";
import { getEditTicket } from "../../actions/ticket";
import "./EditTicket.css";

class EditTicketContainer extends Component {
  state = {
    imageUrl: "",
    price: 0,
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const newTicket = this.props.tickets.find(
      (ticket) => ticket.id == this.props.match.params.ticketId
    );

    // console.log("newTicket", newTicket);

    event.preventDefault();

    this.props.dispatch(
      getEditTicket({
        imageUrl: this.state.imageUrl,
        price: this.state.price,
        description: this.state.description,
        ticketId: this.props.match.params.ticketId,
        history: this.props.history,
        createdAt: newTicket.createdAt,
        eventId: newTicket.eventId,
      })
    );
    this.setState({
      imageUrl: "",
      price: 0,
      description: "",
    });
  };

  render() {
    return (
      <EditTicketForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        values={this.state}
        ticketId={this.props.match.params.ticketId}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN edit ticket", state);
  return {
    users: state.user,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(EditTicketContainer);
