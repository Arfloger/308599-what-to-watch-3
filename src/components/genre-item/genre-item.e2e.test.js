import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreItem from "./genre-item.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`GenreItem click is correctly`, () => {
  const clickHandler = jest.fn();
  const genreItem = shallow(
      <GenreItem
        genreName={``}
        activeTab={false}
        onGenreTabClick={clickHandler}/>);

  const genreItemLink = genreItem.find(`.catalog__genres-link`).first();

  genreItemLink.simulate(`click`, {preventDefault() {}, target: {textContent: ``}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
