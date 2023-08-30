import logo from './logo.svg';
import './App.css';
import OurComponent from './components/OurComponent';
import ShowFullName from './components/ShowFullName';
import Contador from './components/Contador';
function App (argumentos) {
  /*
    cuerpo de funcion: la logica del componente
  */
  // retorno JSX (bastante parecido a HTML): representacion - declarativa - de la UI
  /* return (
    createElement('div', argumentos, [
      createElement('header', argumentos, [ ... ])
    ])
  ) */
  console.log('cuerpo del App');
  return (
    <div className="App">
      <Contador valorInicial={10} />
      <Contador valorInicial={0} />
    </div>
  );
}

export default App;
