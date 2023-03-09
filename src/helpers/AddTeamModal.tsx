import React, { useState} from 'react'
import ReactDOM from 'react-dom';

export interface Client {
    id?: number;
    name: string;
    bio: string;
    avatar: string;
    accountCreationDate: number;
  }

export interface Team {
    id?: number;
    name: string;
    info: string;
    adminAvatar: string;
    dueDate: number;
  }
  
  

export const AddTeamModal = ({ id, name, bio, avatar, accountCreationDate}:Client) => {
    const [teamData, setTeamData] = useState<Team>({
        name: "",
        info: "",
        adminAvatar: "",
        dueDate: 0
    })

    // const handleChange = (e:Event | any) => {
    //     e.preventDefault()
    //     const { target, value} = e.target
    //     setTeamData(prevData:any => (
    //         ...prevData, 
    //     ))

    // }
  return (
    <form>
        <input 
        type="text" 
        placeholder='Team Name'
        />
    </form>
  )
}
