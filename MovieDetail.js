import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { movies } from './movies';  // Ensure correct import

const MovieDetail = () => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);
  const navigate = useNavigate();

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
};

export default MovieDetail;