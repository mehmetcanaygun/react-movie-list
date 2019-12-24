import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({
  movie: { id, year, genres, duration, originalTitle, imdbRating, posterurl }
}) => {
  let regex = /\d+/g;
  let durationNum = duration.match(regex);
  let durationStr = `${Math.floor(durationNum / 60)}h ${durationNum % 60}min`;

  return (
    <div className="movie-box text-center">
      <img src={posterurl} className="movie-box__poster shadow" alt="poster" />
      <h1 className="movie-box__title">{originalTitle}</h1>
      <p className="movie-box__info">
        {year} &middot; {genres.join(", ")} &middot; {durationStr}
      </p>
      <p className="movie-box__rating">
        <span>{imdbRating}</span>/10
      </p>
      <div className="movie-box__rating-bar">
        <div style={{ width: `${imdbRating * 10}%` }}></div>
      </div>
      <Link to={`/movie/${id}`} className="movie-box__btn bg-primary shadow">
        Movie Details
      </Link>
    </div>
  );
};

export default MovieItem;
