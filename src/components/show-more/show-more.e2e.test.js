import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ShowMore} from "./show-more.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`ShowMore is correctly`, () => {
  const onButtonClick = jest.fn();
  const showMore = shallow(<ShowMore
    onClickHandler={onButtonClick}
  />);

  const showMoreButton = showMore.find(`.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
