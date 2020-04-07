import React from "react";
import renderer from "react-test-renderer";

import {NotFound} from "./not-found";

it(`Is not found rendered`, () => {
  const tree = renderer.create(<NotFound/>).toJSON();

  expect(tree).toMatchSnapshot();
});
