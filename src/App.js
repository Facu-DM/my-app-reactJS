import "./App.css";

import Mensajes from "./Componentes/Mensajes";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi Proyecto React JS</h1>
          <br />

          <Mensajes titulo='Mensaje Nro. 1' color='green'/>
          <Mensajes titulo='Mensaje Nro. 2' color='orangeded'/>
          <Mensajes titulo='Mensaje Nro. 3' color='blueviolet'/>
        </div>
      </div>
    </div>
  );
}

export default App;