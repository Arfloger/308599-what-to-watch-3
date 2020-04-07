import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MyListMovies} from "../my-list-movies/my-list-movies";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is my list movies rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <MyListMovies
      moviesFavorite={films}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
