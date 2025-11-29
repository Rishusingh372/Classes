import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>

    
    </>
  )
}

export default App
