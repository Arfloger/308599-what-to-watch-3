import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adater from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adater(),
});

it(`Should title be pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        title={``}
        photo={``}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const titleElement = smallMovieCard.find(`.small-movie-card__link`);
  titleElement.props().onClick();

  expect(onMovieTitleClick.mock.calls.length).toBe(1);
});
