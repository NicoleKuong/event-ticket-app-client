import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import TicketContainer from "../Ticket/TicketContainer";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    const { users } = this.props;
    // console.log("props", this.props);
    // console.log("userLoggedIn booloan", this.props.userLoggedIn === true);

    return (
      <div>
        {/* {!this.props.userLoggedIn && <LoginFormContainer />}
        {!this.props.userLoggedIn && <SignUpFormContainer />}
        {this.props.userLoggedIn && <CreateFormContainer />} */}

        {!events && "Loading..."}
        {events && (
          <div>
            {events.map((event, index) => (
              <Card className="event-card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>Description: {event.description}</Card.Text>
                  <Card.Text>
                    Event End Date: {event.endDate.slice(0, 10)}{" "}
                  </Card.Text>
                  <Link to={`events/${event.id}`}>
                    <Button variant="primary">View Details</Button>
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
