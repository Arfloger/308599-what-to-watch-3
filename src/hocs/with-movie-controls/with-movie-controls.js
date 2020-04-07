import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/reducer";

export const withMovieControls = (Component) => {
  class WithMovieControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.favorite,
        isButtonDisable: false
      };

      this.FavotiteStatus = {
        ADD: 1,
        REMOVE: 0
      };

      this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(evt) {
      evt.preventDefault();

      const {isAuthorized, history} = this.props;
      const {id} = evt.currentTarget;

      if (isAuthorized) {
        this._getButton(id);
        return;
      }

      history.push(`/login`);
    }

    _getButton(id) {
      switch (id) {
        case `addReview`:
          this._navigateToReview();
          break;
        case `myList`:
          this._switchFavorite();
          break;
        default:
          break;
      }
    }

    _navigateToReview() {
      const {history, movieId} = this.props;

      history.push(`/movie/${movieId + 1}/add-review`);
    }

    _switchFavorite() {
      const {onSwitchFavorite, movieId, onFavoriteClick} = this.props;

      this.setState({isButtonDisable: true});
      if (this.state.isFavorite) {
        onSwitchFavorite(movieId + 1, this.FavotiteStatus.REMOVE, () => {
          this.setState({isFavorite: false, isButtonDisable: false});
          onFavoriteClick();
        });
        return;
      }

      onSwitchFavorite(movieId + 1, this.FavotiteStatus.ADD, () => {
        this.setState({isFavorite: true, isButtonDisable: false});
        onFavoriteClick();
      });
    }

    render() {
      const {parent, movieId} = this.props;

      return <Component
        {...this.props}
        state={this.state}
        parent={parent}
        onButtonClick={this.handleButtonClick}
        movieId={movieId}
      />;
    }
  }

  WithMovieControls.propTypes = {
    history: PropTypes.object.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    parent: PropTypes.string,
    movieId: PropTypes.number,
    favorite: PropTypes.bool,
    onSwitchFavorite: PropTypes.func,
    onFavoriteClick: PropTypes.func
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorized: state.isAuthorized
  });

  const mapDispatchToProps = (dispatch) => ({
    onSwitchFavorite: (movieId, status, cb) => {
      dispatch(Operation.switchFavorite(movieId, status, cb));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithMovieControls);
};
