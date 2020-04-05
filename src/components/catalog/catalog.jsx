import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Operation, ActionCreator} from '../../reduser/reducer';
import PropTypes from 'prop-types';

import SmallMovieCardList from '../small-movie-card-list/small-movie-card-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import {ShowMore} from '../show-more/show-more.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WithGenresList = withActiveItem(GenresList);

export class Catalog extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFilms();
  }

  render() {
    const {films, cardsOnPage, onClickShowMoreButton, onGenreTabHandler, genre, genres} = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <WithGenresList
          onGenreTabClick={onGenreTabHandler}
          genre={genre}
          genres={genres}
        />
        <SmallMovieCardList
          movies={films}
          quantityCard={cardsOnPage}
        />
        {films.length > cardsOnPage && <ShowMore onClickHandler={onClickShowMoreButton}/>}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.films,
  cardsOnPage: state.cardsOnPage,
  genre: state.genre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilms: () => dispatch(Operation.loadFilms()),
    onClickShowMoreButton: () => dispatch(ActionCreator.increaseQuantityFilms()),
    onGenreTabHandler: (genre) => {
      dispatch(ActionCreator.changeGenre(genre));
      dispatch(ActionCreator.filteredFilms(genre));
      dispatch(ActionCreator.resetToMinFilms());
    }
  };
};

Catalog.propTypes = {
  cardsOnPage: PropTypes.number,
  films: PropTypes.array,
  loadFilms: PropTypes.func,
  onClickShowMoreButton: PropTypes.func,
  onGenreTabHandler: PropTypes.func,
  genre: PropTypes.string,
  genres: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
