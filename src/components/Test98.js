import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as AiIcons from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchMovies } from "../actions/movieActions";

const Test98 = (props) => {
  const { fetchMovies, movies } = props;
  const [skip, setSkip] = useState(0);

  const loadMore = () => {
    fetchMovies(skip);
    setSkip(skip + 1);
  };
  useEffect(() => {
    fetchMovies(skip);
    setSkip(skip + 1);
  }, []);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
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
                  <h4 className="glow">{movie.title}</h4>
                  <span className="px-2 glow">{`(${movie.released})`}</span>
                </div>
                <div className="size ">
                  <span className="glow">{movie.genre}</span>
                </div>
                <hr
                  style={{
                    width: "75%",
                    margin: "auto",
                    border: "1.5px solid cyan",
                  }}
                />
                <div className="color">
                  <div className="glow">
                    <span>
                      <strong>Director: </strong>
                    </span>
                    {/* {movie.artists[0].name} */}
                  </div>
                  <div className="glow">
                    <span>
                      <strong>Artists: </strong>
                    </span>
                    {movie.artists.map((artist) => artist.name).join(", ")}
                  </div>
                  <div className="glow">
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
        {/* <button type="button" className="btn btn-light p5 m-5" onClick={loadMore}>
        Load mORE..
      </button> */}
      </div>
    </InfiniteScroll>
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
