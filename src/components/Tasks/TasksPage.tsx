import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { BiTask } from "react-icons/bi"
import { GrInProgress } from "react-icons/gr"
import { MdDoneAll, MdRateReview } from "react-icons/md"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { CreateTasks } from './CreateTasks'


export const TasksPage = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div id='tasks'>
        <div className='tasks--section'>
            <div className='header'>
                <h1 className='flex-row'>
                    <BiTask /> The Scripting Champs: <b>TASKS LIST</b>
                </h1>
                <div>
                    <button onClick={() => setShowModal(prev => !prev)}>Add Task</button>
                </div>
            </div>
            <hr />
            <div className='categories'>
                <div className='category--card'>
                    <h4> <BiTask /> TO-DO</h4>
                    <div>
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                    </div>
                </div>
                <div className='category--card'>
                    <h4> <AiOutlineLoading3Quarters  /> IN-PROGRESS</h4>
                    <div>
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                    </div>
                </div>
                <div className='category--card'>
                    <h4><MdRateReview /> IN-REVIEW</h4>
                    <div>
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                    </div>
                </div>
                <div className='category--card'>
                    <h4><MdDoneAll />DONE</h4>
                    <div>
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                        <TaskCard /> 
                    </div>
                </div>
            </div>
        </div>
        {showModal && <CreateTasks />}
    </div>
  )
}
