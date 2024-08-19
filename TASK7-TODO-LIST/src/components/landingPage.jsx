import React from 'react'
import "./landingPage.css"

function LandingPage(){
  return (
    <>
    <div className='landing-page'>
      <div className='top-navbar'>
        <button>Login</button>
        <button>SignUp</button>
        <button>Todo</button>
      </div>
      <div className='app-info'>
        <h1>TodoMaster</h1>
        <p>Master your tasks, master your life</p>
      </div>
    </div>
    </>
  )
}

export default LandingPage