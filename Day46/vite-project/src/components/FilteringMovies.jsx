import React, { useEffect } from "react";

const FilteringMovies = ({ filterMovies, movies }) => {
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return <div onClick={() => filterMovies("release_date", "2025")}>Filter 2022 Movies</div>;
};
export default FilteringMovies;
