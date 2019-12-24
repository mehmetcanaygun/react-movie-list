import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import {
  GET_MOVIES,
  GET_SINGLE_MOVIE,
  CLEAN_MOVIE,
  SET_LOADING,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST
} from "./types";

const MovieState = props => {
  const initialState = {
    movies: [],
    movie: {},
    watchList: [],
    loading: false
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Get Movies
  const getMovies = async () => {
    setLoading();

    const res = await axios.get("./data/movielist.json");

    // console.log(res.data);
    dispatch({
      type: GET_MOVIES,
      payload: res.data
    });
  };

  // Get A Single Movie
  const getSingleMovie = async id => {
    setLoading();

    const res = await axios.get(`../data/${id}.json`);

    dispatch({
      type: GET_SINGLE_MOVIE,
      payload: res.data
    });
  };

  // Add To Watchlist
  const addToWatchList = movie => {
    dispatch({
      type: ADD_TO_WATCHLIST,
      payload: movie
    });
  };

  // Remove From Watchlist
  const removeFromWatchList = id => {
    dispatch({
      type: REMOVE_FROM_WATCHLIST,
      payload: id
    });
  };

  // Clean Movie
  const cleanMovie = () => {
    dispatch({
      type: CLEAN_MOVIE,
      payload: {}
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        watchList: state.watchList,
        loading: state.loading,
        getMovies,
        getSingleMovie,
        addToWatchList,
        removeFromWatchList,
        setLoading,
        cleanMovie
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
