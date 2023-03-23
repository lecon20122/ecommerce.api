import { Card, Layout, Menu, theme } from 'antd'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { useWindowSize } from 'react-use';
import SidebarLink from '../components/common/sidebar-link';

interface IProps {
  children: React.ReactNode,
}

export default function NewDashboardLayout({ children }: IProps) {
  const { Header, Sider, Content } = Layout;

  const {
    token: { colorBgContainer },
  } = theme?.useToken();
  const { width } = useWindowSize();
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <Layout style={{
      minHeight: '100vh',
      background: colorBgContainer,
      height: '100%',

    }}>
      <Header style={{
        height: '60px',
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: '25px',
      }}
      >
        <div className='flex items-center space-x-8'>
          <GiHamburgerMenu onClick={(e) => setCollapsed(!collapsed)} size={28} className='text-black' />
          {/* <Logo /> */}
          {/* <div className="-mt-0.5 ">
            <div className="flex-shrink-0 text-sm xl:text-base flex focus:outline-none text-heading gap-x-3">
              <FaUserAlt className='w-4 xl:w-[17px] h-auto text-black' />
              {user?.user.name}
              <FaSignOutAlt className='w-4 xl:w-[17px] h-auto text-black cursor-pointer' onClick={() => signOut()} />
            </div>
          </div> */}
        </div>
      </Header>
      <Layout>
        <Sider theme='light' collapsed={collapsed} collapsedWidth={width > 768 ? undefined : 0}>
          <Menu className='text-black' theme='light' mode='inline' defaultSelectedKeys={['1']} items={[
            {
              key: "dashboard",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='dashboard.index'>Dashboard</SidebarLink>,
            },
            {
              key: "categories",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='admin.categories.index'>Categories</SidebarLink>,
            },
            {
              key: "admin.users",
              icon: <FaUsers />,
              label: <SidebarLink routeName='admin.users'>Customers</SidebarLink>,
            },
            {
              key: "admin.stores.index",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='admin.stores.index'>Stores</SidebarLink>,
            },
            {
              key: "admin.variations.type.index",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='admin.variations.type.index'>Variations Settings</SidebarLink>,
            },
            {
              key: "admin.index.attribute",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='admin.index.attribute'>Product Attribute Settings</SidebarLink>,
            },
            {
              key: "admin.settings.index",
              icon: <AiTwotoneHome />,
              label: <SidebarLink routeName='admin.settings.index'>Application Settings</SidebarLink>,
            },
          ]}>

          </Menu>
        </Sider>
        <Content className='m-5'><Card>{children}</Card></Content>
      </Layout>
    </Layout>

  )
}
