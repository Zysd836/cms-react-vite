import React, { useEffect, useMemo, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, MenuProps, Spin } from 'antd'
import { routeManager } from '@/routes'
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const MainLayout: React.FC = () => {
  const navigate = useNavigate()
  const navigation = useNavigation()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const activeKey = useMemo(() => {
    return location.pathname
  }, [location])

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key as string)
  }

  useEffect(() => {
    if (location.pathname === '/cms') {
      navigate('/cms/resource')
    }
  }, [])

  const logo = useMemo(() => {
    return collapsed ? 'Cert' : 'Cert Manager'
  }, [collapsed])
  //
  const outlet = useMemo(() => {
    return <Outlet />
  }, [])
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="text-white font-bold text-center py-4">{logo}</div>
        <Menu
          selectedKeys={[activeKey]}
          onClick={onClick}
          theme="dark"
          className="h-screen"
          mode="inline"
          activeKey=""
          items={routeManager.getMenus()}
        />
      </Sider>
      <Layout>
        <Header className="bg-white px-4">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="w-16 h-16 text-base"
          />
        </Header>
        <Spin spinning={navigation.state === 'loading'}>
          <Content className="m-4 p-4 bg-white rounded-lg">{outlet}</Content>
        </Spin>
      </Layout>
    </Layout>
  )
}

export default MainLayout
