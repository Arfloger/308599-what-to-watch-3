import React from "react";
import renderer from "react-test-renderer";

import {MovieOverview} from "./movie-overview";

import {films} from "../../mocks/mocks";

it(`Is movie overview page rendered`, () => {
  const tree = renderer
    .create(<MovieOverview
      movie={films[0]}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
