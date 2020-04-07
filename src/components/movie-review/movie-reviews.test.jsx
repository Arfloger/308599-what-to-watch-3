import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {MovieReviews} from "./movie-reviews";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie review rendered`, () => {
  const tree = shallow(<MovieReviews
    movieId={1}
    onLoadComments={jest.fn()}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
