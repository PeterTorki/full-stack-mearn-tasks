import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import initialMovies from "./movies";
import AddMoviesForm from "./components/AddMoviesForm";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <AddMoviesForm handleAddMovie={handleAddMovie} />
      <MoviesList movies={movies} handleDeleteMovie={handleDeleteMovie} />
    </>
  );
}

export default App;
