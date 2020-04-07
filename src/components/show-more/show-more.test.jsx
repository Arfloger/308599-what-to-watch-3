import React from "react";
import renderer from "react-test-renderer";

import {ShowMore} from "./show-more";

it(`Is load-more rendered`, () => {
  const tree = renderer.create(<ShowMore
    onLoadMoreClick={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
