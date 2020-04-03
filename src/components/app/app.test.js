import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reducer";
import App from './app.jsx';

it(`<App/> should render correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            title={``}
            year={0}
            genre={``}
            films={[]}
            mainMovie={{
              id: 1,
              name: ``,
              posterImage: ``,
              previewImage: ``,
              backgroundImage: ``,
              backgroundColor: ``,
              description: ``,
              rating: 3.9,
              scoresCount: 240,
              director: ``,
              starring: [``, ``],
              runTime: 99,
              genre: ``,
              released: 2014,
            }}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
