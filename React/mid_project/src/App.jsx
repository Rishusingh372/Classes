import { useState } from 'react'
import Page1 from './component/Page1'

function App() {
  const [initial,updateinittal]=useState(0);

  return (
    <>
          <h1>this is main page</h1>
          <h1>value:{initial}</h1>
          <input type="text" onChange={()=>updateinittal(initial+1)} /> <br />
          <Page1/>
    </>
  )
}

export default App
