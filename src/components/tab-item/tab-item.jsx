import React from 'react';

import PropTypes from 'prop-types';

export const TabItem = (props) => {
  const {isActiveTab, tab, onClickHandler} = props;

  return (
    <li className={isActiveTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
      <a
        className="movie-nav__link"
        onClick={() => onClickHandler(tab)}
      >{tab}</a>
    </li>
  );
};

TabItem.propTypes = {
  isActiveTab: PropTypes.bool,
  tab: PropTypes.string,
  onClickHandler: PropTypes.func,
};
