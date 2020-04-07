import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

import {withMovieHover} from "../../hocs/with-movie-hover/with-movie-hover";

const MovieWrapped = withMovieHover(SmallMovieCard);

export const SmallMovieCardList = (props) => {
  const {movies} = props;

  return <div className="catalog__movies-list">
    {movies.map((movie) => (
      <MovieWrapped
        movie={movie}
        key={movie.id}
      />
    ))}
  </div>;
};

SmallMovieCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
};
