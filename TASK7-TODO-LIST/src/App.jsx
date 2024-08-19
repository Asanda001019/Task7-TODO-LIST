import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/landingPage'
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
<BrowserRouter>
   <Routes>
    <Route path="/" elememnt={<LandingPage/>}/>
    <Route path="login" elememnt={<Login/>}/>
    <Route path="register" elememnt={<Register />}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
