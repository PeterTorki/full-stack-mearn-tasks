import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return (
    <>
      <h1 className="title">Movies List</h1>
      <div className="movies-container-list">
        {movies.map((movie) => (
          <MovieCard movie={{ ...movie }} />
        ))}
      </div>
    </>
  );
}

export default MoviesList;
