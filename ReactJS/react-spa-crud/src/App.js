import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./Components/LayOut";
import EditUser from "./Components/EditUser";
import DeleteUser from "./Components/DeleteUser";
import CreateUser from "./Components/CreateUser";
import User from "./Components/User";
function App() {
  return (
    <div className="App">
      {/* //  {/* <Users/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
          <Route index element={<User />}/>
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
