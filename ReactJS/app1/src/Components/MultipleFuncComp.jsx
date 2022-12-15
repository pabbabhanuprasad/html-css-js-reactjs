//while we are calling component with component name the that perticular comp is appeared.
export function ParentComponent(){
    return <h2>Hello from Parent Component</h2>
}

export default function ChildComponent(){
    return <h2>Hello from Child Component</h2>
}
//when we are not mentioning comp name MainFunctionComponent is appeared when we import it
export  function Mainfunction(){
    return <h2>Hello from MainFunction Component</h2>
}