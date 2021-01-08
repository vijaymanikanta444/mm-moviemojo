import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as AiIcons from "react-icons/ai";

import { fetchMovies } from "../actions/movieActions";

const Test98 = (props) => {
  const { fetchMovies, movies } = props;

  const [pageno] = useState(1);

  useEffect(() => {
    fetchMovies(pageno);
  }, []);

  return (
    <div className="container  ">
      <div className="flex ">
        {movies.map((movie) => (
          <div className="card ">
            <div className="imgBx ">
              <img
                src={movie.image}
                height="450px"
                width="300px"
                alt={movie.title}
              />
            </div>

            <div className="contentBx">
              <div className="flex1">
                <h4>{movie.title}</h4>
                <span className="px-2">{`(${movie.released})`}</span>
              </div>
              <div className="size">
                <span>{movie.genre}</span>
              </div>
              <hr
                style={{
                  width: "75%",
                  margin: "auto",
                  border: "1.5px solid cyan",
                }}
              />
              <div className="color">
                <div>
                  <span>
                    <strong>Director: </strong>
                  </span>
                  {movie.artists[0].name}
                </div>
                <div>
                  <span>
                    <strong>Artists: </strong>
                  </span>
                  {movie.artists.map((artist) => artist.name).join(", ")}
                </div>
                <div>
                  <span>
                    <strong>Rating: </strong>
                  </span>
                  {movie.rating}
                  <AiIcons.AiFillStar style={{ color: "yellow" }} />
                </div>
                <div className="container2">
                  <div type="button" className="button2">
                    Show More
                  </div>
                </div>
              </div>
            </div>
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
