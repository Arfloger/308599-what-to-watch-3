import React from "react";
import PropTypes from "prop-types";

export const SignInForm = (props) => {
  const {onUserInput, onSubmit, validation} = props;

  return <form action="#" className="sign-in__form">
    {validation.message ? <div className="sign-in__message">
      <p>{validation.message}</p>
    </div> : null}
    <div className="sign-in__fields">
      <div className={validation.email ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
        <input
          className="sign-in__input"
          type="email"
          placeholder="Email address"
          name="email"
          id="user-email"
          onChange={onUserInput}
        />
        <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
      </div>
      <div className={validation.password ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
        <input
          className="sign-in__input"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={onUserInput}
        />
        <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
      </div>
    </div>
    <div className="sign-in__submit">
      <button className="sign-in__btn" type="button" onClick={onSubmit}>Sign in</button>
    </div>
  </form>;
};

SignInForm.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.shape({
    email: PropTypes.bool.isRequired,
    password: PropTypes.bool.isRequired,
    message: PropTypes.string
  })
};
