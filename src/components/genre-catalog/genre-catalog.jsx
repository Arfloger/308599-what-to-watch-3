import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer/reducer';

import GenreCatalogTab from "../genre-catalog-tab/genre-catalog-tab.jsx";
import {ShowMore} from "../show-more/show-more.jsx";
import {SmallMovieCardList} from "../small-movie-card-list/small-movie-card-list.jsx";

export const GenreCatalog = (props) => {
  const {movies, activeTab, onTabClick, onClickShowMoreButton, cardsOnPage} = props;
  let genres = [];

  const getMoviesByGenre = (films) => {
    genres = activeTab.toLowerCase() !== `All genres`.toLowerCase() ?
      films.slice()
        .filter(({genre}) => genre.toLowerCase() === activeTab).slice(0, cardsOnPage) :
      films.slice(0, cardsOnPage);
  };

  getMoviesByGenre(movies);

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreCatalogTab onTabClick={onTabClick} activeTab={activeTab}/>

    <SmallMovieCardList movies={genres} />

    {genres.length >= cardsOnPage ? <ShowMore onLoadMoreClick={onClickShowMoreButton}/> : null}
  </section>;

};

GenreCatalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
  cardsOnPage: PropTypes.number,
  onTabClick: PropTypes.func.isRequired,
  onClickShowMoreButton: PropTypes.func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  cardsOnPage: state.cardsOnPage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClickShowMoreButton: () => dispatch(ActionCreator.increaseQuantityFilms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreCatalog);

