import React from 'react'

interface User {
    fullName: string,
    email: string,
    joinedDate: string
}

export const ProfileCard = ({ fullName, email, joinedDate}:User) => {
    
  return (
    <div className='dashboard--card'>
        <h2>Profile Info</h2>
        <div>
            <h3><b>Name:</b> {fullName}</h3>
            <h3><b>E-mail:</b><i> {email}</i></h3>
            <h3><b>Joined On:</b> {joinedDate}</h3>
        </div>
    </div>
  )
}
