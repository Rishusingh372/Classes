import { useState } from "react";
import axios from "axios";
import '../css/style.css';
const Login=()=>{
    const [input, setInput] = useState({});
   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
   }
   const handleSubmit=async()=>{
      let api="http://localhost:8000/employees/login";
      const response = await axios.post(api, input);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      alert(response.data.msg);
   }
    return(
        <div className="login-container">
          <h1> Employee Login </h1>
          <form className="login-form">
            <label>
              Enter Email: <input type="email" name="email" onChange={handleInput} />
            </label>
            <br/>
            <label>
              Enter Password: <input type="password" name="password" onChange={handleInput} />
            </label>
            <br/>
            <button type="button" onClick={handleSubmit}>Login</button>
          </form>
        </div>
     )
}
export default Login;