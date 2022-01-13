import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MovieCard.css';

const MovieCard = ({film}) => {
  return (
    <div>
      <div class="card shadow  bg-body rounded" width="18rem">
        <img
          src={film.poster}
          class="card-img-top"
          height="250px"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{film.title}</h5>
          <p class="card-text">
              {film.description}
          </p>
          <Link to ={{
             pathname : "./MovieContent",
             state : {movie :film},

             }
          
          }><a href="#" class="btn btn-warning">
            Watch Now <i class="fas fa-eye"></i>
          </a> </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
