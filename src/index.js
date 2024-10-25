import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18next/i18next"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <App />
</Router>
);
