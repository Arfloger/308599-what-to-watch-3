import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {films} from './mocks/films';
import {mainMovie} from './mocks/main-movie';

const mainFilm = {
  name: `Joker`,
  year: 2018,
  genre: `drama`,
};

ReactDOM.render(
    <App
      title={mainFilm.name}
      year={mainFilm.year}
      genre={mainFilm.genre}
      films={films}
      mainMovie={mainMovie}
    />, document.querySelector(`#root`));
