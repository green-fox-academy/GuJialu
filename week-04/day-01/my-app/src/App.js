import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './ratelist';
import PropertyType from './PropertyType';
import HotelList from './HotelList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hotel Booking</h1>
      </header>
      <main>
        <div className="FilterBar">
          <StarRating />
          <PropertyType />
        </div>
        <div className="HotelList">
          <HotelList />
        </div>
      </main>
    </div>
  );
}

export default App;
