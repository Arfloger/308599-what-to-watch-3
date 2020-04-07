import React from "react";
import renderer from "react-test-renderer";

import {MoviePlayerProgress} from "./movie-player-progress";

it(`Is movie player progress rendered`, () => {
  const tree = renderer.create(<MoviePlayerProgress
    position={10}
    duration={`0:12:12`}
    lineProgressRef={React.createRef()}
    playPauseRef={React.createRef()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
