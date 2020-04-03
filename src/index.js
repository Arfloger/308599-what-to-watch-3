import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {reducer} from './reducer';
import {films} from './mocks/films';
import {mainMovie} from './mocks/main-movie';

const mainFilm = {
  name: `Joker`,
  year: 2018,
  genre: `drama`,
};

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          title={mainFilm.name}
          year={mainFilm.year}
          genre={mainFilm.genre}
          films={films}
          mainMovie={mainMovie}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
