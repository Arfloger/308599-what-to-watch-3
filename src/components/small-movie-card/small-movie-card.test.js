import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const title = `Красавица и чудовище`;
const photo = `img/my-image.jpg`;
const previewVideoLink = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;

it(`<SmallMovieCard/> should render correctly`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          title={title}
          photo={photo}
          previewVideoLink={previewVideoLink}
          onMovieMouseLeave={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
