import React, {PureComponent} from 'react';
import MainCard from '../main-card/main-card.jsx';
import Catalog from '../catalog/catalog.jsx';
import {PageFooter} from '../page-footer/page-footer.jsx';

export default class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <MainCard/>
        <div className="page-content">
          <Catalog/>
          <PageFooter/>
        </div>
  </>;
  }
}

