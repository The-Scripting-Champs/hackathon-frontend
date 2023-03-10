import React, { useState} from 'react'
import { useUser } from '../contexts/UserContext';
import { toast } from "react-toastify"
export interface Client {
    id?: number;
    name: string;
    bio: string;
    dateOfCreation: string;
}

export const AddClientModal = ({setShowModal}:any) => {
    const { user } = useUser()

    const [clientData, setClientData] = useState<Client>({
        name: "",
        bio: "",
        dateOfCreation: ""
    })

    const { name, bio, dateOfCreation } = clientData

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

    const addClient = async (e: Event | any) => {
        e.preventDefault()
        const url = 'http://localhost:3001/clients';
        const headers = {
          'Authorization': user.token,
          'Content-Type': 'application/json'
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(clientData)
          });
      
          const result = await response.json();
          console.log(result);
          toast.success('Client Added')
          setShowModal(false)
        } catch (error:any) {
          toast.error(error);
        }
      }



  return (
    <form onSubmit={addClient}>
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
        type="date" 
        name='dateOfCreation'
        placeholder='Account Creation Date'
        value={dateOfCreation}
        onChange={handleChange}
        />
        
        <button>Add Client</button>
        <button onClick={() => setShowModal((prev:boolean) => !prev)}>Close</button>
    </form>
  )
}
