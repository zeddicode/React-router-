import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Filter from './Filter';
import MovieForm from './MovieForm';
import { movies } from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    const updatedMovies = [...movieList, newMovie];
    setMovieList(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(
      movieList.filter(
        (movie) =>
          (!title || movie.title.toLowerCase().includes(title.toLowerCase())) &&
          (!rating || movie.rating >= rating)
      )
    );
  };

  return (
    <Router>
      <div className='movie-app' >
        <h1  >Movie App</h1>
    
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilter={handleFilter} />
                <MovieForm onAddMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetail movies={movieList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;