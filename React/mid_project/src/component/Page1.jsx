import React from 'react'
import { useState } from 'react'
import '../mycss/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const page1 = () => {
  let navigate= useNavigate();
  let baseurl="http://localhost:4000/user";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handlechange = (e) => {
    const { name, value } = e.target; 
     setFormData((prev)=>(
      {...prev,
        [name]:value
      }

     )) 
  }

  const singupdata=async(e)=>{
    e.preventDefault();

    try {
      await axios.post(baseurl,formData)
      navigate('/dashboard',{state:formData})

      
    } catch (error) {
      alert("Sorry Url is not working")
    }
  }

  return (
   <>
     <form action="" onSubmit={singupdata} >
      <fieldset>
        <legend>MyForm</legend>
        <input type="text" placeholder='Name'name='name' value={formData.name} onChange={handlechange}/> <br /> <br />
        <input type="text" placeholder='Email' name='email' value={formData.email} onChange={handlechange} /> <br /> <br />
        <input type="text" placeholder='Mobile' name='mobile' value={formData.mobile} onChange={handlechange} /> <br /> <br />
        <input type="text" placeholder='Password' name='password'  value={formData.password} onChange={handlechange} /> <br /> <br />
        <button>Submit</button>
        <h1>Name:{formData.name}</h1>
        <h2>Email:{formData.email}</h2>
        <h3>Mobile:{formData.mobile}</h3>
        <h3>Password:{formData.password}</h3>

      </fieldset>
     </form>
   </>
  )
}

export default page1