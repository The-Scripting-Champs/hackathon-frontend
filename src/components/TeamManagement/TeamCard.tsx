import React from 'react'
import { Team } from '../../helpers/AddTeamModal'



export const TeamCard:React.FC<Team> = ({name, info, dueDate, adminAvatar}) => {
  return (
    <div className='team--card'>
        <h3>{name}</h3>
        <p>{info}</p>
        <img src={adminAvatar} alt="avatar" />
        <h4>{dueDate}</h4>
    </div>
  )
}
