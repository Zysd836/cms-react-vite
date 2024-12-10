import { RouteObject } from 'react-router-dom'
export type CustomRouteObject = Omit<RouteObject, 'element'> & {
  component?: React.LazyExoticComponent<({}) => JSX.Element> | React.LazyExoticComponent<React.FC<{}>>
  children?: CustomRouteObject[]
  showInMenu?: boolean
  icon?: React.ReactNode
  showMenu?: boolean
  label?: string
}
