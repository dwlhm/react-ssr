import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../app/router'

ReactDOM.hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
)
