import {
  GET_MOVIES,
  GET_SINGLE_MOVIE,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  CLEAN_MOVIE,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload]
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(id => id !== action.payload)
      };
    case CLEAN_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
