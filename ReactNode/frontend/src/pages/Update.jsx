import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
const Update = () => {

  const {id} = useParams();

  const [upData , setUpdata]= useState({
        id:  "",
        name: "",
        location: "",
        inrollsub: ""
  })

  const handlchange = (e)=>{
    const {name, value} = e.target;
    setUpdata((prev)=>({
      ...prev, [name]:value,
    }))
  }
  
  useEffect(()=>{
    fatchdata();
  },[])


   const fatchdata =  async()=>{
    try {
       const api = `${import.meta.env.VITE_API_URL}/employees/editdata/${id}`;
        const response = await axios.get(api)
        console.log(response.data)
          setUpdata(response.data);
    } catch (err) {
        console.log("error while fetching data" , err);
    }
        console.log(upData);
   }

   const handlsubmit = async (e)=>{
    e.preventDefault();
    const api = `${import.meta.env.VITE_API_URL}/employees/update/${id}`;
    try {
        const response = await axios.put(api , upData)
        alert("data updated successfully")
        setUpdata(response.data);
    } catch (err) {
        console.log("Error updating data:", err);
        alert("Error updating data");
    }
    }
    
    

  return (
    <>
        <h1>This is Update Component</h1>
        <form action="">
               Employee id : <input type="text" name='id' value={upData.id}  onChange={handlchange}  /> <br />
               Employee name : <input type="text" name='name' value={upData.name} onChange={handlchange}  /> <br />
               Employee location : <input type="text" name='location' value={upData.location}  onChange={handlchange}  /> <br />
               Employee inrollSub : <input type="text" name='inrollsub' value={upData.inrollsub} onChange={handlchange}  /> <br />
                <button onClick={handlsubmit} >Save!!</button>
            </form>
    </>
  )
}

export default Update