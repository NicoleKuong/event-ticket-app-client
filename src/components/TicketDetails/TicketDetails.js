import React, { Component } from "react";

export default function TicketDetails(props) {
  const { fraudRiskResult, curretEventName, currentTicket, user } = props;
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
    </div>
  );
}
