import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {GenreCatalog} from "../genre-catalog/genre-catalog";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is genre catalog rendered`, () => {
  const tree = shallow(<GenreCatalog
    movies={films}
    activeTab={`All genres`}
    moviesLoadedCount={9}
    onTabClick={jest.fn()}
    onLoadMoreClick={jest.fn()}
    onGetMoviesByGenre={jest.fn()}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
