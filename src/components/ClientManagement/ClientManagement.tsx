import React, { useState } from 'react'
import { AddClientModal } from '../../helpers/AddClientModal'
import { AddTeamModal } from '../../helpers/AddTeamModal'
import { clients, teams } from '../../helpers/dummyTeamData'
import { ClientCard } from './ClientCard'

export const ClientManagement = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div id='teamManagement'>
      <div className='team--management--section'>
        <div className='header'>
            <h2>Clients</h2>
            <button onClick={() => setShowModal(true)}>Add New Client</button>
        </div>
        <div className='team--cards--section'>
          {clients.map(client => (
            <ClientCard 
            {...client}
            />
          ))}
        </div>
      </div>
      {showModal && 
      <div className='modal--section'>
        <AddClientModal setShowModal={setShowModal}/>
      </div>
        }
    </div>
  )
}
