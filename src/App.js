import "./App.css";
import Contador from "./Componentes/Contador";

import Mensajes from "./Componentes/Mensajes";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi Proyecto React JS</h1>
          <br />

          <div className="row">
            <div className="col-4"><Mensajes titulo='Mensaje Nro. 1' color='green'/></div>
            <div className="col-4"><Mensajes titulo='Mensaje Nro. 2' color='orangered'/></div>
            <div className="col-4"><Mensajes titulo='Mensaje Nro. 3' color='blueviolet'/></div>
          </div>
          <br/>
            
            <Contador id="1" color="crimson"/>
            <Contador id="2" color="black"/>          
        </div>
      </div>
    </div>
  );
}

export default App;