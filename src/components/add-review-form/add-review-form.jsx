import React from "react";
import PropTypes from "prop-types";

export const AddReviewForm = (props) => {
  const {state, onRateChange, onSubmit, onTextareaChange} = props;
  const {errorMessage, isFormDisable} = state;

  return <form action="#" className="add-review__form" style={{opacity: isFormDisable ? `0.3` : null}}>
    {errorMessage.length ? <p style={{textAlign: `center`}}>{errorMessage}</p> : null}
    <div className="rating">
      <div className="rating__stars" onChange={onRateChange}>
        <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
        <label className="rating__label" htmlFor="star-1">Rating 1</label>

        <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
        <label className="rating__label" htmlFor="star-2">Rating 2</label>

        <input className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
        <label className="rating__label" htmlFor="star-3">Rating 3</label>

        <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
        <label className="rating__label" htmlFor="star-4">Rating 4</label>

        <input className="rating__input" id="star-5" type="radio" name="rating" value="5" defaultChecked/>
        <label className="rating__label" htmlFor="star-5">Rating 5</label>
      </div>
    </div>

    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
        onChange={onTextareaChange}
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="button" disabled={isFormDisable} onClick={onSubmit}>Post</button>
      </div>

    </div>
  </form>;
};

AddReviewForm.propTypes = {
  state: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isFormDisable: PropTypes.bool.isRequired
  }),
  onRateChange: PropTypes.func.isRequired,
  onTextareaChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

