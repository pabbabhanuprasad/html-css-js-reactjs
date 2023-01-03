
import React from 'react'
import Parent from './Parent';

export const Main = () => {
  return (
    <div>
        <h2>Hello from Main Component!</h2>
        <hr/>
        <Parent/>
        {/* <Parent allUsers={allUsers}/> */}
    </div>
  )
}
export default Main;
