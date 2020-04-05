import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

export default class SmallMovieCardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, quantityCard} = this.props;

    if (movies) {
      return (
        <div className="catalog__movies-list">
          {movies.map((it) =>
            <SmallMovieCard
              key={it.id}
              movie={it}
            />).slice(0, quantityCard)}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

SmallMovieCardList.propTypes = {
  movies: PropTypes.array,
  quantityCard: PropTypes.number,
};
