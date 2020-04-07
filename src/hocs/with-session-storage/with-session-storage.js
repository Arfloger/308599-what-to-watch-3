import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withSessionStorage = ((Component) => {
  const WithSessionStorage = (props) => {
    const {currentMovie} = props;

    if (!currentMovie) {
      return <Redirect to={`/`}/>;
    }

    return <Component {...props} currentMovie={currentMovie}/>;
  };

  WithSessionStorage.propTypes = {
    currentMovie: PropTypes.shape({
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
      isFavorite: PropTypes.bool
    })
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    currentMovie: state.currentMovie
  });

  return connect(mapStateToProps)(WithSessionStorage);
});
