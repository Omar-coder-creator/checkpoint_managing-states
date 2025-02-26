import React, { createContext, useState, useEffect } from "react";

export const taskContext = createContext(); // creating a new context 

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []) // setting the tasks value by the local storage data by default or an empty array in case the is no data

    //updating the localstorage value as long as the tasks content change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    // passing the tasks state and its setter as value of the task context so all component can have acces on them
    return (
        <taskContext.Provider value={[ tasks, setTasks ]}>
            {children}
        </taskContext.Provider>
    )
}
export default TaskProvider