import React from "react";
import PropTypes from "prop-types";

export const withMoviePlayerProgress = (Component) => {
  class WithMoviePlayerProgress extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        timeLeft: 0,
        percent: 0,
      };

      this._video = null;

      this.lineProgressRef = React.createRef();
      this.playPauseRef = React.createRef();

      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    componentDidMount() {
      this._video = this.props.videoRef.current;

      if (this._video) {
        this._video.onloadedmetadata = () => this.setState({timeLeft: this._video.duration});
        this._video.ontimeupdate = () => this._handleTimeUpdate(this._video.currentTime, this._video.duration);
      }
    }

    componentWillUnmount() {
      if (this._video) {
        this._video.onloadedmetadata = null;
        this._video.ontimeupdate = null;
      }
    }

    _handleTimeUpdate(currentTime, duration) {
      const timeLeft = duration - currentTime;
      const percent = currentTime / duration * 100;

      this.setState({timeLeft, percent});
    }

    _formatDuration(timestamp) {
      const timestampFloor = Math.floor(timestamp);
      const hours = Math.floor(timestampFloor / 60 / 60);
      const minutes = Math.floor(timestampFloor / 60) - (hours * 60);
      const seconds = timestampFloor % 60;

      return [
        hours.toString().padStart(2, `0`),
        minutes.toString().padStart(2, `0`),
        seconds.toString().padStart(2, `0`)
      ].join(`:`);
    }

    render() {
      const {timeLeft, percent} = this.state;
      const formattedDuration = this._formatDuration(timeLeft);

      return (
        <Component
          {...this.props}
          duration={formattedDuration}
          position={percent}
          lineProgressRef={this.lineProgressRef}
          playPauseRef={this.playPauseRef}
        />
      );
    }
  }

  WithMoviePlayerProgress.defaultProps = {
    videoRef: {},
  };

  WithMoviePlayerProgress.propTypes = {
    videoRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    }).isRequired,
  };

  return WithMoviePlayerProgress;
};
