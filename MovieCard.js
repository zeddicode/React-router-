import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Card >
    <Card.Img variant="top" src={movie.posterURL}  />
    <Card.Body >
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Text>Rating: {movie.rating}</Card.Text>
      <Link to={`/movie/${movie.title}`}>View Details</Link>
    </Card.Body>
  </Card>
);

export default MovieCard;