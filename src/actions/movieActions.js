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

export const fetchMovies = (skip) => async (dispatch) => {
  const movies = await axios.get(`/movies?skip=${skip}&limit=16`);

  dispatch(loadMovies(movies.data.movies));
};

export const totalMovies = () => async (dispatch) => {
  const movies = await axios.get(`/movies`);

  dispatch(moviesTotal(movies.data.total));
};
