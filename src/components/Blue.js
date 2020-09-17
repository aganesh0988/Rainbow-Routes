import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Indigo from './Indigo.js';

const Blue = () => (
  <div>
    <h2 className="blue">Blue</h2>

    <Link to='/blue' >Blue only</Link>
    <Link to='/blue/indigo'> Add Indigo </Link>

    <Route path='/blue/indigo' component={Indigo} />
  </div>
);

export default Blue;
