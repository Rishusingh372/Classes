import glogo from "../images/gicon.png";

const Login = () => {
  const loginwithGoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  }

  return (
    <div className="login-container">
      <h1>User Login</h1>
      <label htmlFor="uname">Username</label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label htmlFor="psw">Password</label>
      <input type="password" placeholder="Enter Password" name="psw" required />
          
      <button type="submit">Login</button>
      
      <div className="or">OR</div>
      
      <div>
        <button 
          type="button" 
          className="google-login-btn" 
          onClick={loginwithGoogle}
        >
          <img src={glogo} className="glogo" alt="Google" />
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login;