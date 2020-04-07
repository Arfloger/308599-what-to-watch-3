import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {withMovieHover} from "./with-movie-hover";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withMovieHover(MockComponent);

it(`HOC have state - isPlaying`, () => {
  const wrapped = mount(<MockComponentWrapped />);

  expect(wrapped.state()).toHaveProperty(`isPlaying`);
});

describe(`Show movie preview`, () => {
  const movie = shallow(<MockComponentWrapped
    film={films[0]}
    id={0}
    key={0}
    onMovieClick={jest.fn()}
  />);

  it(`Movie set state isPlaying - true, when mouseenter`, () => {
    movie.simulate(`mouseEnter`);

    setTimeout(() => {
      expect(movie.state(`isPlaying`)).toBeTruthy();
    }, 1000);
  });

  it(`Movie set state isPlaying - false, when mouseleave`, () => {
    movie.simulate(`mouseLeave`);

    expect(movie.state(`isPlaying`)).toBeFalsy();
  });
});

