import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";

const MovieList = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="secondary">Happy</Button>
            <Button variant="danger">Romantic</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between flex-wrap">
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
