import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  

const Register = () => {
    const navigate = useNavigate();  
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError(""); // Clear error when user types
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/register", data, {
                withCredentials: true
            });
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
            console.log(err);
        }
    }

    return (
        <>
            <div className="register">
                <h2>Register</h2>
                {error && <div style={{color: 'red'}}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder='Username' 
                        onChange={handleChange} 
                        value={data.username}  
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Email' 
                        required 
                        onChange={handleChange} 
                        value={data.email} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Password' 
                        required 
                        onChange={handleChange} 
                        value={data.password} 
                    />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
            </div>
        </>
    )
}

export default Register;