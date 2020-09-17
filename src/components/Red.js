import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Orange from './Orange.js';
import Yellow from './Yellow.js';

const Red = () => (
  <div>
    <h2 className="red">Red</h2>

    <NavLink exact to='/red'>Red only</NavLink>
    <NavLink to='/red/orange'>Add Orange</NavLink>
    <NavLink to='/red/yellow'>Add Yellow</NavLink>

    <Route path='/red/orange' component={Orange} />
    <Route path='/red/yellow' component={Yellow} />
  </div>
);

export default Red;
