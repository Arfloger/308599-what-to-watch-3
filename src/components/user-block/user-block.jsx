import React from 'react';
import {Link} from "react-router-dom";

export const UserBlock = (props) => {
  const {auth, avatarUrl} = props;

  if (auth) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-block">
        <Link
          to={`/login`}
          className="user-block__link"
        >
            Sign in
        </Link>
      </div>
    );
  }
};
