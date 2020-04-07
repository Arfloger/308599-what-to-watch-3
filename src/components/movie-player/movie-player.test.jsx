import React from "react";
import renderer from "react-test-renderer";

import {MoviePlayer} from "../movie-player/movie-player";

import {films} from "../../mocks/mocks";

it(`Is movie player rendered`, () => {
  const tree = renderer.create(<MoviePlayer
    currentMovie={films[0]}
    videoRef={React.createRef()}
    isPlaying={true}
    onPlaySwitch={jest.fn()}
    onClosePlayer={jest.fn()}
    onFullScreen={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
