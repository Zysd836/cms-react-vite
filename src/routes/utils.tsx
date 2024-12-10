import { RouteObject } from 'react-router-dom'
import { CustomRouteObject } from './type'
import { ItemType, MenuItemType } from 'antd/es/menu/interface'

export const transformRoutes = (routes: CustomRouteObject[]): RouteObject[] => {
  // @ts-ignore
  return routes.map((route) => {
    const children = route.children ? transformRoutes(route.children) : undefined
    return {
      ...('index' in route ? { index: route.index } : {}),
      ...(route?.path && !route?.index ? { path: route.path } : {}),
      ...(route.component ? { element: <route.component /> } : {}),
      ...(children ? { children } : {}),
    }
  })
}
// Recursive function to filter tree nodes
export const filterMenuItems = (nodes: CustomRouteObject[], parentPath: string = ''): ItemType<MenuItemType>[] => {
  //@ts-ignore
  return nodes
    .filter((node) => node.showInMenu) // Keep nodes with showInMenu: true
    .map((node) => {
      const path = `${parentPath}${node.path}`
      return {
        key: path,
        icon: node.icon,
        label: node.label,
        ...(node.children ? { children: filterMenuItems(node.children || [], path) } : {}), // Recursively filter children
      }
    })
}
