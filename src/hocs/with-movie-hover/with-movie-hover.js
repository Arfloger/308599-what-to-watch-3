import React, {PureComponent} from "react";

export const withMovieHover = (Component) => {
  class WithMovieHover extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.timerId = null;
      this.HOVER_DELAY = 1000;

      this.handleMovieEnter = this.handleMovieEnter.bind(this);
      this.handleMovieLeave = this.handleMovieLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }

    handleMovieEnter() {
      this.timerId = setTimeout(() => {
        this.setState({isPlaying: true});
      }, this.HOVER_DELAY);
    }

    handleMovieLeave() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.setState({isPlaying: false});
      }
    }

    render() {
      return <Component
        {...this.props}
        onMovieEnter={this.handleMovieEnter}
        onMovieLeave={this.handleMovieLeave}
        isPlaying={this.state.isPlaying}
      />;
    }
  }

  WithMovieHover.propTypes = {};

  return WithMovieHover;
};
