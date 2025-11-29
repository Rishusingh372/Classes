import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("http://localhost:5000/profile", {
                    withCredentials: true
                });
                setUser(response.data.user);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to load profile");
                if (err.response?.status === 401) {
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, {
                withCredentials: true
            });
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{color: 'red'}}>{error}</div>;

    return (
        <div className="profile">
            <h2>Profile</h2>
            {user && (
                <div>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            )}
            <button onClick={handleLogout} style={{
                backgroundColor: 'red', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '5px',
                marginTop: '20px',
                cursor: 'pointer'
            }}>
                Logout
            </button>
        </div>
    )
}

export default Profile;