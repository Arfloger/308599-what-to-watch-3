import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

export const UserBlock = (props) => {
  const {avatar} = props;

  return <div className="user-block">
    {avatar ?
      <Link to="/my-list" className="user-block__avatar">
        <img src={`https://htmlacademy-react-3.appspot.com${avatar}`} alt="User avatar" width="63" height="63"/>
      </Link> :
      <Link to="/login" className="user-block__link">Sign in</Link>
    }
  </div>;
};

UserBlock.propTypes = {
  avatar: PropTypes.string
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  avatar: state.avatar
});

export default connect(mapStateToProps)(UserBlock);
