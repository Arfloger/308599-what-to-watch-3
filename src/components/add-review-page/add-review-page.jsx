import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {PageHeader} from "../page-header/page-header.jsx";
import {AddReviewForm} from "../add-review-form/add-review-form.jsx";

import {withAddReviewForm} from "../../hocs/with-add-review-form/with-add-review-form";

const AddReviewFormWrapped = withAddReviewForm(AddReviewForm);

export const AddReviewPage = (props) => {
  const {currentMovie, history} = props;
  const {name, id} = currentMovie;
  const PARENT_STATUS = `ADD_REVIEW`;

  return <section className="movie-card movie-card--full" style={{background: currentMovie[`background_color`]}}>
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={currentMovie[`background_image`]} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader parent={PARENT_STATUS} currentMovie={currentMovie}/>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={currentMovie[`poster_image`]} alt={`${name} poster`} width="218" height="327"/>
      </div>
    </div>

    <div className="add-review">

      <AddReviewFormWrapped movieId={id} history={history}/>
    </div>

  </section>;
};

AddReviewPage.propTypes = {
  history: PropTypes.object.isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentMovie: state.currentMovie
});

export default connect(mapStateToProps)(AddReviewPage);
