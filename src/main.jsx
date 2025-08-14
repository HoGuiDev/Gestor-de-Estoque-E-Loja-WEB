import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Paginas/Home'
import Gerenciamento from './Paginas/Adm/Gerenciamento'
import Login from './Paginas/Adm/Login'
import Registro from './Paginas/Adm/Registro'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MinhasRotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/gerenciamento",
    element: <Gerenciamento />
  },
  {
    path: "/registro",
    element: <Registro />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MinhasRotas} />
  </StrictMode>,
)
