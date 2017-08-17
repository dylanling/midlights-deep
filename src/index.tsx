import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Battle from './Game';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Battle />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
