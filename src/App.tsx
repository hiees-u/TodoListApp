import { useState } from 'react'
import './App.css'
import TodoList from './pages/TodoList'
import { Route, Routes } from 'react-router-dom'
import TodoDetail from './pages/TodoDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </>
  )
}

export default App
