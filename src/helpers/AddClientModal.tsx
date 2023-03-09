import React, { useState} from 'react'
import { clients } from './dummyTeamData';

export interface Client {
    id?: number;
    name: string;
    bio: string;
    avatar: string;
    accountCreationDate: number;
  }

export const AddClientModal = ({setShowModal}:any) => {
    const [clientData, setClientData] = useState<Client>({
        name: "",
        bio: "",
        avatar: "",
        accountCreationDate: 0
    })

    const { name, bio, avatar, accountCreationDate } = clientData

    const handleChange = (e:Event | any) => {
        e.preventDefault()
        const { name, value } = e.target
        setClientData((prevData:any) => ({
            ...prevData,
            [name]:value
          }
          ))
        console.log(clientData)
    }


    const addTeam = () => {
      clients.push(clientData)
      setShowModal(false)
    }

  return (
    <form>
        <input 
        type="text" 
        name='name'
        placeholder='Client Name'
        value={name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name='bio'
        placeholder='Client Bio'
        value={bio}
        onChange={handleChange}
        />
        <input 
        type="number" 
        name='accountCreationDate'
        placeholder='Account Creation Date'
        value={accountCreationDate}
        onChange={handleChange}
        />
        <input 
        type="file" 
        name='avatar'
        value={avatar}
        onChange={handleChange}
        />
        <button onClick={addTeam}>Add Client</button>
        {/* <button onClick={setShowModal((prev:boolean) => !prev)}>Close</button> */}
    </form>
  )
}
