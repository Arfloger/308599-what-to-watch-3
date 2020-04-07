import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MoviePage} from "./movie-page";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie page rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <MoviePage
      history={{}}
      movies={films}
      currentMovie={films[0]}
      onUpdateIsFavorite={jest.fn()}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});

