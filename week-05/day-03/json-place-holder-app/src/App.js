import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JsonPlaceHolder from './Components/JsonPlaceHolder';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <JsonPlaceHolder />
    </Provider>
  );
}

export default App;
