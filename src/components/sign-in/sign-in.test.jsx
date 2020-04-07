import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {SignIn} from "./sign-in";

Enzyme.configure({adapter: new Adapter()});

it(`Is login page rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <SignIn
      isAuthorized={true}
      history={{}}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
