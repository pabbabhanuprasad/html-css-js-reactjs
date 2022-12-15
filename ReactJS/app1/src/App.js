import TenKClassComponents from "./Components/TenKClassComponent";
import TenKcoder from "./Components/TenKcoder";
import TenKfunctionalComponents from "./Components/TenKfunctionalComponent";
import MultipleComponent from "./Components/MultipleFuncComp";
import { ParentComponent } from "./Components/MultipleFuncComp";
function App() {
  return (
    <div className="App">
      {/* <TenKClassComponents/>
      <TenKcoder/>
      <TenKfunctionalComponents/> */}
      <MultipleComponent/>
    </div>
  );
}

export default App;
