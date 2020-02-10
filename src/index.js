import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const mainFilm = {
  title: `Joker`,
  year: 2018,
  genre: `drama`,
};

ReactDOM.render(
    <App
      title={mainFilm.title}
      year={mainFilm.year}
      genre={mainFilm.genre}
    />, document.querySelector(`#root`));
