import React from 'react'
import useRootContext from '../hooks/useRootContext';
import { NavLink } from 'react-router-dom';
function Home() {
    const {user} = useRootContext();
    console.log(user , "][");
  return (
    <div>
        <h1>Home</h1>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Home