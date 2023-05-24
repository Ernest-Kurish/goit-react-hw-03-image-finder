// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from './components/App';
// import './index.css';

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
