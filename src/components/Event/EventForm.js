import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EventForm = props => {
  console.log("eventform props", props);
  return (
    <Form className="eventform" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Event Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="name"
          name="name"
          value={props.values.name}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="description"
          value={props.values.description}
          placeholder="Enter event description"
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Event Image:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="url"
          name="imageUrl"
          value={props.values.imageUrl}
          placeholder="Enter event image url"
        />
      </Form.Group>
      <Form.Group controlId="formStartDate">
        <Form.Label>Event Start Date:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="date"
          name="startDate"
          value={props.values.startDate}
        />
      </Form.Group>
      <Form.Group controlId="formEndDate">
        <Form.Label>Event End Date:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="date"
          name="endDate"
          value={props.values.endDate}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        CREATE EVENT
      </Button>
    </Form>
  );
};

export default EventForm;
