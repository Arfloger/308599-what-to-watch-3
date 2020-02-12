import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const movieTitleHandle = () => {};

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((it) => (
        <SmallMovieCard
          title={it.title}
          photo={it.background}
          key={it.id}
          onMovieTitleClick={movieTitleHandle}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
      })
  )
};

export default MoviesList;
