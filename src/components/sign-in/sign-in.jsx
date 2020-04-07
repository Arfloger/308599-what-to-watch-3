import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {SignInForm} from "../sign-in-form/sign-in-form.jsx";
import {PageFooter} from "../page-footer/page-footer.jsx";

import {withSignIn} from "../../hocs/with-sign-in/with-sign-in";

const SignInFormWrapped = withSignIn(SignInForm);

export class SignIn extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {isAuthorized, history} = this.props;

    if (isAuthorized) {
      history.push(`/`);
    }
  }

  render() {
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <SignInFormWrapped />
      </div>

      <PageFooter />
    </div>;
  }
}

SignIn.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(SignIn);
