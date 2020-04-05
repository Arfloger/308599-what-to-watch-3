import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {

    super(props);

    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    return isPlaying ? video.play() : video.load();
  }

  render() {
    const {poster, src} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={poster}
        width="280"
        height="175"
        muted
      >
      </video>
    );
  }

}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool,
};
