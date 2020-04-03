import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer';

import GenreItem from '../genre-item/genre-item.jsx';

export class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let genres = [`All genres`];
    const {films, onGenreTabClick} = this.props;
    let genresList = new Set(films.map((it) => it.genre));
    genres = genres.concat(Array.from(genresList)).slice(0, 10);
    const {genre} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genres.map((it) => <GenreItem
          key={it}
          genreName={it}
          onClick={onGenreTabClick}
          activeTab={it === genre ? true : false}
        />)}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilms(genre));
  },
});

GenresList.propTypes = {
  films: PropTypes.array,
  genre: PropTypes.string,
  onGenreTabClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
