import React from 'react'
import Login from './pages/Login'
import TokenPage from './pages/TokenPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
