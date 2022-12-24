import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./Components/LayOut";
import EditUser from "./Components/EditUser";
import DeleteUser from "./Components/DeleteUser";
import CreateUser from "./Components/CreateUser";
import Users from "./Components/Users"

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
          <Route index element={<Users />}/>
            <Route path="/edit" element={<EditUser />} />
            <Route path="/delete" element={<DeleteUser />} />
            <Route path="/create" element={<CreateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
