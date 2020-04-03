import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem by default`, () => {
  const wrapper = mount(<MockComponentWrapped />);

  expect(wrapper.state().activeItem).toEqual(null);
});
