import './App.css';
import CalculadorDeEdad from './componets/CalculadorDeEdad';
import Footer from './componets/Footer';
import NavBar from './componets/NavBar';
import CalculadorDePorcentaje from './componets/CalculadorDePorcentaje';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CalculadorDeEdad />
      <CalculadorDePorcentaje />
      <Footer />
    </div>
  );
}

export default App;
