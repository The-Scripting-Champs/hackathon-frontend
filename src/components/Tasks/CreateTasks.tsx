import React, { useState } from 'react'
import { useUser } from '../../contexts/UserContext'
import { toast } from "react-toastify"

export const CreateTasks = () => {
    const { user } = useUser()
    const [taskData, setTaskData] = useState({
        name: "",
        description: "",
        image: "",
        taskStatus: "",
        assignee: user,
    })

    const { name, description, image, taskStatus, assignee} = taskData

    const handleChange = (e:Event | any) => {
        const { name, value } = e.target
        setTaskData((prevData:any) => ({
            ...prevData,
            [name]:value
          }
          ))
    }

    // const createTask = async (e: Event | any) => {
    //     e.preventDefault()
    //     const url = 'http://localhost:3001/tasks';
    //     const headers = {
    //       'Authorization': user.token,
    //       'Content-Type': 'application/json'
    //     };
      
    //     try {
    //       const response = await fetch(url, {
    //         method: 'POST',
    //         headers: headers,
    //         body: JSON.stringify(taskData)
    //       });
      
    //       const result = await response.json();
    //       console.log(result);
    //       toast.success('Task Created')
    //     //   setShowModal(false)
    //     } catch (error:any) {
    //       toast.error(error);
    //     }
    //   }

      const createTask = async (e: Event | any) => {
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            body: JSON.stringify(taskData),
            headers: {
                'Authorization': user.token,
                'Content-Type': 'application/json'
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            toast.success(data.message);
          } else {
            const { error } = await response.json();
            throw new Error(error);
          }
        }catch (error:any) {
          toast.error(error.message);
        }
      };

  return (
    <div id='createTask'>
        <form onSubmit={createTask}>
            <input 
            type="text"
            name='name'
            value={name}
            placeholder='Task Summary'
            onChange={handleChange}
            />
            <textarea 
            name='description'
            value={description}
            placeholder='Descrption'
            onChange={handleChange}
            />
            <input 
            type="file"
            name='image'
            value={image}
            onChange={handleChange}
            />
            <select name='taskStatus' onChange={handleChange}>
                <option value="">Task Status</option>
                <option value="To-Do">To-Do</option>
                <option value="In-Review">In-Review</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Done">Done</option>
            </select>
            <br />
            <h4>REPORTER: {user.fullName}</h4>
            <br />
            <button type='submit'>
                Add Task
            </button>
        </form>
    </div>

  )
}
