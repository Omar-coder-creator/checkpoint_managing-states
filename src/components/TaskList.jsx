import React, { useContext } from 'react'
import { taskContext } from '../context/taskContext'
import TaskItem from './TaskItem'
import { useNavigate } from 'react-router'

const TaskList = () => {

  const [tasks] = useContext(taskContext) // importing the tasks state using the task context

  //usenavigate instance
  const nav = useNavigate()
  return (
    //mapping into the tasks state for each task rendring the TaskItem component with the right values
    <div id='task-list'>
      <h1>To-Do List</h1>
      <div id='tasks'>
        {tasks.map(task => (<TaskItem key={task.id} task={task} /> ))} 
      </div>
      <button onClick={() => nav('/add')}>Click Here To Add A Task</button>
    </div>
    
  )
}

export default TaskList