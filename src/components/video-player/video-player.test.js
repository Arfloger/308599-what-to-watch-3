import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={``}
      poster={``}
      isPlaying={true}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
