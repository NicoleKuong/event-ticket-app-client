import React, { Component } from "react";
import { connect } from "react-redux";
import EditTicketForm from "./EditTicketForm";
import { getEditTicket } from "../../actions/ticket";

class EditTicketContainer extends Component {
  state = {
    imageUrl: "",
    price: 0,
    description: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.dispatch(
      getEditTicket(
        this.state.imageUrl,
        this.state.price,
        this.state.description,
        this.props.match.params.ticketId
        // this.props.users.token
      )
    );
    this.setState({
      imageUrl: "",
      price: 0,
      description: ""
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

const mapStateToProps = state => {
  console.log("STATE IN edit ticket", state);
  return {
    users: state.user,
    events: state.events,
    tickets: state.tickets,
    comments: state.comments
  };
};

export default connect(mapStateToProps)(EditTicketContainer);
