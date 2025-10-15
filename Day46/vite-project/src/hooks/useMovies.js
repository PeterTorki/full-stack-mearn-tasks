import { useEffect, useState } from "react";
import axios from "axios";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const filterMovies = (filterKey, filterValue) => {
    console.log("movies", movies);
    if (filterKey === "release_date") {
      const filteredStr = filterValue.split("-");
      filterValue = filteredStr[0];
    }
    console.log("fitler year", filterValue);
    console.log("movies at filter", movies);
    const filtered = movies.filter((movie) => {
      console.log("movie[filterKey]", movie[filterKey]);
      return movie[filterKey]?.includes(filterValue);
    });
    console.log("filtered", filtered);
    setMovies(filtered);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
        );
        console.log(response);
        const data = await response.data.results;
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return { movies, setMovies, filterMovies };
};

export default useMovies;
