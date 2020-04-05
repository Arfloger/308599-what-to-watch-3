import React from 'react';
import {connect} from "react-redux";
import {UserBlock} from '../user-block/user-block.jsx';

import PropTypes from 'prop-types';

export const PageHeader = (props) => {
  const {auth, avatar} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <UserBlock
        auth={auth}
        avatarUrl={avatar}
      />
    </header>
  );
};

PageHeader.propTypes = {
  auth: PropTypes.bool,
  avatar: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  avatar: state.avatar,
});

export default connect(mapStateToProps, null)(PageHeader);
