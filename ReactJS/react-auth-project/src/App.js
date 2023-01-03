import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Components/Auth';
import { Login } from './Components/Login';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
     <AuthProvider>
      <h2>Hello from AuthProvider</h2>
      <Login/>
     </AuthProvider>
    </div>
  );
}

export default App;
