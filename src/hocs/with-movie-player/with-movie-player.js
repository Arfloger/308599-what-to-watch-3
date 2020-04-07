import React from "react";
import PropTypes from "prop-types";

export const withMoviePlayer = (Component) => {
  class WithMoviePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.video = React.createRef();

      this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    }

    handleFullScreenClick() {
      const video = this.video.current;

      if (!video.requestFullscreen) {
        if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        video.requestFullscreen();
      }
    }

    handlePlayPauseClick() {
      const {isPlaying} = this.state;

      if (!isPlaying) {
        this.video.current.play();
      } else {
        this.video.current.pause();
      }

      this.setState({isPlaying: !isPlaying});
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this.video}
          isPlaying={isPlaying}
          onPlaySwitch={this.handlePlayPauseClick}
          onFullScreen={this.handleFullScreenClick}
          history={this.props.history}
        />
      );
    }
  }

  WithMoviePlayer.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
      goBack: PropTypes.func,
    }),
    location: PropTypes.shape({
      key: PropTypes.string,
    })
  };

  return WithMoviePlayer;
};
