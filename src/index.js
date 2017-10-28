import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

var foo = WebFont.load({
  google: {
    families: ['heebo', 'roboto']
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
