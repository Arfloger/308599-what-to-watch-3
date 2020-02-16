import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MoviePage from '../../pages/movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, year, genre, films, mainMovie} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              title={title}
              year={year}
              genre={genre}
              films={films}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage mainMovie={mainMovie}/>
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
      })
  ),
  mainMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
  }).isRequired
};

export default App;
