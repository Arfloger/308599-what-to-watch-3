import React from "react";
import renderer from "react-test-renderer";

import SmallMovieCardList from "./small-movie-card-list";

it(`GenresList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <SmallMovieCardList
          movies={[]}
          quantityCard={8}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
