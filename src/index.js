import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
