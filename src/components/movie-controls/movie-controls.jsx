
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer";

export const MovieControls = (props) => {
  const ParentStatus = {
    PROMO: `promo`,
    MOVIE_PAGE: `moviePage`
  };

  const {parent, state, onButtonClick, movieId, onPlayClick} = props;
  const {isButtonDisable, isFavorite} = state;

  const handlePlayClick = () => {
    onPlayClick(movieId);
  };

  return <div className="movie-card__buttons">
    <Link to={`/movie/${movieId}/watch`} onClick={handlePlayClick} className="btn btn--play movie-card__button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>
    <button
      className="btn btn--list movie-card__button"
      id="myList"
      type="button"
      disabled={isButtonDisable}
      onClick={onButtonClick}
    >
      {isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>}
      <span>My list</span>
    </button>
    {ParentStatus[parent] === ParentStatus.MOVIE_PAGE ?
      <a href="add-review.html" id="addReview" className="btn movie-card__button" onClick={onButtonClick}>Add review</a> :
      null
    }
  </div>;
};

MovieControls.propTypes = {
  parent: PropTypes.string.isRequired,
  state: PropTypes.shape({
    isFavorite: PropTypes.bool,
    isButtonDisable: PropTypes.bool
  }),
  onButtonClick: PropTypes.func,
  movieId: PropTypes.number,
  onPlayClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: (movieId) => {
    dispatch(ActionCreator.updateCurrentMovie(movieId));
  }
});

export default connect(null, mapDispatchToProps)(MovieControls);
