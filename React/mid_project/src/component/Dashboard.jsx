import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation();
  const formData = location.state || {};
  return (
    <>
      <div>
        <h1>This is Dashboard</h1>
        <h2>Welcome, {formData.name}!</h2>
        <h3>Your Email: {formData.email}</h3>
        <h3>Your Mobile: {formData.mobile}</h3>
        <h3>Your Password: {formData.password}</h3>
      </div>
    </>
  )
}

export default Dashboard