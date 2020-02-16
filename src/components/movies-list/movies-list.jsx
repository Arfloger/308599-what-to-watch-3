import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const movieTitleHandle = () => {};

const MoviesList = ({films, onMovieMouseLeave}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((it) => (
        <SmallMovieCard
          title={it.name}
          photo={it.posterImage}
          key={it.id}
          onMovieMouseLeave={onMovieMouseLeave}
          onMovieTitleClick={movieTitleHandle}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  onMovieMouseLeave: PropTypes.func,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
      })
  )
};

export default MoviesList;
