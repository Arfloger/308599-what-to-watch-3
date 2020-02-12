import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`<App/> shold render with title, year, genre, films`, () => {
  const tree = renderer
    .create(
        <App
          title={``}
          year={0}
          genre={``}
          films={[]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
