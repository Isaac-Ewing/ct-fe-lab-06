import React from 'react';
import AnimalCrossingCharacterContainer from '../../containers/CharContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ACListContainer from '../../containers/ListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ACListContainer}/>
        <Route exact path="/:id" component={AnimalCrossingCharacterContainer}/>
      </Switch>
    </BrowserRouter>
  );
}
