import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {MoviePlayerProgress} from "../movie-player-progress/movie-player-progress.jsx";

import {withMoviePlayerProgress} from "../../hocs/with-movie-player-progress/with-movie-player-progress";

const MoviePlayerProgressWrapped = withMoviePlayerProgress(MoviePlayerProgress);

export const MoviePlayer = (props) => {
  const {currentMovie, videoRef, onPlaySwitch, onFullScreen, isPlaying, history} = props;
  const {name} = currentMovie;

  const handleExitClick = () => {
    history.goBack();
  };

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        poster={currentMovie[`preview_image`]}
        width="100%"
        height="100%"
      >
        <source src={currentMovie[`video_link`]} type="video/mp4"/>
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={handleExitClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <MoviePlayerProgressWrapped
          videoRef={videoRef}
        />

        <div className="player__controls-row">
          <button
            className="player__play"
            type="button"
            onClick={onPlaySwitch}
          >
            {!isPlaying ? <svg
              viewBox="0 0 19 19"
              width="19"
              height="19"
            >
              <use xlinkHref="#play-s"/>
            </svg> :
              <svg
                viewBox="0 0 19 19"
                width="19"
                height="19"
              >
                <use xlinkHref="#pause"/>
              </svg>}

            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button
            className="player__full-screen"
            type="button"
            onClick={onFullScreen}
          >
            <svg
              viewBox="0 0 27 27"
              width="27"
              height="27"
            >
              <use xlinkHref="#full-screen"/>
            </svg>

            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

MoviePlayer.propTypes = {
  currentMovie: PropTypes.shape({
    name: PropTypes.string,
    videoLink: PropTypes.string,
    previewImage: PropTypes.string,
    runTime: PropTypes.number,
  }).isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  history: PropTypes.object,
  onPlaySwitch: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentMovie: state.currentMovie
});

export default connect(mapStateToProps)(MoviePlayer);

