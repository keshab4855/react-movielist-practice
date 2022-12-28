import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie = {} }) => {
  const { Title, Poster, imdbRating } = movie;
  return (
    <div className="text-center mt-5 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title> Rating:{imdbRating}</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="buttons d-flex justify-content-between">
            <Button variant="primary">Happy</Button>
            <Button variant="danger">Romantic</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
