import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      HOME
      <Link to="/hi">Go to HI! page</Link>
    </div>
  )
}
