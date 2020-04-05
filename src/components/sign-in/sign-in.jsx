import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


import {withSignIn} from "../../hocs/with-sign-in/with-sign-in";
import SignInForm from "../sign-in-form/sign-in-form.jsx";
import {PageFooter} from '../page-footer/page-footer.jsx';


const SignInFormWrapped = withSignIn(SignInForm);

export class SignIn extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {requireAuthorization, history} = this.props;

    if (requireAuthorization) {
      history.push(`/`);
    }
  }

  render() {

    return (
      <div className="user-page">

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
        <SignInFormWrapped/>
        <PageFooter/>
      </div>
    );
  }
}

SignIn.propTypes = {
  requireAuthorization: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  requireAuthorization: state.requireAuthorization,
});

export default connect(mapStateToProps, null)(SignIn);
