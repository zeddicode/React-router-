import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerURL, setTrailerURL] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating: Number(rating), trailerURL }; 
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerURL(''); 
  };

  return (
    <form onSubmit={handleSubmit}  >
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="posterURL">Poster URL</label>
        <input
          type="text"
          id="posterURL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="trailerURL">Trailer URL</label>
        <input
          type="text"
          id="trailerURL"
          value={trailerURL}
          onChange={(e) => setTrailerURL(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="form-control"
          min="0"
          max="10"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;