import React from 'react'
import { useState } from 'react'


const Page2 = () => {
    const[formdata ,updateformdata]=useState({
        name:"",
        email:"",
        Number:""
    })

    const handlechange=(e)=>{
        const {name,value}=e.target;
        updateformdata((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }
  return (
    <>
    <h1>This is useState , useEffect , Json Server Class</h1>
    <form action="">
        <input type="text" placeholder='Enter Your name' name='name' value={formdata.name} onChange={handlechange}/>
        <br /><br />
        <input type="text" placeholder='Enter your Email' name='email' value={formdata.Email} onChange={handlechange}/>
        <br /><br />
        <input type="text" placeholder='Enter your Number' name='Number' value={formdata.Number} onChange={handlechange}/>

    </form>
    <h3>your name:-{formdata.name}</h3>
    <h3>your Email:-{formdata.Email}</h3>
    <h3>your Number:-{formdata.Number}</h3>

     
    </>
  )
}

export default Page2