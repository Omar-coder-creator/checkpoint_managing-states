import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../context/taskContext';
import { useParams, useNavigate } from 'react-router-dom'

const TaskFrom = () => {
    const nav = useNavigate()
    const [tasks, setTasks] = useContext(taskContext) // using the taskContenxt to have acces to tasks state
    const { id } = useParams()
    const [error, setError] = useState(false)

    // fulling the form with the corresponding task information in case editing
    useEffect(() => {
        if (id) {
            const task = tasks.find(task => (task.id == id))
            setTaskName(task.name)
            setTaskDesc(task.description)
        }
    }, [])

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');



    // adding a new task to the tasks state using the setter
    function handleAdd() {

        const date = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
        setTasks(prevTasks => [...prevTasks, { id: tasks.length != 0 ? tasks[tasks.length - 1].id + 1 : 0, name: taskName, description: taskDesc, done: false, date: date }])

    }
    // updating the corresponding task 
    function handleEdit() {
        setTasks(prevTasks => prevTasks.map(task => task.id == id ? { ...task, name: taskName, description: taskDesc } : task))
    }
    // form validation
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!taskName || !taskDesc) return setError(true)
        id ? handleEdit() : handleAdd()
        nav('/')
    }



    return (
        <div id="form-container">
            <h2>{id ? 'Edit Form' : 'Add Form'}</h2>
            <form>
                {error && <p id='error-msg'>please fill your form</p>}
                <input
                    type="text"
                    value={taskName}
                    id="task-name"
                    placeholder="Enter task name"
                    onChange={(e) => setTaskName(e.target.value)} // setting the task name by the input value
                />
                <input type='text'
                    id="task-desc"
                    value={taskDesc}
                    placeholder="Enter task description"
                    onChange={(e) => setTaskDesc(e.target.value)} // setting the task description by the input value
                />
                <button onClick={handleSubmit}>{id ? 'Edit' : 'Add'}Task</button>
            </form>
        </div>
    )
}

export default TaskFrom