import './App.css';
import Boton from './Componentes/Boton';
import Tabla from './Componentes/Tabla/Tabla';
import Opciones from './Componentes/Opciones/opciones'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Opciones></Opciones>
      <Boton></Boton>
      <Tabla></Tabla>
      </header>
    </div>
  );
}

export default App;
