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
    userId,
  } = props;

  const ticketEdit = () => {
    if (userId === currentTicket.userId) {
      return (
        <div className="edit-ticket-btn">
          <Link to={`/ticket/${ticketId}/edit`}>
            <Button variant="primary" type="submit">
              EDIT TICKET
            </Button>
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="ticket-detail">
        {/* <p>Created By: {currentTicket.user.username}</p> */}
        <h3 className="ticket-detail-title">Ticket for {curretEventName}</h3>
        <img src={currentTicket.imageUrl} alt="image" />
        <div className="ticket-detail-text">
          <p>Price: {currentTicket.price}</p>
          <p>{currentTicket.description}</p>
        </div>

        <div className="fraud-cal-text">
          {fraudRiskResult > 70 ? (
            <h3 style={{ color: "red" }}>
              We calculated that the risk of this ticket being a fraud is{" "}
              {fraudRiskResult}%
            </h3>
          ) : null}
          {fraudRiskResult < 70 && fraudRiskResult >= 35 ? (
            <h3 style={{ color: "yellow" }}>
              We calculated that the risk of this ticket being a fraud is{" "}
              {fraudRiskResult}%
            </h3>
          ) : null}
          {fraudRiskResult < 35 ? (
            <h3 style={{ color: "green" }}>
              We calculated that the risk of this ticket being a fraud is{" "}
              {fraudRiskResult}%
            </h3>
          ) : null}
        </div>
      </div>
      {ticketEdit()}
    </div>
  );
}
