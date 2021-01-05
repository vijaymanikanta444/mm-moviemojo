import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMovies } from "../actions/movieActions";

const Test98 = (props) => {
  const { fetchMovies, movies } = props;
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.about}</p>
          {movie.artists.length && <p>{movie.artists[0].name}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

Test98.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func,
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.data,
});

export default connect(mapStateToProps, { fetchMovies })(Test98);
