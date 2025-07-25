import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

     const API_URL = "http://localhost:4001/user";
    const [loginData, setloginData] = useState('user'); 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const AdminLogin = [{
        email: "admin@gmail.com",
        password: "admin123"
    }];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (loginData === 'admin') {
            // Admin login check
            const admin = AdminLogin.find(admin => 
                admin.email === formData.email && 
                admin.password === formData.password
            );
            
            if (admin) {
                alert("Admin login successful");
                navigate('/admin');
            } else {
                alert("Invalid admin credentials");
            }
        } else {
            // User login check against API
            try {
                const response = await axios.get(API_URL);
                const users = response.data;
                
                const user = users.find(user => 
                    user.email === formData.email && 
                    user.password === formData.password
                );
                
                if (user) {
                    alert("User login successful");
                    navigate('/dashboard', { state: user });
                } else {
                    alert("Invalid user credentials");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                alert("Error during login. Please try again.");
            }
        }
    };

    return (
        <>
            <h1>Login Page</h1>
            <div className="login-type-selector">
                <button 
                    onClick={() => setloginData('user')}
                    className={loginData === 'user' ? 'active' : ''}
                >
                    User Login
                </button>
                <button 
                    onClick={() => setloginData('admin')}
                    className={loginData === 'admin' ? 'active' : ''}
                >
                    Admin Login
                </button>
            </div>
            
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <br />
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;