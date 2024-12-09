import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routeManager } from './routes'

const router = createBrowserRouter(routeManager.getRoutes())

function App() {
  return <RouterProvider router={router} />
}

export default App
