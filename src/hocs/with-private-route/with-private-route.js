import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withPrivateRoute = ((Component) => {
  const WithPrivateRoute = (props) => {
    const {isAuthorized} = props;

    if (!isAuthorized) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };

  WithPrivateRoute.propTypes = {
    isAuthorized: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorized: state.isAuthorized
  });

  return connect(mapStateToProps)(WithPrivateRoute);
});
