import { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true
        });
        setUser(response.data.user);
      } catch (err) {
        // User is not authenticated
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const switchToRegister = () => {
    setCurrentView('register');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  if (loading) {
    return (
      <div className="container">
        <div className="form-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <>
          {currentView === 'register' && (
            <Register switchToLogin={switchToLogin} />
          )}
          {currentView === 'login' && (
            <Login switchToRegister={switchToRegister} onLogin={handleLogin} />
          )}
        </>
      )}
    </div>
  );
}

export default App;