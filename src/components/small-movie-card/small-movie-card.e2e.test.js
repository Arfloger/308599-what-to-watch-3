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

it(`Pointing to the card and receiving information about it`, () => {
  const onMovieMouseLeave = jest.fn();

  const card = {
    title: ``,
    photo: ``,
  };

  const smallMovieCard = shallow(
      <SmallMovieCard
        title={``}
        photo={``}
        onMovieMouseLeave={onMovieMouseLeave}
      />
  );

  const cards = smallMovieCard.find(`.small-movie-card`);
  const cardsOne = cards.at(0);

  cardsOne.simulate(`mouseleave`);

  expect(onMovieMouseLeave).toHaveBeenCalledTimes(1);
  expect(onMovieMouseLeave.mock.calls[0][0]).toMatchObject(card);
});

