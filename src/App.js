import logo from './logo.svg';
import './App.css';
import Saludo from './components/puros/saludo'
import Tareas from './components/container/TareaComponent';
import Contacto from './components/container/ContactoComponent';
import ClockClaseComponent from './components/container/ClockClaseComponent';
import ClockFunctionComponent from './components/container/ClockFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Saludo name="Prueba 1"></Saludo>*/}
        {/*<Tareas></Tareas>*/}
        {/*<Contacto></Contacto>*/}
        {/*<ClockClaseComponent />*/}
        <ClockFunctionComponent />
      </header>
    </div>
  );
}

export default App;
