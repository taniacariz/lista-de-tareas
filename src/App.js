import "./App.css";
import logo from "./imagenes/tanimikyu.jpg";
import Tarea from "./componentes/Tarea.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedorGeneral">
        <div className="contenedorLogo">
          <img src={logo} className="logo" alt="logo página" />
        </div>
        <div className="contenedorListaPrincipal">
          <h1>Mis Tareas</h1>
          <Tarea texto="Elemento de prueba" />
        </div>
      </div>
    </div>
  );
}

export default App;
