import React from "react";

import MyListMovies from "../my-list-movies/my-list-movies.jsx";
import {PageHeader} from "../page-header/page-header.jsx";
import {PageFooter} from "../page-footer/page-footer.jsx";

import {withMyListMovies} from "../../hocs/with-my-list-movies/with-my-list-movies";

const MyListMoviesWrapped = withMyListMovies(MyListMovies);

export const MyList = () => {
  const PARENT_STATUS = `MY_LIST`;

  return <div className="user-page">
    <PageHeader parent={PARENT_STATUS} />

    <MyListMoviesWrapped />

    <PageFooter />
  </div>;
};
