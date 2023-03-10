import React from 'react'
import { Team } from '../../helpers/AddTeamModal'



export const TeamCard:React.FC<Team> = ({name, description, dueDate }) => {

  return (
    <div className='team--card'>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{dueDate}</h4>
    </div>
  )
}
