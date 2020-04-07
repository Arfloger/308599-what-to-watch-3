import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/reducer";

export const withMyListMovies = ((Component) => {
  const WithMyListMovies = (props) => {
    const {onLoadFavoriteMovies} = props;

    onLoadFavoriteMovies();

    return <Component {...props} />;
  };

  WithMyListMovies.propTypes = {
    onLoadFavoriteMovies: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onLoadFavoriteMovies: () => {
      dispatch(Operation.loadFavoriteMovies());
    }
  });

  return connect(null, mapDispatchToProps)(WithMyListMovies);
});
