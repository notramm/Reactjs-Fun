import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },{
        path: "about",
        element: <About />
      }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
