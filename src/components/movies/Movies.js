import React, { useEffect, useContext } from "react";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";
import MovieContext from "../../context/movieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const { movies, loading, getMovies, cleanMovie } = movieContext;

  useEffect(() => {
    getMovies();
    cleanMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="movie-list text-center">
        <div className="movie-list__bg"></div>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

export default Movies;
