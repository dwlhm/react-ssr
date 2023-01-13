import React, { useEffect } from 'react'

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found! | ToDoList'
  }, [])

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, the page you are looking for was not found.</p>
      <p>
        <i>404</i>
      </p>
    </div>
  )
}
