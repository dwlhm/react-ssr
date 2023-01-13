import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Hi } from './pages/hi'
import { NotFoundPage } from './pages/errorPage'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/hi" element={<Hi />} />
    </Routes>
  )
}
