import React from 'react'
import { Link } from 'react-router-dom'

export const Hi: React.FC = () => {
  return (
    <div>
      HI!
      <Link to="/">Go to Home page</Link>
    </div>
  )
}
