import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Header';
import Ux from './Ux';
import Animacion from './Animacion';
import Fotografia from './Fotografia';
import Modelado from './Modelado';
import Otros from './Otros';
import Footer from './Footer';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <BrowserRouter>
        <Route exact path="/" component={ Ux }/>
        <Route exact path="/" component={ Animacion }/>
        <Route exact path="/" component={ Fotografia }/>
        <Route exact path="/" component={ Modelado }/>
        <Route exact path="/" component={ Otros }/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
