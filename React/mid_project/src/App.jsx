import { useState } from 'react'
import Nav from './component/Nav';
import SingIn from './component/SingIn';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Admin from './component/Admin';
import Login from './component/Login';
import TaskfackApi from './component/TaskfackApi';



function App() {
  const [initial,updateinittal]=useState(0);

  return (
    <>
         <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/task" element={<TaskfackApi />} />
            <Route path="/login" element={<Login />} />
          </Routes>
         </Router>
          
    </>
  )
}

export default App
