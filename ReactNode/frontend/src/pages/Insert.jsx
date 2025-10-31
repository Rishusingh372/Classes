import React from 'react'
import { useState } from 'react'
import axios from 'axios' 

const Insert = () => {
    const [data , setdata] = useState({
        id : "",
        name : "",
        location : "",
        sub : ""
    })
    const handlechange = (e)=>{
        
        const {name ,value} = e.target;
        setdata((prev)=>({
            ...prev,[name]:value
        }))
    }
   
    const handlesubmit = async (e)=>{
          e.preventDefault();
        const api = "http://localhost:5000/employees/home"
        const response = await axios.post(api , data)
        console.log(response)
        console.log(data)
    }


  return (
   <>
    <h1>This is Insert Component</h1>
    <h2>form for insert data</h2>
    <form action="">
        empoyee id : <input type="text" name='id' value={data.id} onChange={handlechange}  /> <br />
        empoyee name : <input type="text" name='name' value={data.name} onChange={handlechange}  /> <br />
        empoyee location : <input type="text" name='location' value={data.location} onChange={handlechange} /> <br />
        empoyee inrollSub : <input type="text" name='sub' value={data.sub} onChange={handlechange} /> <br />
        <button onClick={handlesubmit}>Save!!</button>
    </form>
   </>
  )
}

export default Insert