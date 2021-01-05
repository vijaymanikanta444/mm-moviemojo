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
    <div className="container grid-container--fit ">
      <div className="row row-cols-4">
        {movies.map((movie) => (
          <div className="col space">
            <img
              src={movie.image}
              alt={movie.title}
              height="85%"
              width=" 100%"
              className="card1"
            />
            <h5>{movie.title}</h5>
            <span>{movie.released}</span>
          </div>
        ))}
      </div>
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
