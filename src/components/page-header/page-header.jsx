import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import UserBlock from "../user-block/user-block.jsx";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs.jsx";

export const PageHeader = (props) => {
  const {parent, currentMovie} = props;
  const ParentStatus = {
    ADD_REVIEW: `addReview`,
    MY_LIST: `myList`
  };

  return <header className={ParentStatus[parent] === ParentStatus.MY_LIST ? `page-header user-page__head` : `page-header movie-card__head`}>
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    {ParentStatus[parent] === ParentStatus.ADD_REVIEW ? <Breadcrumbs currentMovie={currentMovie}/> : null}
    {ParentStatus[parent] === ParentStatus.MY_LIST ? <h1 className="page-title user-page__title">My list</h1> : null}

    <UserBlock />
  </header>;
};

PageHeader.propTypes = {
  parent: PropTypes.string,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  })
};
