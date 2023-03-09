import React, { useState} from 'react'
import { teams } from './dummyTeamData';

export interface Team {
    id?: number;
    name: string;
    info: string;
    adminAvatar: string;
    dueDate: string;
  }
  
  

export const AddTeamModal = ({setShowModal}:any) => {
    const [teamData, setTeamData] = useState<Team>({
        name: "",
        info: "",
        adminAvatar: "",
        dueDate: ""
    })

    const { name, info, adminAvatar, dueDate } = teamData

    const handleChange = (e:Event | any) => {
        e.preventDefault()
        const { name, value } = e.target
        setTeamData((prevData:any) => ({
            ...prevData,
            [name]:value
          }
          ))
        console.log(teamData)
    }


    const addTeam = () => {
      teams.push(teamData)
      setShowModal(false)
    }

  return (
    <form>
        <input 
        type="text" 
        name='name'
        placeholder='Team Name'
        value={name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name='info'
        placeholder='Team Bio'
        value={info}
        onChange={handleChange}
        />
        <input 
        type="date" 
        name='dueDate'
        placeholder='Due Date'
        value={dueDate}
        onChange={handleChange}
        />
        <input 
        type="file" 
        name='adminAvatar'
        value={adminAvatar}
        onChange={handleChange}
        />
        <button onClick={addTeam}>Add Team</button>
        <button>Close</button>
    </form>
  )
}
