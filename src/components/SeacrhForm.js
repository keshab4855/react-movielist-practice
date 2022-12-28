import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SeacrhForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
  };
  return (
    <div className="mt-5 ">
      <h1 className="text-center">My movie list</h1>
      <Form className="mt-3" onSubmit={formSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search movies..."
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SeacrhForm;
