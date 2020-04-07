import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {SimmilarMovie} from "./simmilar-movie";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is simmilar movie rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <SimmilarMovie
      simmilarMovies={films.slice(0, 4)}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
