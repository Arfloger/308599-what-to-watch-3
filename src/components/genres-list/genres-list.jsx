import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GenreItem from '../genre-item/genre-item.jsx';

export default class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genre, genres, onGenreTabClick} = this.props;

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

GenresList.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.array,
  onGenreTabClick: PropTypes.func,
};
