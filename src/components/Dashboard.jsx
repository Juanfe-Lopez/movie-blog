import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './Nav';
import { Navigate } from 'react-router-dom';
const Dashboard = () => {
    const {user} = useAuth0();
    if (!user) {
        return <Navigate to="/" replace />;
      } else {
        return (
          <div className="dashboard">
            <Nav />
            <h1>Welcome user</h1>
            <img src={user.picture} alt="profile" />
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.gender}</h3>
            <h3>{user.profile}</h3>
          </div>
        );
      }
    };
export default Dashboard;