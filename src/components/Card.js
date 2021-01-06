import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const Card = () => {
  const [data] = useState({
    title: "I",
    image: "https://bestoftheyear.in/wp-content/uploads/2017/06/I-Poster.jpg",
    genre: " Action, Drama, Thriller",
    released: " 14 January 2015",
    director: "S. Shankar",
    artists: [
      {
        name: "Vikram",
        dob: "1982-12-31T00:00:00.000Z",
        role: "Hero",
      },
      {
        name: "Amy Jackson",
        dob: "1982-12-31T00:00:00.000Z",
        role: "Heroine",
      },
      {
        name: "Upen Patel",
        dob: "1982-12-31T18:30:00.000Z",
        role: "Villain",
      },
    ],
    about:
      "A mysterious hunchback abducts a bride on the day of her wedding, holding her hostage as he goes on a revenge spree.",
    rating: "7.4",
  });
  const artistNames = data.artists.map((artist) => artist.name).join(", ");
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={data.image} height="400px" width="300px" alt={data.title} />
        </div>

        <div className="contentBx">
          <h1>{data.title}</h1>
          <div className="size">
            <span>{data.genre}</span>
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
              {data.director}
            </div>
            <div>
              <span>
                <strong>Artists: </strong>
              </span>
              {artistNames}
            </div>
            <div>
              <span>
                <strong>Rating: </strong>
              </span>
              {data.rating}
              <AiIcons.AiFillStar style={{ color: "yellow" }} />
            </div>
            <div>
              <button type="button">SHOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
