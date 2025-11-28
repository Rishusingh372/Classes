import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ user, onLogout }) => {
  const [protectedData, setProtectedData] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProtectedData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/protected', {
        withCredentials: true
      });
      setProtectedData(response.data.message);
    } catch (err) {
      console.error('Failed to fetch protected data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true
      });
      onLogout();
    } catch (err) {
      console.error('Logout failed');
      onLogout(); // Still logout locally even if server call fails
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
      <div className="user-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      
      <div className="protected-section">
        <h3>Protected Data</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>{protectedData}</p>
        )}
        <button onClick={fetchProtectedData} className="btn">
          Refresh Data
        </button>
      </div>
      
      <button onClick={handleLogout} className="btn logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;