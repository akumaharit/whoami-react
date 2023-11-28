import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Access from './Access';
import Game from './Game';
import Footer from './Footer';
import Header from './header';
import Input from './Input';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <br/>
    <App />
    <br/>
    <Game />
    <br/>
    <Access name="test" />
    <br/>
    
    <Footer/>
  </React.StrictMode>
);
