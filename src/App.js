import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Home/inicio';
import Categorias from './Jogo/categorias';
import Perguntas from "./Jogo/perguntas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
        </header>
        <Perguntas/>
      </div>
    );
  }
}

export default App;
