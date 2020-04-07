import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieReviews from "../movie-review/movie-reviews.jsx";
import MovieControls from "../movie-controls/movie-controls.jsx";
import {PageHeader} from "../page-header/page-header.jsx";
import {SimmilarMovie} from "../simmilar-movie/simmilar-movie.jsx";
import {MovieOverview} from "../movie-overview/movie-overview.jsx";
import {MovieDetail} from "../movie-detail/movie-detail.jsx";
import {PageFooter} from "../page-footer/page-footer.jsx";
import {tabs} from "../../const";

import {Operation} from "../../reducer/reducer";

import {withMovieControls} from "../../hocs/with-movie-controls/with-movie-controls";

const MovieControlsWrapped = withMovieControls(MovieControls);

export class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.PARENT_STATUS = `MOVIE_PAGE`;
    this.simmilarMovies = [];

    this.state = {
      currentTab: `Overview`,
    };
  }

  _handleLinkClick(val) {
    this.setState({
      currentTab: val
    });
  }

  _getCurrentTab(movie, id) {
    switch (this.state.currentTab) {
      case `Overview`:
        return (<MovieOverview movie={movie} />);
      case `Details`:
        return (<MovieDetail movie={movie}/>);
      case `Reviews`:
        return (<MovieReviews movieId={id}/>);
    }
    return null;
  }


  getSimilarMovies(films, currentMovie) {
    this.simmilarMovies = films.filter((film) => film.genre === currentMovie.genre).slice(0, 4)
      .filter((film) => film.id !== currentMovie.id);
  }

  render() {
    const {movies, currentMovie, history, onUpdateIsFavorite} = this.props;

    const {name, genre, released, id} = currentMovie;

    const handleFavoriteClick = () => {
      onUpdateIsFavorite();
    };

    this.getSimilarMovies(movies, currentMovie);


    return <>
      <section className="movie-card movie-card--full" style={{background: currentMovie[`background_color`]}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentMovie[`background_image`]} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieControlsWrapped
                history={history}
                parent={this.PARENT_STATUS}
                movieId={id - 1}
                favorite={currentMovie[`is_favorite`]}
                onFavoriteClick={handleFavoriteClick}
              />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentMovie[`poster_image`]} alt={name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  {
                    tabs.map((it, index) => (
                      <li
                        className={`movie-nav__item ${this.state.currentTab === it ? ` movie-nav__item--active` : ``}`}
                        key={`${it}-${index}`}
                      >
                        <a
                          href="#"
                          className="movie-nav__link"
                          onClick={(evt) => {
                            evt.preventDefault();
                            this._handleLinkClick(evt.target.text);
                          }}
                        >
                          {it}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
              {
                this._getCurrentTab(currentMovie, id)
              }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">

        {this.simmilarMovies.length ? <SimmilarMovie simmilarMovies={this.simmilarMovies}/> : null}

        <PageFooter />
      </div>
    </>;
  }

}

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  })).isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  }).isRequired,
  history: PropTypes.object.isRequired,
  onUpdateIsFavorite: PropTypes.func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateIsFavorite: () => {
    dispatch(Operation.loadMovies());
    dispatch(Operation.loadPromo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
