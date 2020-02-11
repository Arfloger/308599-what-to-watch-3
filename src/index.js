import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const mainFilm = {
  title: `Joker`,
  year: 2018,
  genre: `drama`,
};

const films = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    background: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    background: `bohemian-rhapsody.jpg`,
  },
  {
    id: 3,
    title: `Macbeth`,
    background: `macbeth.jpg`,
  },
  {
    id: 4,
    title: `Aviator`,
    background: `aviator.jpg`,
  },
  {
    id: 5,
    title: `We need to talk about Kevin`,
    background: `we-need-to-talk-about-kevin.jpg`,
  },
];

ReactDOM.render(
    <App
      title={mainFilm.title}
      year={mainFilm.year}
      genre={mainFilm.genre}
      films={films}
    />, document.querySelector(`#root`));
