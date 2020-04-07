import React from "react";
import PropTypes from "prop-types";
import {getRatingName} from "../../const";

export const MovieOverview = (props) => {
  const {movie} = props;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingName(movie.rating)}</span>
        <span className="movie-rating__count">{movie[`scores_count`]} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {movie.starring.map((starring) => starring).join(`, `)}</strong></p>
    </div>
  </React.Fragment>;
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired
};
