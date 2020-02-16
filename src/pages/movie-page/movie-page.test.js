import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

it(`<MoviePage/> shold render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePage
          mainMovie={{
            id: 1,
            name: ``,
            posterImage: ``,
            previewImage: ``,
            backgroundImage: ``,
            backgroundColor: ``,
            description: ``,
            rating: 3.9,
            scoresCount: 240,
            director: ``,
            starring: [``, ``],
            runTime: 99,
            genre: ``,
            released: 2014,
          }}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
