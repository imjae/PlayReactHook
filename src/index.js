import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UseState from './UseState';
import UseInput from './UseInput';
import UseTab from './UseTab';
import UseTitle from './UseTitle';
import UseClick from './UseClick';

ReactDOM.render(
  <React.StrictMode>
    <UseClick />
  </React.StrictMode>,
  document.getElementById('root')
);