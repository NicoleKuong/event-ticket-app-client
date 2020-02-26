import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    const { tickets } = this.props;
    const { events } = this.props;
    console.log("ticket list props", this.props);
    // console.log("userLoggedIn booloan", this.props.userLoggedIn === true);

    return (
      <div>
        <h3>Ticket List</h3>
        {/* {!this.props.userLoggedIn && <LoginFormContainer />}
        {!this.props.userLoggedIn && <SignUpFormContainer />}
        {this.props.userLoggedIn && <CreateFormContainer />} */}

        {!tickets && "Loading..."}
        {tickets && (
          <div>
            {tickets.map((ticket, index) => (
              <Link to={`ticket/${ticket.id}`}>
                <div className="ticketList" key={index}>
                  <img src={ticket.imageUrl} alt="ticket" />
                  <p>Price: {ticket.price}</p>
                  <p>Ticket Description: {ticket.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}
