import React from "react";
import renderer from "react-test-renderer";

import Video from "./video.jsx";

it(`Video correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Video
      src={``}
      poster={``}
      isPlaying={true}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
