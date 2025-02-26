import React, { useContext } from 'react'
import { Link } from 'react-router'
import { taskContext } from '../context/taskContext'

const TaskItem = ({ task }) => {
  const [tasks, setTasks] = useContext(taskContext) // importing the tasks state using the task context

  //finding the corresponding task from the tasks state and changing its done property to the opposite
  function handleChangeStatus() {
    setTasks(tasks.map(t => t.id == task.id ? { ...t, done: !t.done } : t))
  }
  //asking the user to confirm the deletion if its positive the tasks state is going to be filtred of the corresponding task by its id
  function handleDelete() {
    const confirmation = confirm('Are you sure you want to delete')
    if(!confirmation) return 
    setTasks(tasks.filter(t => t.id != task.id))
  }
  return (
    <div className={`task-item ${task.done ? 'task-done' : 'task-pending'}`}>
      <div className='task-header'>
        <p className='task-date'>{task.date}</p>
        <div className='task-btns'>
          <p onClick={handleChangeStatus} className='task-status'>{task.done ? '❌' : '✔️'}</p>
          <p onClick={handleDelete} className='task-delete'>🗑️</p>
        </div>
      </div>
      <h3 className='task-name'>{task.name}</h3>
      <p className='task-description'>{task.description}</p>

      <Link to={`/edit/${task.id}`} className='task-link'>Edit</Link>
    </div>
  )
}

export default TaskItem