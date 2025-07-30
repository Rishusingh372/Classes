import React from 'react'
import { useState, useEffect } from 'react'
import '../mycss/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Task2 = () => {
    const navigate = useNavigate();
    const API_URL = "http://localhost:4001/user"
    const [initialdata, updatadata] = useState([]);
    const [formdata, updateformdata] = useState({
        namekey: "",
        email: "@gmail.com",
        password: ""
    })
    const [userid, setuserid] = useState(null)
    const [isCreating, setIsCreating] = useState(false)

    const handlchange = (e) => {
        const { name, value } = e.target;
        updateformdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Create user
    const signupdate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formdata);
            fetchdata(); // Refresh the data after creation
            setIsCreating(false); // Exit create mode
            updateformdata({ // Reset form
                namekey: "",
                email: "@gmail.com",
                password: ""
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    // Read data
    const fetchdata = async () => {
        try {
            let response = await axios.get(API_URL)
            updatadata(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    // Delete user
    const userDelete = async (id) => {
        let cnf = window.confirm("Are you sure you want to delete this user?");
        if (!cnf) return;
        try {
            await axios.delete(`${API_URL}/${id}`)
            fetchdata(); // Refresh the data after deletion
        } catch (error) {
            console.log(error)
        }
    }

    // Update user
    const updateuser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/${userid}`, formdata);
            setuserid(null); // Exit update mode
            fetchdata(); // Refresh the data
            updateformdata({ // Reset form
                namekey: "",
                email: "@gmail.com",
                password: ""
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const userUpdate = async (id) => {
        setuserid(id)
        setIsCreating(false)
        const user = initialdata.find((u) => u.id === id)
        updateformdata({
            namekey: user.namekey || '',
            email: user.email || '',
            password: user.password || ''
        })
    }

    const createuser = () => {
        setuserid(null)
        setIsCreating(true)
        updateformdata({
            namekey: "",
            email: "@gmail.com",
            password: ""
        })
    }

    const cancelForm = () => {
        setuserid(null)
        setIsCreating(false)
        updateformdata({
            namekey: "",
            email: "@gmail.com",
            password: ""
        })
    }

    return (
        <>
            {userid || isCreating ? (
                <>
                    <h1>{userid ? "Update User" : "Create New User"}</h1>
                    <form action="" onSubmit={userid ? updateuser : signupdate} className='form'>
                        <input type="text" name='namekey' placeholder="Name" 
                            value={formdata.namekey} onChange={handlchange} />
                        <br />
                        <input type="text" name='email' placeholder="Email" 
                            value={formdata.email} onChange={handlchange} />
                        <br />
                        <input type="password" name='password' placeholder="Password" 
                            value={formdata.password} onChange={handlchange} />
                        <br />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={cancelForm}>Cancel</button>
                        <br /><br />
                    </form>
                </>
            ) : (
                <>
                    <h1>Admin dashboard</h1>
                    <button onClick={createuser}>Create New User</button>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialdata.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.namekey}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td><button onClick={() => userDelete(data.id)}>Delete</button></td>
                                    <td><button onClick={() => userUpdate(data.id)}>Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}

export default Task2