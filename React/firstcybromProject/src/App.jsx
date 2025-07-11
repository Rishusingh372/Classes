import { useState } from 'react'

function App() {
  const myfunc=(e)=>{
    e.target.style.color = "blue";
    e.target.style.backgroundColor = "yellow";
  }

  // let h = document.getElementById('h1');
  // h.innerHTML="change by javascript";

  let arr=[1,2,3,4,5,6,7,8,9,10];
 

  return (
    <>
      <h1 id='h1' onClick={myfunc} style={{color:"red",backgroundColor:"cyan",cursor:"pointer"}}>Welcome to the First Cybrom Project</h1>
      <h2>hii I am Rishu</h2>
      <h3>Here is a list of numbers:</h3>
      {
        arr.map((i)=>(
          <h3>{i}</h3>
        ))
      }

    </>
  )
}

export default App
