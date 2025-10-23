import React, { PureComponent } from "react";
import MovieCard from "./MovieCard";

class MoviesList extends PureComponent {
  render() {
    const { movies } = this.props;
    console.log(movies);

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
}

export default MoviesList;
