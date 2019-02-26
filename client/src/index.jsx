import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

module.hot.accept();
