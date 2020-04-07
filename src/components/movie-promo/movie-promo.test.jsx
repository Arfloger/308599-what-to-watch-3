import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {MoviePromo} from "../movie-promo/movie-promo";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie promo rendered`, () => {
  const tree = shallow(<MoviePromo
    promo={films[0]}
    history={{}}
    isAuthorized={false}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
