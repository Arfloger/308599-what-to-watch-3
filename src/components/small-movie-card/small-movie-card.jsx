import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({title, photo, onMovieTitleClick, onMovieMouseLeave}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseLeave={() => {
        onMovieMouseLeave({photo, title});
      }}
    >
      <div className="small-movie-card__image">
        <img src={photo} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onMovieTitleClick}
        >{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  onMovieTitleClick: PropTypes.func,
  onMovieMouseLeave: PropTypes.func,
};

export default SmallMovieCard;
