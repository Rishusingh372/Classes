import React from 'react'
import { useState } from 'react'

const page3 = () => {
    let baseurl="http://localhost:4000/user";

   
const getalluser=async()=>{
    try{
        let res=await fetch(baseurl);
        let data=await res.json();
        console.log(data);
        let userDiv=document.getElementById("user");
        userDiv.innerHTML=data.map((e)=>{
            return `
            <h2>id:${e.id}</h2>
            <h2>name:${e.name}</h2>
            <p>email: ${e.email}</p>
            <p>mobile:${e.mobile}</p>
            <p>password:${e.password}</p>

            `
        }) // Clear previous content
    }catch(err){
        console.log(err);
    }
}
// Hide all user
const hidealluser=()=>{
    let userDiv=document.getElementById("user");
    userDiv.innerHTML=""; 
}


// Add user in json server  


  return (
   <>
   <h1>Curd with json server api</h1>
 
    <div id="user"></div>
    <div id="btn">
        <button onClick={getalluser}>Getalldata</button> <br/><br/>
        <button onClick={hidealluser}>Hidealluser</button>
    </div>

   <form action="">
    <fieldset>
        <legend>Add New User In json Server</legend>
        <input type="text"  placeholder='enter id' id='id'/> <br />
        <input type="text" placeholder='enter your name' id='name' /><br />
        <input type="text" placeholder='Enter your email' id='email' /><br />
        <input type="text" placeholder='Enter number' id='mobile' /><br />
        
    </fieldset>
   </form>


   </>
  )
}

export default page3