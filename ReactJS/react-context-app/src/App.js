import "./App.css";
import { Main } from "./Components/Main";
import React, { useState } from "react";
import { MyContextProvider } from "./Components/MyContext";

function App() {
  const [users, setUsers] = useState(["Bhanu", "Raghu", "Mohan", "Lokesh","BG"]);
  return (
    <div className="App">
      <MyContextProvider value={users}>
      <Main/>
      </MyContextProvider>
      
    </div>
  );
}
export default App;
