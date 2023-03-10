import React, { useState} from 'react'
import { useUser } from '../contexts/UserContext';
import { toast } from "react-toastify"

export interface Team {
    id?: number;
    name: string;
    description: string;
    creationDate?: string;
    dueDate: string
  }
  
  

export const AddTeamModal = ({setShowModal}:any) => {
  const { user } = useUser()
    const [teamData, setTeamData] = useState<Team>({
        name: "",
        description: "",
        dueDate: ""
    })

    const { name, description, dueDate } = teamData

    const handleChange = (e:Event | any) => {
        const { name, value } = e.target
        setTeamData((prevData:any) => ({
            ...prevData,
            [name]:value
          }
          ))
        console.log(teamData)
    }



    const createTeam = async (e: Event | any) => {
      e.preventDefault()
      const url = 'http://localhost:3001/teams';
      const headers = {
        'Authorization': user.token,
        'Content-Type': 'application/json'
      };
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(teamData)
        });
    
        const result = await response.json();
        console.log(result);
        toast.success('Team Added')
        setShowModal(false)
      } catch (error:any) {
        toast.error(error);
      }
    }

  return (
    <form onSubmit={createTeam}>
        <input 
        type="text" 
        name='name'
        placeholder='Team Name'
        value={name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name='description'
        placeholder='Team Description'
        value={description}
        onChange={handleChange}
        />
        <input 
        type="date" 
        name='dueDate'
        placeholder='Due Date'
        value={dueDate}
        onChange={handleChange}
        />
        <button type='submit'>Add Team</button>
        <button onClick={() => setShowModal(false)}>Close</button>
    </form>
  )
}
