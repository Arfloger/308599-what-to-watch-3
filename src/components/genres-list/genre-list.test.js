import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reduser/reducer";

import GenresList from "./genres-list.jsx";

it(`GenresList correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><GenresList
      films={[]}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
