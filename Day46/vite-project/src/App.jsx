import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import AddMoviesForm from "./components/AddMoviesForm";
import useMovies from "./hooks/useMovies";
import FilteringMovies from "./components/FilteringMovies";

function App() {
  const { movies, filterMovies } = useMovies();

  if (movies.length === 0) {
    console.log("Hi");
    return <div>Loading...</div>;
  }
  console.log(movies);

  return (
    <>
      <MoviesList movies={movies} />;
      <FilteringMovies movies={movies} filterMovies={filterMovies} />
    </>
  );
}

export default App;
