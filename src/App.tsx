import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routeManager } from './routes'
import { ConfigProvider } from 'antd'

const router = createBrowserRouter(routeManager.getRoutes())

function App() {
  return <ConfigProvider >
    <RouterProvider router={router} />
  </ConfigProvider>
}

export default App
