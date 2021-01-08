import axios from "axios";
import * as types from "./types";

const loadMovies = (movies) => ({
  type: types.FETCH_MOVIES,
  payload: movies,
});

export const fetchMovies = (pageno) => async (dispatch) => {
  const movies = await axios.get(`/movies?page=${pageno}`);
  dispatch(loadMovies(movies.data.movies));
};
