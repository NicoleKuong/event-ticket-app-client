import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateCommentForm = props => {
  // console.log("ticket props", props);
  return (
    <Form className="ticketform" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Leave a Comment:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          as="textarea"
          rows="3"
          name="content"
          value={props.values.content}
          placeholder="Enter comment"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        COMMENT
      </Button>
    </Form>
  );
};

export default CreateCommentForm;
