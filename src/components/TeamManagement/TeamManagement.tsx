import React, { useState, useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { AddTeamModal, Team } from '../../helpers/AddTeamModal'
import { TeamCard } from './TeamCard'
import { toast } from "react-toastify"

export const TeamManagement = () => {
  const { user, teams } = useUser()
  const [showModal, setShowModal] = useState(false)
  // const [teams, setTeams] = useState<any>()


  // const fetchTeam = async () => {
  //   const url = 'http://localhost:3001/teams';
  //   const headers = {
  //     'Authorization': user.token,
  //   };
  
  //   try {
  //     const response = await fetch(url, {
  //       headers: headers,
  //     });
  //     const result = await response.json();
  //     setTeams(result.data)
  //     console.log(teams);
  //   } catch (error:any) {
  //     toast.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchTeam()
  // }, [])
  



  return (
    <div id='teamManagement'>
      <div className='team--management--section'>
        <div className='header'>
            <h2>Teams</h2>
            <button onClick={() => setShowModal(true)}>Create New Team</button>
        </div>
        <div className='team--cards--section'>
          {teams?.map((team:any) => (
            <TeamCard
            {...team}
            />
          ))}
        </div>
      </div>
      {showModal && 
      <div className='modal--section'>
        <AddTeamModal setShowModal={setShowModal}/>
      </div>
        }
    </div>
  )
}
