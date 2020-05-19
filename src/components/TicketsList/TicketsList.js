import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    const { tickets, events, eventId } = this.props;

    // console.log("ticket list props", this.props);

    return (
      <div>
        <h3 className="ticket-list-title">Tickets For This Event:</h3>

        {!tickets && "Loading..."}
        {tickets && (
          <div className="ticket-container">
            {tickets.map((ticket, index) => (
              <Card className="ticket-card">
                <Card.Img variant="top" src={ticket.imageUrl} />
                <Card.Body className="ticket-card-body">
                  <Card.Text>{ticket.description}</Card.Text>
                  <Card.Text>Price: {ticket.price} </Card.Text>
                  <Link to={`/ticket/${ticket.id}`}>
                    <Button variant="primary">View Ticket Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
