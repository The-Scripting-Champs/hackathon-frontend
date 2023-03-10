import React from 'react'
import { Client } from '../../helpers/AddClientModal'



export const ClientCard:React.FC<Client> = ({name, bio, dateOfCreation}) => {
  return (
    <div className='team--card'>
        <h3>{name}</h3>
        <p>{bio}</p>
        {/* <img src={avatar} alt="avatar" /> */}
        <h4>{dateOfCreation}</h4>
    </div>
  )
}
