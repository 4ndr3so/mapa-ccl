import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/Mapa';
import imglogoUbica from "./assets/img/ubica_logo_naranja.png"

function App() {
  return (
    <div className="App">
      <div className="texto1">
      <img src={imglogoUbica} alt="Logo ubicación" />
        <p>EVALUADORES DE</p>
        <p>CERTIFICACIÓN</p> 
        <p> DE COMPETENCIAS</p> 
        <p>LABORALES</p>
        </div>
      <div className="texto2">
        <p>Ubica el departamento de tu
preferencia para conocer los
enlaces disponibles y sus
datos de contacto.</p>
      </div>
    <Mapa></Mapa>
      
    </div>
  );
}

export default App;
