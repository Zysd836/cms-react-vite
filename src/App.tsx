import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
