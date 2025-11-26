import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
      console.log("response ", response);          
    } catch (error) {
      navigate("*");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>User DashBoard</h1>
    </div>
  );
}

export default DashBoard;