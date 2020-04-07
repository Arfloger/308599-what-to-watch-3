import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {playerState} = this.props;
    const video = this.videoRef.current;

    if (playerState) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  render() {
    const {src, poster, muted, width, height} = this.props;

    return <video
      src={src}
      poster={poster}
      muted={muted}
      width={width}
      height={height}
      ref={this.videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  poster: PropTypes.string,
  muted: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  playerState: PropTypes.any
};
