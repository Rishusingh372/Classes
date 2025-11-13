import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import '../css/style.css';



const Registration = () => {
    const [input,setInput]= useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value =e.target.value;

        setInput(values=>({...values, [name]:value}));
    }

       const handleSubmit=async()=>{
      let api="http://localhost:8000/employees/registration";
      const response = await axios.post(api, input);
      console.log(response);
      alert(response.data);
      let navigate = window.location.replace("/login");
      
   }
  return (
    <div className="registration-container">
      <h1> Registration form</h1>
      <form className="registration-form">
        <label>
          Enter User name: <input type="text" name="username" onChange={handleInput} />
        </label>
        <br/>
        <label>
          Enter Email: <input type="email" name="email" onChange={handleInput} />
        </label>
        <br/>
        <label>
          Enter Password: <input type="password" name="password" onChange={handleInput} />
        </label>
        <br/>
        <button type="button" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Registration