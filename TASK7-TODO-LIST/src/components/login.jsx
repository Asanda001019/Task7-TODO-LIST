import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'

function Login (){

const [UserName, setUserName] =useState("");
const [PassWord, setPassWord] =useState("");
const navigate = useNavigate;

const handleSubmit =(e)=>{e.preventDefault()}

console.log(UserName, PassWord)

  return (
    <>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>

        <h1 className='heading'>Please Login</h1>

        <label>
          UserName: 
          <input type='text'
          value={UserName} onChange={(e)=>setUserName(e.target.value)}/>
        </label>

        <label>
          PassWord: 
          <input type='text'
          value={PassWord} onChange={(e)=>setPassWord(e.target.value)}/>
        </label>

        <button type='submit'>Login</button>

        <p>Don't have an account? <Link to="/register">Register here</Link></p>

        </form>
      </div>

    </>
  )
}

export default Login