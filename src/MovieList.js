import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies] = useContext(MovieContext);
  return movies.map((movie) => <Movie key={movie.id} movie={movie} />);
}

export default MovieList;
