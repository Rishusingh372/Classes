import React from 'react'
import { useState } from 'react'
import '../mycss/style.css'

const page1 = () => {
  const[name,uname]=useState(null);
  const[email,uemail]=useState(null);
  const[mobile,umobile]=useState(null);
  const[password,upassword]=useState(null);

  return (
   <>
     <form action="">
      <fieldset>
        <legend>MyForm</legend>
        <input type="text" placeholder='Name' onChange={(e)=>uname(e.target.value)}/> <br /> <br />
        <input type="text" placeholder='Email' onChange={(e)=>uemail(e.target.value)} /> <br /> <br />
        <input type="text" placeholder='Mobile' onChange={(e)=>umobile(e.target.value)} /> <br /> <br />
        <input type="text" placeholder='Password'  onChange={(e)=>upassword(e.target.value)} /> <br /> <br />
        <button>Submit</button>
        <h1>Name:{name}</h1>
        <h2>Email:{email}</h2>
        <h3>Mobile:{mobile}</h3>
        <h3>Password:{password}</h3>

      </fieldset>
     </form>
   </>
  )
}

export default page1