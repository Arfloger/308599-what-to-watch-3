import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({title, year, genre, films}) => {
  return (
    <Main
      title={title}
      year={year}
      genre={genre}
      films={films}
    />
  );
};

App.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
      })
  ),
};

export default App;
