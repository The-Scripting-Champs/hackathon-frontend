import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

export const AccountPanel = () => {
    const { signOut } = useUser()
  return (
    <div className='panel'>
        <h4><Link to="/dashboard"> Account Settings</Link></h4>
        <h4 onClick={signOut}>Log Out</h4>
    </div>
  )
}
