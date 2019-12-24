import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import MovieContext from "../../context/movieContext";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const {
    getSingleMovie,
    movie,
    watchList,
    addToWatchList,
    removeFromWatchList,
    loading
  } = movieContext;

  useEffect(() => {
    getSingleMovie(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    id,
    year,
    genres,
    duration,
    originalTitle,
    imdbRating,
    actors,
    writers,
    directors,
    storyline,
    posterurl
  } = movie;

  // Function to return correct format of the duration value
  const fixDuration = dur => {
    if (dur !== undefined) {
      let regex = /\d+/g;
      let durationNum = dur.match(regex);
      let durationStr = `${Math.floor(durationNum / 60)}h ${durationNum %
        60}min`;

      return durationStr;
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="movie-page">
      <div className="movie-page__bg"></div>
      <div className="movie-page__poster">
        <img
          src={posterurl}
          className="movie-page__poster__img shadow"
          alt="poster"
        />
        {!watchList.includes(id) ? (
          <a
            href="#!"
            onClick={() => {
              addToWatchList(id);
            }}
            className="movie-page__poster__btn bg-primary shadow"
          >
            <i className="fas fa-plus"></i>
          </a>
        ) : (
          <a
            href="#!"
            onClick={() => {
              removeFromWatchList(id);
            }}
            className="movie-page__poster__btn bg-secondary shadow btn-anim"
          >
            <i className="fas fa-minus"></i>
          </a>
        )}
      </div>
      <div className="movie-page__trb">
        <span className="movie-page__trb__title">{originalTitle}</span>
        <span className="movie-page__trb__rating">{imdbRating}</span>
        <div className="movie-page__trb__rating-bar">
          <div style={{ width: imdbRating * 10 + "%" }}></div>
        </div>
      </div>
      <p className="movie-page__info">
        {year} &middot; {genres !== undefined && genres.join(", ")} &middot;{" "}
        {fixDuration(duration)}
      </p>
      <p className="movie-page__storyline">{storyline}</p>
      <hr />
      <p className="movie-page__director">
        <strong>Director: </strong>
        {directors !== undefined && directors.join(", ")}
      </p>
      <p className="movie-page__writer">
        <strong>Writers: </strong>
        {writers !== undefined && writers.join(", ")}
      </p>
      <p className="movie-page__stars">
        <strong>Stars: </strong>
        {actors !== undefined && actors.join(", ")}
      </p>
      {!watchList.includes(id) ? (
        <a
          href="#!"
          onClick={() => {
            addToWatchList(id);
          }}
          className="movie-page__btn bg-primary shadow"
        >
          <i className="fas fa-plus"></i> Add To Watchlist
        </a>
      ) : (
        <a
          href="#!"
          onClick={() => {
            removeFromWatchList(id);
          }}
          className="movie-page__btn bg-secondary shadow btn-anim"
        >
          <i className="fas fa-minus"></i> Remove From Watchlist
        </a>
      )}
    </div>
  );
};

export default Movie;
