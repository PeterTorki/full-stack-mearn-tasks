import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies, handleDeleteMovie }) {
  return (
    <>
      <h1 className="title">Movies List</h1>
      <div className="movies-container-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={{ ...movie }} handleDeleteMovie={handleDeleteMovie} />
        ))}
      </div>
    </>
  );
}

export default MoviesList;
