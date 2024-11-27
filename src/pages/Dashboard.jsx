import React from 'react'
import useRootContext from '../hooks/useRootContext'
import { NavLink } from 'react-router-dom';

function Dashboard() {
    const {user} = useRootContext();
    console.log(user , "}{");
    
  return (
    <div>
        <h1>Dashboard</h1>
        <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default Dashboard