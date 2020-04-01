import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Video from '../video/video.jsx';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeout = null;

    this.state = {
      isVideoPlaying: false,
    };

    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  _handleMouseEnter() {
    this._videoTimeout = setTimeout(() => {
      this.setState({
        isVideoPlaying: true,
      });
    }, 1000);
  }

  _handleMouseLeave() {
    clearTimeout(this._videoTimeout);
    this.setState({
      isVideoPlaying: false,
    });
  }

  render() {
    const {title, photo, previewVideoLink, onMovieTitleClick, onMovieMouseLeave} = this.props;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseLeave={() => {
          onMovieMouseLeave({photo, title});
          this._handleMouseLeave();
        }}
        onMouseEnter={this._handleMouseEnter}
      >
        <div className="small-movie-card__image">
          <Video
            src={previewVideoLink}
            poster={photo}
            isPlaying={isVideoPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={onMovieTitleClick}
          >{title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string,
  onMovieTitleClick: PropTypes.func,
  onMovieMouseLeave: PropTypes.func,
};

export default SmallMovieCard;
