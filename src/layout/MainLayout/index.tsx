import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'

const { Header, Sider, Content } = Layout

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='text-white font-bold text-center py-4'>Cert Manager</div>
        <Menu
          theme='dark'
          className='h-screen'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className='bg-white px-4'>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='w-16 h-16 text-base'
          />
        </Header>
        <Content className='m-4 p-4 bg-white rounded-lg'>Content</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
