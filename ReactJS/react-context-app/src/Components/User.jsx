import React from "react";
import { MyContextConsumer } from "./MyContext";

const User = () => {
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
    </div>
  );
};

export default User;
