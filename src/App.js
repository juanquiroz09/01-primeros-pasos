import logo from './logo.svg';
import './App.css';
import MiComponente from './micomponente';
import SecondComponent from './SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react
        </p>
        {/*Cargar mi componenete */}
        <div className='componentes'>
          <hr/>
          <SecondComponent></SecondComponent>
           <hr/>
        <MiComponente></MiComponente>
        </div>

      </header>
      
      
    </div>
  );
}

export default App;
