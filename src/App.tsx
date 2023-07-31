// ========== App
// import all packages
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import config from './config'

// impor all pages
import TodoListPage from './pages/TodoListPage'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'
import TodoListDetailPage from './pages/TodoListDetailPage'

const App: React.FC = () => {
  console.log(config)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/todo/:todoId" element={<TodoListDetailPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/create-account" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
