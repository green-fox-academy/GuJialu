import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './redux/store';
import Increaser from './Components/Increaser';
import Decreaser from './Components/Decreaser';
import Setter from './Components/Setter';
import Resetter from './Components/Resetter';
import Tags from './Components/Tags';
import AddTag from './Components/AddTag';
import RemoveTag from './Components/RemoveTag';
import RemoveAllTags from './Components/RemoveAllTags';
import ComplexCounter from './Components/ComplexCounter';

function App() {
  return (
    <Provider store={store}>
      <div className='Count'>
        <Increaser />
        <Decreaser />
        <Setter />
        <Resetter />
      </div>

      <div className='Tag'>
        <Tags />
        <AddTag />
        <ComplexCounter />
        <RemoveTag />
        <RemoveAllTags />
      </div>

    </Provider>
  );
}

export default App;
