import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    const { tickets } = this.props;
    const { events } = this.props;
    const { eventId } = this.props;
    // console.log("ticket list props", this.props);

    return (
      <div>
        <h3 className="ticket-list-title">Tickets For This Event:</h3>
        {/* {!this.props.userLoggedIn && <LoginFormContainer />}
        {!this.props.userLoggedIn && <SignUpFormContainer />}
        {this.props.userLoggedIn && <CreateFormContainer />} */}

        {!tickets && "Loading..."}
        {tickets && (
          <div>
            {tickets.map((ticket, index) => (
              <Card className="event-card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={ticket.imageUrl} />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Ticket Description: {ticket.description}
                  </Card.Text>
                  <Card.Text>Price: {ticket.price} </Card.Text>
                  <Link to={`/ticket/${ticket.id}`}>
                    <Button variant="primary">View Ticket Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
            <br />
            <Link to={`/events/${eventId}/newticket`}>
              <Button className="add-new-ticket-btn" variant="primary">
                ADD TICKET
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
