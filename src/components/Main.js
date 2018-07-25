import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import Home from './Home';
import Likes from './Likes';
import SignUp from './SignUp';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/likes' component={Likes} />
      <Route exact path='/sign-up' component={SignUp} />
    </Switch>
  </main>
)

export default Main;
