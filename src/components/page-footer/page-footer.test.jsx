import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {PageFooter} from "./page-footer.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Is footer rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <PageFooter />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});

