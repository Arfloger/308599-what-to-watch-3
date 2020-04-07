import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {UserBlock} from "../user-block/user-block";

it(`Is avatar rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <UserBlock
      avatar={`test`}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
