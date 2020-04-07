import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Reviews from "../reviews/reviews.jsx";

import {Operation} from "../../reducer/reducer";

export const MovieReviews = (props) => {
  const {onLoadComments, movieId} = props;

  onLoadComments(movieId);

  return <div className="movie-card__reviews movie-card__row">
    <Reviews />
  </div>;
};

MovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
  onLoadComments: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onLoadComments: (movieId) => {
    dispatch(Operation.loadComments(movieId));
  }
});

export default connect(null, mapDispatchToProps)(MovieReviews);
