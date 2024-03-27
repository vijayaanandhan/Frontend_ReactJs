// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration.js';

const Routing = () => {
  return (
    <>
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Registration} />
    </Router>
    </>
  );
};

export default Routing;
