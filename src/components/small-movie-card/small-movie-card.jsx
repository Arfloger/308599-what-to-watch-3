import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player.jsx";

import {ActionCreator} from "../../reducer/reducer";

export const SmallMovieCard = (props) => {
  const {movie, onMovieEnter, onMovieLeave, isPlaying, onMovieClick} = props;
  const {name, id} = movie;

  const handleMovieClick = () => {
    onMovieClick(id - 1);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMovieEnter}
      onMouseLeave={onMovieLeave}
    >
      <Link
        to={`/movie/${id}`}
        className="small-movie-card__link"
        onClick={handleMovieClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={movie[`preview_video_link`]}
            poster={movie[`preview_image`]}
            muted={true}
            width={280}
            height={175}
            playerState={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{name}</span>
        </h3>
      </Link>
    </article>
  );
};

SmallMovieCard.propTypes = {
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
  }).isRequired,
  onMovieEnter: PropTypes.func,
  onMovieLeave: PropTypes.func,
  isPlaying: PropTypes.bool,
  onMovieClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onMovieClick: (movieId) => {
    dispatch(ActionCreator.updateCurrentMovie(movieId));
  }
});

export default connect(null, mapDispatchToProps)(SmallMovieCard);
