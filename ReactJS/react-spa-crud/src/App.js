import "./App.css";
import Users from "./Components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./Components/LayOut";
import EditUser from "./Components/EditUser";
import DeleteUser from "./Components/DeleteUser";
import CreateUser from "./Components/CreateUser";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Users />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
