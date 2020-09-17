import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Orange from './Orange.js';
import Yellow from './Yellow.js';

const Red = () => (
  <div>
    <h2 className="red">Red</h2>

    <Link to='/red'>Red only</Link>
    <Link to='/red/orange'>Add Orange</Link>
    <Link to='/red/yellow'>Add Yellow</Link>

    <Route path='/red/orange' component={Orange} />
    <Route path='/red/yellow' component={Yellow} />
  </div>
);

export default Red;
