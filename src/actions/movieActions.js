import axios from "axios";
import * as types from "./types";

const loadMovies = (movies) => ({
  type: types.FETCH_MOVIES,
  payload: movies,
});

const moviesTotal = (total) => ({
  type: types.TOTAL_MOVIES,
  payload: total,
});

const moviesSearch = (data) => ({
  type: types.SEARCH_MOVIES,
  payload: data,
});

export const fetchMovies = (skip) => async (dispatch) => {
  const movies = await axios.get(`/movies?skip=${skip}&limit=16`);

  dispatch(loadMovies(movies.data.movies));
};

export const totalMovies = () => async (dispatch) => {
  const movies = await axios.get(`/movies`);

  dispatch(moviesTotal(movies.data.total));
};

export const searchMovies = (title) => async (dispatch) => {
  const movies = await axios.get(`/movies/search/movie/${title}`);

  dispatch(moviesSearch(movies.data));
};
