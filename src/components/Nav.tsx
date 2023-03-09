import React from 'react'
import dummyAvatar from "../assets/dummy_avatar.png"
import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <nav>
        <div id='nav'>
            <Link to="/">
                <h2>AgenciFlow</h2>
            </Link>
            <ul className='flex-row'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/teams">Teams</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/boards">Boards</Link></li>
                <li><Link to="/invoices">Invoices</Link></li>
            </ul>
            <div>
                <img src={dummyAvatar} alt="dummy avatar"/>
            </div>
        </div>
    </nav>
  )
}
