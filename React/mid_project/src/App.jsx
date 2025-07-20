import { useState } from 'react'
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';

function App() {
  const [initial,updateinittal]=useState(0);

  return (
    <>
          <h1>this is main page</h1>
          <Page3/>
          <Page2/>
          {/* <h1>value:{initial}</h1> */}
          {/* <input type="text" onChange={()=>updateinittal(initial+1)} /> <br /> */}
          <Page1/>
          
    </>
  )
}

export default App
