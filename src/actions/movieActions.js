import axios from "axios";
import * as types from "./types";

const loadMovies = (movies) => ({
  type: types.FETCH_MOVIES,
  payload: movies,
});

export const fetchMovies = (skip) => async (dispatch) => {
  const movies = await axios.get(`/movies?skip=${skip}&limit=16`);

  dispatch(loadMovies(movies.data.movies));
};
