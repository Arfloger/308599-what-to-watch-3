import React from "react";
import renderer from "react-test-renderer";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {Catalog} from "./catalog.jsx";

export const initialState = {
  genre: `All genres`,
  genres: [`All genres`],
  films: [],
  cardsOnPage: 8,
};

it(`Render correctly Catalog component`, () => {
  const store = createStore(() => initialState);
  const component = renderer
    .create(
        <Provider store={store}>
          <Catalog
            loadFilms={() => {}}
            films={[]}
            cardsOnPage={8}
            onClickShowMoreButton={() => {}}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(component).toMatchSnapshot();
});
