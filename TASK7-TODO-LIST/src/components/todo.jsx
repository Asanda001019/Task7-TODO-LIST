import React from 'react'
import "./todo.css"
import { useNavigate } from 'react-router-dom'

function Todo() {
  const landingPage=useNavigate();
  return (
    <>
       <div className='top-navbar'>
        <button onClick={()=>landingPage("/")}>Home</button>
      </div>
      <h1>To Do App</h1>






    </>
  )
}

export default Todo