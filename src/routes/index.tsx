import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
type CustomRouteObject = Omit<RouteObject, 'element'> & {
  component?: React.LazyExoticComponent<() => JSX.Element>
  layout?: React.LazyExoticComponent<() => JSX.Element>
  children?: CustomRouteObject[]
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
    handle: {
      redirect: '/login'
    },
    children: [
      {
        path: '/login',
        component: Login
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]
const transformRoutes = (routes: CustomRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const children = route.children ? transformRoutes(route.children) : undefined
    return {
      path: route.path,
      element: route.component ? <route.component /> : undefined,
      ...(children ? { children } : {})
    }
  })
}
export const routeManager = {
  getRoutes: () => transformRoutes(routes)
}
