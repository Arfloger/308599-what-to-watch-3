import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreCatalog from "../genre-catalog/genre-catalog.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import {PageFooter} from "../page-footer/page-footer.jsx";

import {Operation} from "../../reducer/reducer";

import {withGenreCatalog} from "../../hocs/with-genre-catalog/with-genre-catalog";
import {withGetStore} from "../../hocs/with-get-store/with-get-store";

const GenreCatalogWrapped = withGenreCatalog(GenreCatalog);
const MoviePromoWrapped = withGetStore(MoviePromo, `promo`);

export const MainPage = (props) => {
  const {history, onLoadPromo} = props;

  onLoadPromo();

  return <React.Fragment>
    <MoviePromoWrapped history={history} />

    <div className="page-content">
      <GenreCatalogWrapped />

      <PageFooter />
    </div>
  </React.Fragment>;
};

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  onLoadPromo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onLoadPromo: () => {
    dispatch(Operation.loadPromo());
  }
});

export default connect(null, mapDispatchToProps)(MainPage);
