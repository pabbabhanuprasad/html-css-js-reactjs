import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar';
import {Routes,Route,Outlet,Link,BrowserRouter}from "react-router-dom";
import Dropdown from './Components/Dropdown';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Link1 from './Components/Link1';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/link1" element={<Link1/>}/>
        <Route path="/dropdown" element={<Dropdown/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
