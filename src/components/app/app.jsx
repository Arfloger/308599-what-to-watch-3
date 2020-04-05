import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={SignIn}/>
          <Route exact path="/films/:id" component={({match: {params: {id}}}) => {
            return (<MoviePage currentId={+id}/>);
          }}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
