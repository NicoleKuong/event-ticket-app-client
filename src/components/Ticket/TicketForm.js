import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "./SignUpForm.css";

const TicketForm = (props) => {
  // console.log("ticket props", props);
  return (
    <Form className="ticket-form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Ticket Image:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="url"
          name="imageUrl"
          value={props.values.imageUrl}
          placeholder="Enter ticket image url"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="price"
          name="price"
          value={props.values.price}
          placeholder="Enter ticket price"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="description"
          value={props.values.description}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        CREATE TICKET
      </Button>
    </Form>
  );
};

export default TicketForm;
