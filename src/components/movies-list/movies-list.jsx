import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCard: {},
    };

    this._movieTitleHandle = this._movieTitleHandle.bind(this);
    this._handleMovieMouseLeave = this._handleMovieMouseLeave.bind(this);
  }

  _movieTitleHandle() {}

  _handleMovieMouseLeave(activeCard) {
    this.setState({
      activeCard
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((it) => (
          <SmallMovieCard
            title={it.name}
            photo={it.posterImage}
            key={it.id}
            onMovieMouseLeave={this._handleMovieMouseLeave}
            onMovieTitleClick={this._movieTitleHandle}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
      })
  )
};

export default MoviesList;
