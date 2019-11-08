import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import HelloWorld from './Components/HellowWorld';
import ErrorHappen from './Components/ErrorHappen';
import ErrorCode from './Components/ErrorCode';
import NotImplement from './Components/NotImplement';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Hellow World</NavLink>
        <NavLink to="/error">Error</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/error" component={ErrorHappen} />
        <Route path="/error/:code" component={ErrorCode} />
        <Route component={NotImplement} />
      </Switch>
    </Router>
  );
}

export default App;
