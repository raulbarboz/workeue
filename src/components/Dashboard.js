import React from 'react';
import { authProvider } from '../firebase/firebase.js';

const Dashboard = () => {

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {authProvider.signOut()}}>Logout</button>
        </div>
    )
}

export default Dashboard;