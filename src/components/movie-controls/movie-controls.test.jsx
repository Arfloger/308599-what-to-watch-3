import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {MovieControls} from "../movie-controls/movie-controls";

it(`Is movie controls rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <MovieControls
      state={{
        isFavorite: true,
        isButtonDisable: false
      }}
      onButtonClick={jest.fn()}
      parent={`promo`}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
