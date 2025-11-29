import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();  
    const [data, setData] = useState({
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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/login", data, {
                withCredentials: true
            });
            navigate("/profile");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
            console.log(err);
        }
    };
    
  return (
    <>
        <div className="login">
            <h2>Login</h2>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate('/')}>Register</button></p>
        </div>
    </>
  )
}

export default Login