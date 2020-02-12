import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

it(`<MoviesList/> should render with films`, () => {

  const tree = renderer
  .create(
      <MoviesList
        films={[]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
