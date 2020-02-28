import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function TicketDetails(props) {
  console.log("edit props", props);
  const {
    ticketId,
    fraudRiskResult,
    curretEventName,
    currentTicket,
    currentUserName,
    userName
  } = props;

  const ticketEdit =
    currentUserName === userName ? (
      <div>
        <Link to={`/ticket/${ticketId}/edit`}>
          <Button variant="primary" type="submit">
            EDIT TICKET
          </Button>
        </Link>
      </div>
    ) : null;

  return (
    <div>
      <div className="ticket-detail">
        <h2>Ticket Details:</h2>
        {/* <p>Created By: {currentTicket.user.username}</p> */}
        <h3>Event: {curretEventName}</h3>
        <img src={currentTicket.imageUrl} alt="image" />
        <h3>Price:{currentTicket.price}</h3>
        <p>Description: {currentTicket.description}</p>
        <h3>
          We calculated that the risk of this ticket being a fraud is{" "}
          {fraudRiskResult}%
        </h3>
      </div>
      {ticketEdit}
    </div>
  );
}
