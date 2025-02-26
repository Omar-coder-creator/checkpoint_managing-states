import { useState } from 'react'
import './App.css'
import TaskProvider from './context/taskContext'
import TaskFrom from './components/TaskFrom'
import TaskList from './components/TaskList'
import { Route, Routes } from 'react-router'

function App() {


  return (
    <div id='app'>
      <TaskProvider>
        <Routes>
          <Route index element={<TaskList/>}/>
          <Route path='/add' element={<TaskFrom/>}/>
          <Route path='/edit/:id' element={<TaskFrom/>}/>
        </Routes>
      </TaskProvider>
    </div>
  )
}

export default App
