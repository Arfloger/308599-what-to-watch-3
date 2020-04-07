import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {Breadcrumbs} from "./breadcrumbs";

import {films} from "../../mocks/mocks";

it(`Is breadcrumbs rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <Breadcrumbs
      currentMovie={films[0]}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
