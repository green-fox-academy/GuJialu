import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Messages from './Components/Messages';
import MessageSendPanel from './Components/MessageSendPanel';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Messages />
      <MessageSendPanel />
    </Provider>
  );
}

export default App;
