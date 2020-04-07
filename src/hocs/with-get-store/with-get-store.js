import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const withGetStore = ((Component, stateKey) => {
  const WithGetStore = (props) => {
    return <Component {...props} />;
  };

  WithGetStore.propTypes = {
    stateKey: PropTypes.any
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    [stateKey]: state[stateKey]
  });

  return connect(mapStateToProps)(WithGetStore);
});
