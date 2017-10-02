import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
