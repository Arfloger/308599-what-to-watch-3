import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const title = `Красавица и чудовище`;
const photo = `img/my-image.jpg`;

it(`<SmallMovieCard/> should render correctly`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          title={title}
          photo={photo}
          onMovieMouseLeave={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
