import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

export default class SmallMovieCard extends PureComponent {

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
    const {movie} = this.props;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <Link
          to={`/films/${movie.id}`}
          className="small-movie-card__link"
        >
          <div className="small-movie-card__image">
            <VideoPlayer
              src={movie.preview_video_link}
              poster={movie[`background_image`]}
              isPlaying={isVideoPlaying}
            />

          </div>
          <h3 className="small-movie-card__title">{movie.name}</h3>
        </Link>
      </article>
    );
  }

}

SmallMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
