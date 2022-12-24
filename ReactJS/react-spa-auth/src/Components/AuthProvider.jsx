import React from 'react'
import {useState} from 'react'

 const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
  return (
    <div>
        {children}
    </div>
  )
}
export default AuthProvider;

// import React from 'react'
//  const AuthProvider = (props) => {
//     console.log(props);
//   return (
//     <div>
//         {props.children}
//     </div>
//   )
// }
// export default AuthProvider
