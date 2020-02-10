import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({title, year, genre}) => {
  return (
    <Main
      title={title}
      year={year}
      genre={genre}
    />
  );
};

export default App;
