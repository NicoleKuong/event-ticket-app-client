import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import TicketContainer from "../Ticket/TicketContainer";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    // console.log("props", this.props);
    // console.log("userLoggedIn booloan", this.props.userLoggedIn === true);

    return (
      <div>
        <h1>Event List</h1>

        {/* {!this.props.userLoggedIn && <LoginFormContainer />}
        {!this.props.userLoggedIn && <SignUpFormContainer />}
        {this.props.userLoggedIn && <CreateFormContainer />} */}

        {!events && "Loading..."}
        {events && (
          <div>
            {events.map((event, index) => (
              <Link to={`events/${event.id}`}>
                <div className="eventList" key={index}>
                  <h3>{event.name}</h3>
                  <img src={event.imageUrl} alt={event.name} />
                </div>
              </Link>
            ))}
            <Link to={`events/newticket`}>Create Ticket</Link>
          </div>
        )}
      </div>
    );
  }
}
