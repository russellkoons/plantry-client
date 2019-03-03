import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAppleAlt, faBars, faChevronDown, faBreadSlice, faCarrot, faEgg} from '@fortawesome/free-solid-svg-icons';
import App from './components/app';
import './index.css';
import store from './store';

library.add(faAppleAlt, faBars, faChevronDown, faBreadSlice, faCarrot, faEgg);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);
