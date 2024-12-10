import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
type CustomRouteObject = Omit<RouteObject, 'element'> & {
  component?: React.LazyExoticComponent<({}) => JSX.Element> | React.LazyExoticComponent<React.FC<{}>>
  children?: CustomRouteObject[]
  showInMenu?: boolean
}
// auth
const BlankLayout = lazy(() => import('@/layout/BlankLayout'))
const Login = lazy(() => import('@/pages/Login'))
// main
const MainLayout = lazy(() => import('@/layout/MainLayout'))
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const routes: CustomRouteObject[] = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        index: true,
        component: Login
      }
    ]
  },
  {
    path: '/cms',
    component: MainLayout,
    showInMenu: true,
    children: [
      {
        index: true,
        component: Home
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]
const transformRoutes = (routes: CustomRouteObject[]): RouteObject[] => {
  // @ts-ignore
  return routes.map((route) => {
    const children = route.children ? transformRoutes(route.children) : undefined
    return {
      ...('index' in route ? { index: route.index } : {}),
      path: route.path,
      ...(route.component ? { element: <route.component /> } : {}),
      ...(children ? { children } : {})
    }
  })
}
export const routeManager = {
  getRoutes: () => transformRoutes(routes)
}
