import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard is correctly`, () => {
  const film = {
    id: 2,
    name: `War of the worlds`,
    posterImage: `img/war-of-the-worlds.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 39,
    genre: `Sitcom`,
    released: 2019,
    isFavorite: true,
  };

  const mouseHoverHandler = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    movie={film}
    onMovie={mouseHoverHandler}
  />);

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseOver`);

  expect(mouseHoverHandler).toHaveBeenCalledTimes(1);
  expect(mouseHoverHandler).toHaveBeenCalledWith(film);
});

it(`onMouseEnter event is correctly`, () => {
  const film = {
    id: 2,
    name: `War of the worlds`,
    posterImage: `img/war-of-the-worlds.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 39,
    genre: `Sitcom`,
    released: 2019,
    isFavorite: true,
  };
  const smallMovieCard = shallow(<SmallMovieCard
    movie={film}
  />);

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseEnter`);

  setTimeout(() => {
    expect(smallMovieCard.state(`isVideoPlaying`)).toEqual(true);
  }, 1000);
});

it(`onMouseLeave event is correctly`, () => {
  const film = {
    id: 2,
    name: `War of the worlds`,
    posterImage: `img/war-of-the-worlds.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 39,
    genre: `Sitcom`,
    released: 2019,
    isFavorite: true,
  };

  const smallMovieCard = shallow(<SmallMovieCard
    movie={film}
  />);

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseLeave`);

  expect(smallMovieCard.state(`isVideoPlaying`)).toEqual(false);
});
