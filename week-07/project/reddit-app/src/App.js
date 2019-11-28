import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';
import Community from './Components/Community/Community';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Community} />
          <Route exact path="/login" component={} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
