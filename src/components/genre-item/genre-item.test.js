import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reduser/reducer";

import GenreItem from "./genre-item.jsx";

it(`GenreItem correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><GenreItem
      genreName={``}
      activeTab={false}
      onClick={() => {}}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
