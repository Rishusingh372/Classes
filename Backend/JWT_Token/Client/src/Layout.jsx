import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <h1>JWT AUTHENTICATION</h1>
        </div>
        <div>
           <Link to="home">Home</Link>
           <Link to="registration">Registration</Link>
            <Link to="login">Login</Link>
             <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
