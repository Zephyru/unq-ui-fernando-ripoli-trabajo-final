import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var p1;
  var p2;

  function setJugada(jugador, jugada){
    if(jugador === 0){p1=jugada}
    else{p2=jugada};
    console.log(p1);
    console.log(p2);
  }

  function jugar(){
    var resultadoTexto = ["Empate", "¡Ganaste!", "Pierdes (╯°□°）╯︵ ┻━┻"];
    var elecciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    var cpu = 0 + Math.floor((5 - 0) * Math.random());

    //Esta parte calculará toda la logistica del piedra, papel, tijeras, larto y spock.
    // 0 => Empate
    // 1 => ¡Ganaste!
    // 2 => Pierdes (╯°□°）╯︵ ┻━┻
    var resultado = [
              [0,1,2,2,1],
              [2,0,1,1,2],
              [1,2,0,2,1],
              [2,1,2,1,0],
              [2,1,2,1,0]
    ];

    console.log("CPU: " + cpu);
    console.log("P1: " + p1);
    var jugada = resultado[cpu][p1];

    console.log(jugada)

  };





  return (
    <div className="App">
      <button onClick={() => p1 = 0}>Piedra</button>
      <button onClick={() => p1 = 1}>Papel</button>
      <button onClick={() => p1 = 2}>Tijeras</button>
      <button onClick={() => p1 = 3}>Lagarto</button>
      <button onClick={() => p1 = 4}>Spock</button>
        <div>
          <p> <button onClick={() => jugar()}> Jugar contra CPU</button> </p>
        </div>
          <div>
            <button>Piedra</button>
            <button>Papel</button>
            <button>Tijeras</button>
            <button>Lagarto</button>
            <button>Spock</button>
          </div>
    </div>
      
  )
}

export default App;
