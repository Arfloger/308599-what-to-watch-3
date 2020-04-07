import React, {PureComponent} from "react";

import {AppSettings} from "../../components/app/app.jsx";

export const withGenreCatalog = (Component) => {
  class WithGenreCatalog extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `All genres`,
        moviesLoadedCount: AppSettings.MOVIES_INIT_LENGTH
      };

      this.handleTabClick = this.handleTabClick.bind(this);
      this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    }

    handleTabClick(value) {
      this.setState({activeTab: value});
    }

    handleLoadMoreClick() {
      this.setState((prevState) => ({
        moviesLoadedCount: prevState.moviesLoadedCount + AppSettings.MOVIES_TO_LOAD
      }));
    }

    render() {
      const {activeTab, moviesLoadedCount} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        moviesLoadedCount={moviesLoadedCount}
        onTabClick={this.handleTabClick}
        onLoadMoreClick={this.handleLoadMoreClick}
      />;
    }
  }

  WithGenreCatalog.propTypes = {};

  return WithGenreCatalog;
};
