import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MyList} from "./my-list";

Enzyme.configure({adapter: new Adapter()});

it(`Is my list renderer`, () => {
  const tree = shallow(<BrowserRouter>
    <MyList/>
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
