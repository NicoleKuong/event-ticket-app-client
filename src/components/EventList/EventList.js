import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TicketContainer from "../Ticket/TicketContainer";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    const { users } = this.props;

    return (
      <div>
        {!events && "Loading..."}
        {events && (
          <div className="event-container">
            {events.map((event, index) => (
              <Card className="event-card">
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body className="event-body">
                  <Card.Title className="event-title">{event.name}</Card.Title>
                  <Card.Text>
                    <p>{event.description}</p>
                    <p>
                      <em>Starts:</em> {event.startDate.slice(0, 10)}
                    </p>
                    <p>
                      {" "}
                      <em>Ends:</em> {event.endDate.slice(0, 10)}
                    </p>
                  </Card.Text>

                  <Link to={`events/${event.id}`}>
                    <Button variant="primary" className="event-btn">
                      View Details
                    </Button>
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
