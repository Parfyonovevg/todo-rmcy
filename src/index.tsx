import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContextProvider from './store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
