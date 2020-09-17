import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Red from './Red.js';
import Green from './Green.js';
import Blue from './Blue.js';
import Violet from './Violet.js';

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
    {}
    <div id="rainbow">
      <NavLink to="/red" activeClassName="parent-active">Red</NavLink>
      <NavLink to="/green" activeClassName="parent-active">Green</NavLink>
      <NavLink to="/blue" activeClassName="parent-active">Blue</NavLink>
      <NavLink to="/violet" activeClassName="parent-active">Violet</NavLink>

      <Route path="/red" component={Red} />
      <Route path="/green" component={Green} />
      <Route path="/blue" component={Blue} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
