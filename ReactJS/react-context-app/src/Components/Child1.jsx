import React from 'react'
import User from './User';
import { MyContextConsumer } from './MyContext';
const Child1 = ({}) => {
  return (
    <div>
        <MyContextConsumer>
        {(userInfo)=>{
          return (
            <ul>
              {userInfo.map((user,i) => (<li key={i}>{user}</li>))}
            </ul>
          )
        }}
      </MyContextConsumer>
      <User/>
    </div>
  )
}

export default Child1;