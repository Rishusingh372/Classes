import React, { use } from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../mycss/style.css'


const Admin = () => {
    let API_URl = "http://localhost:4001/user";
    let [initialdata, updatedata] = useState([]);
      const fetchData = async () => {
            try {
                const response = await axios.get(API_URl);
                updatedata(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    useEffect(() => {
      
        fetchData();
    }, []);
    // console.log(initialdata);
    // Delete function
    const userDelete =async(id)=>{
        let confirm = window.confirm("Are you sure you want to delete this user?");
        if(!confirm) return;
        try {
            await axios.delete(`${API_URl}/${id}`);
            fetchData();

            
        } catch (error) {
            console.error("Error deleting user:", error);
            
        }
    }

    // Update function
    const userUpdate = async(id)=>{
        alert(id);
        `
        <form>
         <input type="text" placeholder='Name' />
         <input type="email" placeholder='Email' />
         <input type="number" placeholder='Mobile' />
         <input type="password" placeholder='Password' />
         <button type="submit">Update</button>

        </form>
        `     
        

    }


  return (
   <>
        <h1>Admin Page</h1>
        <table border="1" cellPadding="10" cellSpacing="0" className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {initialdata.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.password}</td>
                        <td><button onClick={()=>userDelete(item.id)}>Delete</button></td>
                        <td><button onClick={()=>userUpdate(item.id)}>Update </button></td>
                    </tr>
                ))}
            </tbody>

        </table>
        {/* <form action="">
            Name: <input type="text" id='name'/><br />
            Email: <input type="email" id='email' /><br />
            Mobile: <input type="number" id='mobile' /><br />
            Password: <input type="password" id='password' /><br />
            <button type="submit" >Submit</button>
        </form> */}
   </>
  )
}

export default Admin