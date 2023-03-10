import React from 'react'
import { ProfileCard } from './ProfileCard'
import avatar from "../../assets/dummy_avatar.png"
import { useUser } from '../../contexts/UserContext'

export const Dashboard = () => {
  const { user, teams }= useUser()
  console.log(user)
  return (
    <div id='dashboard'>
        <div className='dashboard--section'>
          <div className='header'>
            <div>
              <h1>Hi, {user?.fullName}. <br></br> Welcome to your Dashboard</h1>
              <p>...navigate through your Workspace</p>
              <br />
              <h2>No. of Teams: {teams.length}</h2>
            </div>
            <div>
              <img src={avatar} alt="" />
            </div>
          </div>
          <hr />
          <section>
            <ProfileCard {...user}/>
          </section>
        </div>
    </div>
  )
}
