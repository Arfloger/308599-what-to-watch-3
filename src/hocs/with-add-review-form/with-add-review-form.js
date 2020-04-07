import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/reducer";

export const withAddReviewForm = (Component) => {
  class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
        errorMessage: ``,
        isFormDisable: false
      };

      this.formState = {
        rate: 5,
        textarea: {
          value: ``,
          minLength: 50,
          maxLength: 400
        }
      };

      this.handleRateChange = this.handleRateChange.bind(this);
      this.handleTextareaChange = this.handleTextareaChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleRateChange(evt) {
      const {value} = evt.target;

      this.formState.rate = +value;
    }

    handleTextareaChange(evt) {
      const {value} = evt.target;

      this.formState.textarea.value = value.trim().replace(/\s+/g, ` `);
    }

    handleFormSubmit(evt) {
      evt.preventDefault();

      if (this.formState.textarea.value === ``) {
        this.setState({isValid: false, errorMessage: `Your message should not be empty`});
        return;
      }

      if (this.formState.textarea.value.length < this.formState.textarea.minLength) {
        this.setState({isValid: false, errorMessage: `Your message must be at least ${this.formState.textarea.minLength} characters`});

        return;
      }

      if (this.formState.textarea.value.length > this.formState.textarea.maxLength) {
        this.setState({isValid: false, errorMessage: `Your message should be no more than ${this.formState.textarea.maxLength} characters`});

        return;
      }

      this.setState({isValid: true, errorMessage: ``, isFormDisable: true});

      const {onAddReview, movieId, history} = this.props;
      const reviewBody = {
        rating: this.formState.rate,
        comment: this.formState.textarea.value
      };

      onAddReview(movieId, reviewBody, (error) => {
        if (!error) {
          history.push(`/movie/${movieId}/reviews`);

          return;
        }

        this.setState({isFormDisable: false, errorMessage: `Server error`});
      });
    }

    render() {
      return <Component
        {...this.props}
        state={this.state}
        onRateChange={this.handleRateChange}
        onTextareaChange={this.handleTextareaChange}
        onSubmit={this.handleFormSubmit}
      />;
    }
  }

  WithAddReviewForm.propTypes = {
    onAddReview: PropTypes.func.isRequired,
    movieId: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onAddReview: (movieId, body, cb) => {
      dispatch(Operation.addReview(movieId, body, cb));
    }
  });

  return connect(null, mapDispatchToProps)(WithAddReviewForm);
};
