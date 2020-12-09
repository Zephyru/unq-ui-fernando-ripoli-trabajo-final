import './App.css';

function App() {

  var p1;
  var p2;

  var winsP1 = 0;
  var winsP2 = 0;
  var winsCPU = 0;


  function jugar(){
    var resultadoTexto = ["Empate", "¡Ganaste! ╰(*°▽°*)╯", "Pierdes (╯°□°）╯︵ ┻━┻"];
    var elecciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    var cpu = 0 + Math.floor((5 - 0) * Math.random());

    //Esta parte se usará para calcular toda la logistica del piedra, papel, tijeras, larto y spock.
    // 0 => Empate
    // 1 => ¡Ganaste!
    // 2 => Pierdes (╯°□°）╯︵ ┻━┻
    // La primera fila y columna sería piedra, dando asi un 0 entre ellos en la primer "celda". Sigue la lista de filas y columnas segun estan
    // en la variable "elecciones", dando asi los diferentes resultados de enfrentarlos entre si.
    var resultado = [      //Pi,Pa,Ti,La,Sp
          /*Piedra*/          [0,1,2,2,1],
          /*Papel*/           [2,0,1,1,2],
          /*Tijeras*/         [1,2,0,2,1],
          /*Lagarto*/         [1,2,1,0,2],
          /*Spock*/           [2,1,2,1,0]
    ];

    var jugada = resultado[cpu][p1];

    if(resultado[cpu][p1] === 1){
      winsP1++
    }
    if(resultado[cpu][p1] === 2){
      winsCPU++
    }
    console.log("[ Jugador VS CPU ]")
    console.log("Jugador 1: " + elecciones[p1]);
    console.log("CPU: " + elecciones[cpu]);
    console.log(resultadoTexto[jugada])
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
                [1,2,1,0,2],
                [2,1,2,1,0]
    ];

    var jugada = resultado[p2][p1];
    
    if(resultado[p2][p1] === 1){
      winsP1++
    }
    if(resultado[p2][p1] === 2){
      winsP2++
    }

    console.log("[ Jugador 1 VS Jugador 2 ]")
    console.log("Jugador 1: " + elecciones[p1]);
    console.log("Jugador 2: " + elecciones[p2]);
    console.log(resultadoTexto[jugada])

    
    return (
      <div>hola mundo</div>
    )

  };

  function mostrarPuntaje(){
    console.log("[ Puntajes ]")
    console.log("Jugador 1: " + winsP1 + " victorias");
    console.log("Jugador 2: " + winsP2 + " victorias");
    console.log("CPU: " + winsCPU + " victorias");
  }


  return (
    <div className="App">
      <div>Para ver resultados hacer: click derecho, "inspeccionar elemento" y "consola"</div>
      <div><h2>Jugador 1</h2></div>
      <button onClick={() => p1 = 0}>Piedra</button>
      <button onClick={() => p1 = 1}>Papel</button>
      <button onClick={() => p1 = 2}>Tijeras</button>
      <button onClick={() => p1 = 3}>Lagarto</button>
      <button onClick={() => p1 = 4}>Spock</button>
        <div>
          <p> <button onClick={() => jugar()}> Jugador 1 VS CPU</button> </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61qvBV2mQx7OFcRcj_NmERN0hMLgGrNOLnQ&usqp=CAU" alt="Trulli" width="100" height="100"></img>
          <p> <button onClick={() => jugarEntreJugadores()}> Jugador 1 VS Jugador 2</button> </p>
        </div>
          <div>
          <div><h2>Jugador 2</h2></div>
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
