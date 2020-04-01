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

it(`onMouseEnter event is correctly`, () => {

  const smallMovieCard = shallow(<SmallMovieCard
    title={``}
    photo={``}
    previewVideoLink={`test`}
    onMovieTitleClick={() => {}}
  />);


  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseEnter`);

  setTimeout(() => {
    expect(smallMovieCard.state(`isVideoPlaying`)).toEqual(true);
  }, 1000);
});

it(`onMouseLeave event is correctly`, () => {
  const onMovieMouseLeave = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        title={``}
        photo={``}
        previewVideoLink={``}
        onMovieMouseLeave={onMovieMouseLeave}
      />
  );

  const cards = smallMovieCard.find(`.small-movie-card`);
  const cardsOne = cards.at(0);

  cardsOne.simulate(`mouseleave`);

  expect(onMovieMouseLeave).toHaveBeenCalledTimes(1);
  expect(smallMovieCard.state(`isVideoPlaying`)).toEqual(false);
});
