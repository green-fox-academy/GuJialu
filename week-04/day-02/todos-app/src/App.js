import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Todos from './Components/Todos/Todos';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
