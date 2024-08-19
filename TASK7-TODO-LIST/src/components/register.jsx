import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function Register  (){

const [UserName, setUserName] =useState("");
const [PassWord, setPassWord] =useState("");

const handleSubmit =(e)=>{e.preventDefault()}

console.log(UserName, PassWord)

  return (
    <>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>

        <h1 className='heading'>Please Register</h1>

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

        <button type='submit'>Register</button>

        <p>Already have an account? <Link to="/login">Login here</Link></p>

        </form>
      </div>

    </>
  )
}

export default Register