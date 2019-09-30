import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={Home}/>  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;