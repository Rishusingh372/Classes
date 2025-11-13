import { Link, Outlet } from "react-router-dom";
import './css/style.css';

const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <header className="layout-header">
          <h1>JWT AUTHENTICATION</h1>
        </header>
        <nav className="layout-nav">
           <Link to="home">Home</Link>
           <Link to="registration">Registration</Link>
            <Link to="login">Login</Link>
        </nav>
        <main className="layout-main">
             <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layout;
