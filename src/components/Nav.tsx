import React, { useState} from 'react'
import dummyAvatar from "../assets/dummy_avatar.png"
import { Link } from "react-router-dom"
import { AccountPanel } from '../helpers/AccountPanel'

export const Nav = () => {
    const [showPanel, setShowPanel] = useState<boolean>(false)
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
            <div onClick={() => setShowPanel(prev => !prev)}>
                <img src={dummyAvatar} alt="dummy avatar"/>
                {showPanel && <AccountPanel />}
            </div>
        </div>
    </nav>
  )
}
