import React from 'react'
import Child from './Child';

const Parent = () => {
  return (
    <div>
        <h2>Hello from Parent Component</h2>
        <hr/>
       <Child/>
        {/* <Child allUsers={allUsers}/> */}
    </div>
  )
}
export default Parent;