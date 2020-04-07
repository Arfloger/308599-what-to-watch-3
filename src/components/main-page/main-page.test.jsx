import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {MainPage} from "./main-page";

Enzyme.configure({adapter: new Adapter()});

it(`Is MainPage rendered`, () => {
  const tree = shallow(<MainPage
    history={{}}
    onLoadPromo={jest.fn()}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
