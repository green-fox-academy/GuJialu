import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import React, { useState, useEffect , useRef} from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

import './App.css';

function App() {

  const [componentAndTimes, setComponentAndTimes] = useState([]);
  const componentAndTimesRef = useRef(componentAndTimes);

  function newComponentAndTime(ComponentId, timeUsed){
    componentAndTimesRef.current = [...componentAndTimesRef.current, {component: ComponentId, time: timeUsed}];
    setComponentAndTimes(componentAndTimesRef.current);
  }

  console.log(componentAndTimes);
  return (
    <>
      <Router>
        <nav>
          <NavLink to="/1">1</NavLink>
          <NavLink to="/2">2</NavLink>
        </nav>
        <Switch>
          <Route exact path="/1" render={()=><Component1 fun={newComponentAndTime}/>} />
          <Route exact path="/2" render={()=><Component2 fun={newComponentAndTime}/>} />          
        </Switch>
      </Router>
      <div>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {componentAndTimes.map((componentAndTime, idx) => (
              <tr key={idx}>
                <th>{componentAndTime.component}</th>
                <th>{componentAndTime.time}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
