import React from "react";
import renderer from "react-test-renderer";

import {GenreCatalogTab} from "./genre-catalog-tab";

import {films} from "../../mocks/mocks";

it(`Is genre catalog tab rendered`, () => {
  const tree = renderer
    .create(<GenreCatalogTab
      movies={films}
      activeTab={`All genres`}
      onTabClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
