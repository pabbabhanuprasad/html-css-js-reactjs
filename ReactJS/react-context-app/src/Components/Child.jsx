import React from 'react'
import Child1 from './Child1';

const Child = () => {
  return (
    <div>
      <h2>Hello from Child Component!</h2>
        <hr/>
        <Child1/>
        {/* <Child1 allUsers={allUsers}/> */}
    </div>
  )
}

export default Child;