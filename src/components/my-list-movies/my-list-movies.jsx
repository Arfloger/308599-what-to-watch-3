import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {SmallMovieCardList} from "../small-movie-card-list/small-movie-card-list.jsx";

export const MyListMovies = (props) => {
  const {moviesFavorite} = props;

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <SmallMovieCardList movies={moviesFavorite} />
  </section>;
};

MyListMovies.propTypes = {
  moviesFavorite: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  moviesFavorite: state.moviesFavorite
});

export default connect(mapStateToProps)(MyListMovies);
