import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Paginas/Home'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const MinhasRotas = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MinhasRotas}/>
  </StrictMode>,
)
