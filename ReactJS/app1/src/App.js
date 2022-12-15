import TenKClassComponents from "./Components/TenKClassComponent";
import TenKcoder from "./Components/TenKcoder";
import TenKfunctionalComponents from "./Components/TenKfunctionalComponent";
//default component can be imported by any name
import MultipleComponent from "./Components/MultipleFuncComp";
//by using destructuring we importing parent component.
import { ParentComponent,ChildComponent } from "./Components/MultipleFuncComp";


import  MainClassComponent ,{ChildComponent1, ChildComponent2} from "./Components/MultipleClassComponent"; 
function App() {
  return (
    <div className="App">
      <MainClassComponent/>
      <ChildComponent1/>
      <ChildComponent2/>
      {/* <TenKClassComponents/>
      <TenKcoder/>
      <TenKfunctionalComponents/> */}
      {/* // <MultipleComponent/>
      // <ParentComponent/>
      // <ChildComponent/> */}
    </div>
  );
}

export default App;
