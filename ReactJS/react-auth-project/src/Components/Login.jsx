import React from 'react'
import { useAuth } from './Auth'
export const Login = () => {
    const {user} = useAuth()
    console.log(user)
  return (
    <div>
        <h2>User Name:{user.fname} </h2>
    </div>
  )
}
export default Login;