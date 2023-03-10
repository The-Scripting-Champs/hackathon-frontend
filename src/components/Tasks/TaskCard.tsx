import React from 'react'
import avatar from "../../assets/dummy_avatar.png"

export const TaskCard = () => {
  return (
    <div className='task--card'>
        <div>
            <p>Create Team Management Page</p>
            <img src={avatar} alt="" />
        </div>
        <div>
            <p><i> 2023/04/06</i></p>
            <select name='status'>
                <option value="todo">To-Do</option>
                <option value="progress">In-Progress</option>
                <option value="review">In-Review</option>
                <option value="done">Done</option>
            </select>
        </div>
    </div>
  )
}
