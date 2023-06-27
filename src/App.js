import './App.css';
import AgeCalculator from './componets/AgeCalculator';
import { Cover } from './componets/Cover';
import Footer from './componets/Footer';
import { NavBar } from './componets/NavBar';
import PercentageCalculator from './componets/PercentageCalculator';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <AgeCalculator />
      <PercentageCalculator />
      <Footer />
    </div>
  );
}

export default App;
