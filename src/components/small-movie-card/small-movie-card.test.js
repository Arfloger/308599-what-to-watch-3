import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const title = `Красавица и чудовище`;
const photo = `my-image.jpg`;

it(`<SmallMovieCard/> should render title and photo`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          title={title}
          photo={photo}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
