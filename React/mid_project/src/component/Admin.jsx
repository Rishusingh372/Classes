import React, { use } from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../mycss/style.css'


const Admin = () => {
    let API_URl = "http://localhost:4000/user";
    let [initialdata, updatedata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URl);
                updatedata(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(initialdata);


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
                        <td><button>Delete</button></td>
                        <td><button>Update</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
   </>
  )
}

export default Admin