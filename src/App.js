import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  var p1;
  var p2;

  var winsP1 = 0;
  var winsP2 = 0;
  var winsCPU = 0;

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

    //Esta parte se usará para calcular toda la logistica del piedra, papel, tijeras, larto y spock.
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

    var jugada = resultado[cpu][p1];

    if(resultado[cpu][p1] === 1){
      winsP1++
    }
    if(resultado[cpu][p1] === 2){
      winsCPU++
    }

    console.log("CPU: " + elecciones[cpu]);
    console.log("P1: " + elecciones[p1]);
    console.log(jugada)
    console.log(resultadoTexto[jugada])
    
    return (
      <div>hola mundo</div>
    )

  };

  function jugarEntreJugadores(){
    var resultadoTexto = ["Empate", "¡Ganó el Jugador 1!", "¡Ganó el jugador 2!"];
    var elecciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

    //Esta parte se usará para calcular toda la logistica del piedra, papel, tijeras, larto y spock.
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

    var jugada = resultado[p2][p1];
    
    if(resultado[p2][p1] === 1){
      winsP1++
    }
    if(resultado[p2][p1] === 2){
      winsP2++
    }

    console.log("P1: " + elecciones[p1]);
    console.log("P2: " + elecciones[p2]);
    console.log(jugada)
    console.log(resultadoTexto[jugada])

    
    return (
      <div>hola mundo</div>
    )

  };

  function mostrarPuntaje(){
    console.log("Puntajes")
    console.log("P1: " + winsP1 + " victorias");
    console.log("P2: " + winsP2 + " victorias");
    console.log("CPU: " + winsCPU + " victorias");
  }


  return (
    <div className="App">
      <div>Jugador 1</div>
      <button onClick={() => p1 = 0}>Piedra</button>
      <button onClick={() => p1 = 1}>Papel</button>
      <button onClick={() => p1 = 2}>Tijeras</button>
      <button onClick={() => p1 = 3}>Lagarto</button>
      <button onClick={() => p1 = 4}>Spock</button>
        <div>
          <p> <button onClick={() => jugar()}> Jugador 1 VS CPU</button> </p>
          <p> <button onClick={() => jugarEntreJugadores()}> Jugador 1 VS Jugador 2</button> </p>
        </div>
          <div>
          <div>Jugador 2</div>
            <button onClick={() => p2 = 0}>Piedra</button>
            <button onClick={() => p2 = 1}>Papel</button>
            <button onClick={() => p2 = 2}>Tijeras</button>
            <button onClick={() => p2 = 3}>Lagarto</button>
            <button onClick={() => p2 = 4}>Spock</button>
          </div>
          <p> <button onClick={() => mostrarPuntaje()}> Puntaje </button></p>
          <div> 
          <h2>Reglas de juego</h2>
          <img src="https://www.lacasadeel.net/wp-content/uploads/2012/03/piedra-papel-tijera-lagarto-spock.jpg" alt="Trulli" width="500" height="333"></img>

          </div>
    </div>
      
  )
}

export default App;
