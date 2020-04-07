import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/reducer";

export const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        validation: {
          email: true,
          password: true,
          message: undefined
        }
      };

      this.formState = {
        email: {
          reg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          value: ``
        },
        password: {
          reg: ``,
          value: ``
        },
      };

      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUserInput(evt) {
      const name = evt.target.name;

      this.formState[name].value = evt.target.value;
    }

    handleFormSubmit() {
      if (!this.formState.email.reg.test(this.formState.email.value)) {
        this.setState((prevState) => {
          return {
            validation: Object.assign({}, prevState.validation, {
              email: false,
              message: `Please enter a valid email address`
            })
          };
        });

        return;
      }

      if (this.formState.password.value === ``) {
        this.setState((prevState) => {
          return {
            validation: Object.assign({}, prevState.validation, {
              password: false,
              message: `Please enter a valid password`
            })
          };
        });

        return;
      }

      const {onLogIn} = this.props;
      const loginBody = {
        email: this.formState.email.value,
        password: this.formState.password.value
      };

      onLogIn(loginBody);

      this.setState({validation: Object.assign({}, this.state.validation, {
        email: true,
        password: true,
        message: undefined
      })});
    }

    render() {
      return <Component
        {...this.props}
        onUserInput={this.handleUserInput}
        onSubmit={this.handleFormSubmit}
        validation={this.state.validation}
      />;
    }
  }

  WithSignIn.propTypes = {
    onLogIn: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onLogIn: (body) => {
      dispatch(Operation.logIn(body));
    }
  });

  return connect(null, mapDispatchToProps)(WithSignIn);
};
