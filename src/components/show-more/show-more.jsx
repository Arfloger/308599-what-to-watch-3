import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class ShowMore extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onClickHandler} = this.props;
    return (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={onClickHandler}
        >Show more</button>
      </div>
    );
  }
}

ShowMore.propTypes = {
  onClickHandler: PropTypes.func,
};

