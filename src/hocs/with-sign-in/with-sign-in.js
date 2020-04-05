import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reduser/reducer";
import PropTypes from "prop-types";

export const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.regExp = RegExp(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);

      this.state = {
        email: false,
        password: false,
        message: ``,
        isValidEmail: false,
        isValidPassword: false,
      };

      this._onEmailInputHandler = this._onEmailInputHandler.bind(this);
      this._onPasswordInputHandler = this._onPasswordInputHandler.bind(this);
      this._onSubmitHanndler = this._onSubmitHanndler.bind(this);

    }

    _onEmailInputHandler(evt) {

      this.setState({
        email: evt.target.value,
      });

      if (this.regExp.test(evt.target.value)) {
        this.setState({
          message: ``,
          isValidEmail: true,
        });
      } else {
        this.setState({
          message: `We can’t recognize this email. Please try again.`,
          isValidEmail: false
        });
      }
    }

    _onPasswordInputHandler(evt) {

      this.setState({
        password: evt.target.value,
      });

      if (this.state.password.length >= 3) {
        this.setState({
          message: ``,
          isValidPassword: true,
        });
      } else {
        this.setState({
          message: `We can’t recognize this password. Please try again.`,
          isValidPassword: false,
        });
      }
    }

    _onSubmitHanndler(evt) {
      evt.preventDefault();
      const {checkAuth} = this.props;
      const {email, password, isValidEmail, isValidPassword} = this.state;

      if (isValidEmail && isValidPassword) {
        checkAuth(email, password);
      }
    }

    render() {
      return <Component
        {...this.props}
        onEmailInput={this._onEmailInputHandler}
        onPasswordInput={this._onPasswordInputHandler}
        onSubmitForm={this._onSubmitHanndler}
        isValidEmail={this.state.isValidEmail}
        isValidPassword={this.state.isValidPassword}
        message={this.state.message}
      />;
    }
  }

  WithSignIn.propTypes = {
    checkAuth: PropTypes.func,
  };

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (login, password) => {
      dispatch(Operation.checkAuth(login, password));
    }
  });

  return connect(null, mapDispatchToProps)(WithSignIn);
};
