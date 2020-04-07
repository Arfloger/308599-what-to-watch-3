import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieControls from "../movie-controls/movie-controls.jsx";
import {PageHeader} from "../page-header/page-header.jsx";

import {Operation} from "../../reducer/reducer";

import {withMovieControls} from "../../hocs/with-movie-controls/with-movie-controls";

const MovieControlsWrapped = withMovieControls(MovieControls);

export const MoviePromo = (props) => {
  const PARENT_STATUS = `PROMO`;

  const {promo, history, onUpdateIsFavorite} = props;
  const {name, genre, released, id} = promo;

  const handleFavoriteClick = () => {
    onUpdateIsFavorite();
  };

  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={promo[`background_image`]} alt={name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <PageHeader />

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={promo[`poster_image`]} alt={name} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          {id ? <MovieControlsWrapped
            history={history}
            parent={PARENT_STATUS}
            favorite={promo[`is_favorite`]}
            movieId={id - 1}
            onFavoriteClick={handleFavoriteClick}
          /> : null}
        </div>
      </div>
    </div>
  </section>;
};

MoviePromo.propTypes = {
  promo: PropTypes.shape({
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
  }).isRequired,
  history: PropTypes.object.isRequired,
  onUpdateIsFavorite: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateIsFavorite: () => {
    dispatch(Operation.loadPromo());
    dispatch(Operation.loadMovies());
  }
});

export default connect(null, mapDispatchToProps)(MoviePromo);

