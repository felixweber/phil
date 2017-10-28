import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import store from './store';

WebFont.load({
  google: {
    families: ['lato', 'lato-bold']
  }
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));
    registerServiceWorker();
