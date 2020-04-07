import React from "react";
import renderer from "react-test-renderer";

import {MovieDetail} from "./movie-detail";

import {films} from "../../mocks/mocks";

it(`Is movie details rendered`, () => {
  const tree = renderer.create(<MovieDetail
    movie={films[0]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
