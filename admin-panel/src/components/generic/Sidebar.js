import { CopyOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu

export default function Sidebar () {
  return (
    <Sider>
      <Menu
        style={{ width: 200 }}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <Menu.Item key='dashboard'>
          <Link to='/'>داشبورد</Link>
        </Menu.Item>

        <SubMenu key='sub1' icon={<UserOutlined />} title='لیست کاربران'>
          <Menu.Item key='1'>
            <Link to='/person'>لیست کاربران</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/person/new'>افزودن کاربر</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<CopyOutlined />} title='لیست مقالات'>
          <Menu.Item key='5'>لیست مقالات</Menu.Item>
          <Menu.Item key='6'>افزودن مقاله</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='تنظیمات'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}
