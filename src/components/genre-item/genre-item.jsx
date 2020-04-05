import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class GenreItem extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {genreName, activeTab, onClick} = this.props;

    return (
      <li className={activeTab ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
        <a
          className="catalog__genres-link"
          onClick={()=> onClick(genreName)}
        >
          {genreName}
        </a>
      </li>
    );
  }

}

GenreItem.propTypes = {
  genreName: PropTypes.string,
  activeTab: PropTypes.bool,
  onClick: PropTypes.func,
};
