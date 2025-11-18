import {BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Display from "./pages/Display";
import "./css/style.css"

const App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} /> 
          <Route path="registration" element={<Registration/>}/>   
          <Route path="login" element={<Login/>}/>
           <Route path="display2" element={<Display/>}/>
          </Route>
         </Routes>

         {/* <Routes>
          <Route path="dashboard" element={<Dashboard/>}>
          </Route>
         </Routes> */}
       </BrowserRouter>
    </>
  )
}
export default App;