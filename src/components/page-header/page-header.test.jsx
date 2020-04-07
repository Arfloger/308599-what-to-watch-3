import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {PageHeader} from "./page-header";

Enzyme.configure({adapter: new Adapter()});

it(`Is header rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <PageHeader
      isAuthorized={false}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
