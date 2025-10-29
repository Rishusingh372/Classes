import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Insert = () => {
  const [input,setInput]=useState({});

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInput({...input,[name]:value});
    // console.log(input);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api= "http://localhost:5000/empoyees/save";
    let response= await axios.post(api,input);
    console.log(response.data);
  }

  return (
    <>
    <form>
       Name <input type="text" id="fname" name="fname" onChange={handleInput()}/><br />
       Email<input type="email" id="email" name="email" /><br />
       Number<input type="number" id="number" name="number" /><br />
        <input type="submit" value="Submit" onClick={handleSubmit()} />
    </form>

    </>
 
   
  )
}

export default Insert