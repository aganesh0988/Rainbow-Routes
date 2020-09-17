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
      <NavLink to="/red">Red</NavLink>
      <NavLink to="/green">Green</NavLink>
      <NavLink to="/blue">Blue</NavLink>
      <NavLink to="/violet">Violet</NavLink>

      <Route path="/red" component={Red} />
      <Route path="/green" component={Green} />
      <Route path="/blue" component={Blue} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
