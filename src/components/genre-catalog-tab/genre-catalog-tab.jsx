import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const GenreCatalogTab = (props) => {
  const {onTabClick, movies, activeTab} = props;

  const handleTabClick = (evt) => {
    const {target} = evt;

    evt.preventDefault();

    onTabClick(target.textContent.toLowerCase());
  };

  const makeGenres = (films) => {
    return [...new Set(films.map(({genre}) => genre))].map((genre, idx) => ({
      id: idx,
      genre
    }));
  };

  return <ul className="catalog__genres-list">
    <li
      className={
        `All genres`.toLowerCase()
          .includes(activeTab.toLowerCase()) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`
      }
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={handleTabClick}
      >All genres</a>
    </li>
    {makeGenres(movies).map(({genre, id}) => (
      <li
        key={id}
        className={
          genre.toLowerCase()
            .includes(activeTab.toLowerCase()) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`
        }
      >
        <a
          href="#"
          className="catalog__genres-link"
          onClick={handleTabClick}
        >{genre}</a>
      </li>
    ))}
  </ul>;
};

GenreCatalogTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
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
  })).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies
});

export default connect(mapStateToProps)(GenreCatalogTab);
