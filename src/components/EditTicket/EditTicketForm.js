import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import "./SignUpForm.css";

const EditTicketForm = props => {
  // console.log("ticket props", props);
  return (
    <Form className="ticketform" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formImage">
        <Form.Label>Ticket Image:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="url"
          name="imageUrl"
          value={props.values.imageUrl}
          placeholder="Enter ticket image url"
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="price"
          name="price"
          value={props.values.price}
          placeholder="Enter ticket price"
        />
      </Form.Group>

      <Form.Group controlId="formDiscription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="description"
          value={props.values.description}
        />
      </Form.Group>
      <Link to={`/ticket/${props.ticketId}`}>
        <Button variant="primary" type="submit">
          EDIT TICKET
        </Button>
      </Link>
    </Form>
  );
};

export default EditTicketForm;
