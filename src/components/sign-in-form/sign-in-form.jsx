import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class SignInForm extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onEmailInput, onPasswordInput, onSubmitForm, isValidEmail, isValidPassword, message} = this.props;

    return (
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {message ? <div className="sign-in__message">
            <p>{message}</p>
          </div> : null}

          <div className={isValidEmail ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              onChange={onEmailInput}/>

            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>

          <div className={isValidPassword ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              onChange={onPasswordInput}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>


          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={isValidEmail && isValidPassword ? false : true}
              onClick={onSubmitForm}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  onEmailInput: PropTypes.func,
  onPasswordInput: PropTypes.func,
  onSubmitForm: PropTypes.func,
  isValidEmail: PropTypes.bool,
  isValidPassword: PropTypes.bool,
  message: PropTypes.string,
};
