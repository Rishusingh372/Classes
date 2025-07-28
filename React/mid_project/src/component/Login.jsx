import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const API_URL = "http://localhost:4001/user";
  const navigate = useNavigate();
  const [loginData, setloginData] = useState("user"); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

const Admindata = [
    {
      email: "admin@gmail.com",
      password: "admin123",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginDataChange = (e) => {
    setloginData(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginData === "admin") {
      // Admin login check
      const admin = Admindata.find(
        (admin) =>
          admin.email === formData.email && admin.password === formData.password
      );

      if (admin) {
        navigate("/admin");
      } else {
        alert("Invalid admin credentials");
      }
    } else {
      // User login check against API
      try {
        const response = await axios.get(API_URL);
        const users = response.data;

        const user = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (user) {
          alert("User login successful");
          navigate("/dashboard", { state: user });
        } 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="loginData">Login As:</label>
          <select id="loginData" name="loginData" value={loginData} onChange={loginDataChange} >

            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select><br /><br />
       
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

          <label htmlFor="password">Password:</label>
          <input  type="password" id="password" name="password" value={formData.password} onChange={handleChange} /><br /><br />

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
