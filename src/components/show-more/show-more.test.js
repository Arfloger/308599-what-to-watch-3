import React from "react";
import renderer from "react-test-renderer";

import {ShowMore} from "./show-more.jsx";

it(`ShowMore correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onClick={() => {}}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
