import { useState } from 'react'
import Nav from './component/Nav';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Admin from './component/Admin';
import TaskfackApi from './component/TaskfackApi';



function App() {
  const [initial,updateinittal]=useState(0);

  return (
    <>
         <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/task" element={<TaskfackApi />} />
          </Routes>
         </Router>
          
    </>
  )
}

export default App
