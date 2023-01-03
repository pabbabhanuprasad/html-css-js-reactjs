import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import Home from './Components/Home';
import Sweets from './Components/Sweets';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Sweets/>
    </div>
  );
}

export default App;
