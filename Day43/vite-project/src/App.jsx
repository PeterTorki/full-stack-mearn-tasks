import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import moviess from "./movies";

function App() {
  const [movies, setMovies] = useState(moviess);
  return <MoviesList movies={movies} />;
}

export default App;
