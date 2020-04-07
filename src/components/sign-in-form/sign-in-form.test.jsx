import React from "react";
import renderer from "react-test-renderer";

import {SignInForm} from "./sign-in-form";

it(`Is login form rendered`, () => {
  const tree = renderer.create(<SignInForm
    onUserInput={jest.fn()}
    onSubmit={jest.fn()}
    validation={{
      email: true,
      password: true,
      message: undefined
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
