import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Indigo from './Indigo.js';

const Blue = () => (
  <div>
    <h2 className="blue">Blue</h2>

    <NavLink exact to='/blue' >Blue only</NavLink>
    <NavLink to='/blue/indigo'> Add Indigo </NavLink>

    <Route path='/blue/indigo' component={Indigo} />
  </div>
);

export default Blue;
