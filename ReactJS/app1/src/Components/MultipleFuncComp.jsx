//while we are calling component with component name the that perticular comp is appeared.
export function ParentComponent() {
    return <h2>Hello from Parent Component</h2>
}

export function ChildComponent() {
    return <h2>Hello from Child Component</h2>
}
//when we are not mentioning comp name MainFunctionComponent is appeared when we import it
export default function Mainfunction() {
    return <h2>Hello from MainFunction Component</h2>
}

//A component can able written only one HTML elememnt.
//<h2>Hello from MainFunction Component</h2><ChildComponent/> it is not possible.
// Insteed of doing like above to display ChildComponent along with MainFunction
//export{
//     ParentComponent,ChildComponent
// }                   
     //   or
//in default function we are placing div tag.
{/* <div>
    <h2>Hello from MainFunctionComponent</h2>
    <ChildComponent/>
</div> 
//to do this ParentComponent and ChildComponents should not export*/}

//in App.js      <MainFunction/>