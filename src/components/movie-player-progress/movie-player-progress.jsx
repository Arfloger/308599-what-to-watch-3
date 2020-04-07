import React from "react";
import PropTypes from "prop-types";

export const MoviePlayerProgress = (props) => {
  const {position, lineProgressRef, playPauseRef, duration} = props;
  const moveStyles = {
    left: `${position}%`
  };

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          ref={lineProgressRef}
          value={position}
          max="100"
        />
        <div

          className="player__toggler"
          ref={playPauseRef}
          style={moveStyles}
        >
          Toggler</div>
      </div>
      <div className="player__time-value">{duration}</div>
    </div>
  );
};

MoviePlayerProgress.propTypes = {
  position: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  lineProgressRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
  playPauseRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired
};
