import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Operation} from '../../reduser/reducer';
import PropTypes from 'prop-types';

import {PageHeader} from '../page-header/page-header.jsx';

export class MainCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPromo();
  }

  render() {
    const {promo, requireAuthorization} = this.props;

    if (promo) {
      return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo[`background_image`]} alt={promo.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader
        auth={requireAuthorization}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promo[`poster_image`]} alt={promo.name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo.genre}</span>
              <span className="movie-card__year">{promo.released}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
    } else {
      return <div>LOADING...</div>;
    }
  }
}

MainCard.propTypes = {
  promo: PropTypes.object,
  loadPromo: PropTypes.func,
  requireAuthorization: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  promo: state.promo,
  requireAuthorization: state.requireAuthorization,
});


const mapDispatchToProps = (dispatch) => {
  return {
    loadPromo: () => dispatch(Operation.loadPromo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
