import { Database, GitPullRequest } from 'lucide-react'
import { lazy } from 'react'
import { CustomRouteObject } from './type'
import { filterMenuItems, transformRoutes } from './utils'
// auth
const BlankLayout = lazy(() => import('@/layout/BlankLayout'))
const Login = lazy(() => import('@/pages/login'))
// main
const MainLayout = lazy(() => import('@/layout/MainLayout'))
//
const Resource = lazy(() => import('@/pages/resource'))
//
const ListRequest = lazy(() => import('@/pages/request/List'))
//
const NotFound = lazy(() => import('@/pages/not-found'))
const routes: CustomRouteObject[] = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        index: true,
        component: Login,
      },
    ],
  },
  {
    path: '/cms',
    component: MainLayout,
    showMenu: true,
    children: [
      {
        path: '/cms/resource',
        icon: <Database size={14} />,
        showInMenu: true,
        label: 'Tài sản',
        component: Resource,
      },
      {
        path: '/cms/request',
        icon: <GitPullRequest size={14} />,
        showInMenu: true,
        label: 'Yêu cầu',
        component: ListRequest,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
]

export const routeManager = {
  getRoutes: () => transformRoutes(routes),
  getMenus: () => filterMenuItems(routes.find((route) => route.path === '/cms')?.children || []),
}
