import React from 'react';
import EventRegistration from './Components/EventRegistration';
import UserRegistration from './Components/UserRegistration';
import PizzaPicker from './Components/PizzaPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Event registration application</h1>
      <EventRegistration/>
      <UserRegistration/>
      <PizzaPicker/>
    </div>
  );
}

export default App;
