import React, {PureComponent} from 'react';
import {TabItem} from '../tab-item/tab-item.jsx';

// import PropTypes from 'prop-types';

export default class TabsList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      tabs: [`Overview`, `Details`, `Reviews`],
      isActive: `Overview`,
    };

    this._onChangeTabClick = this._onChangeTabClick.bind(this);
  }

  _onChangeTabClick(tab) {
    this.setState({
      isActive: tab,
    }
    );
  }

  render() {
    const {tabs, isActive} = this.state;

    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((it) => <TabItem
            key={it}
            tab={it}
            onClickHandler={this._onChangeTabClick}
            isActiveTab={it === isActive ? true : false}
          />)}
        </ul>
      </nav>
    );
  }
}
