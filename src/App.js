import logo from './logo.svg';
import './App.css';
import MiComponente from './micomponente';
import SecondComponent from './SecondComponent';
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {
  const ficha = {
    altura: "178cm",
    peso: "170lb"
  }
  
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
          <EventosComponente></EventosComponente>
          <hr/>
          <TercerComponente name = "Juan" lastname = "Quiroz" ficha = {ficha}></TercerComponente>
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
