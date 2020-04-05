import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {ActionCreator} from '../../reduser/reducer';

import TabsList from '../tabs-list/tabs-list.jsx';
import {PageHeader} from '../page-header/page-header.jsx';
import PropTypes from 'prop-types';

export class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {currentId, loadCurrentFilm} = this.props;
    loadCurrentFilm(currentId);
  }

  _getRating(rating) {
    let mark = ``;
    switch (true) {
      case rating < 3:
        mark = `bad`;
        break;
      case rating < 5:
        mark = `normal`;
        break;
      case rating < 8:
        mark = `good`;
        break;
      case rating < 10:
        mark = `very good`;
        break;
      case rating === 10:
        mark = `awesome`;
        break;
    }
    return mark;
  }

  render() {
    const {requireAuthorization, film} = this.props;

    if (film) {
      return (
        <section className="movie-card movie-card--full" style={{backgroundColor: film[`background_color`]}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film[`background_image`]} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>
            <PageHeader auth={requireAuthorization}/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={film[`poster_image`]}
                  alt={`${film.name} poster`}
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <TabsList/>

                <div className="movie-rating">
                  <div className="movie-rating__score">{film.rating.toFixed(1)}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{this._getRating(film.rating)}</span>
                    <span className="movie-rating__count">{film[`scores_count`]} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{film.description}</p>

                  <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <div>LOADING...</div>;
    }

  }
}

MoviePage.propTypes = {
  requireAuthorization: PropTypes.bool,
  film: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  requireAuthorization: state.requireAuthorization,
  film: state.currentFilmCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentFilm: (id) => dispatch(ActionCreator.getFilmById(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
