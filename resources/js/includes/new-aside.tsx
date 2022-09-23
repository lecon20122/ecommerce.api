import type {MenuProps} from 'antd';
import {Menu} from 'antd'
import {PieChartOutlined} from '@ant-design/icons'
import React, {useState} from 'react';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(item: any) {
  return item;
}


export default function DashboardAsideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {auth}: any = usePage().props

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items: any = [
    getItem({
      key: 'dashboard',
      label: <InertiaLink className="font-bold text-lg" href={route('dashboard.index')}>Dashboard</InertiaLink>,
      type: 'group',
      icon: <PieChartOutlined/>,
    }),

    // {}
    // getItem(<Button
    //   onClick={toggleCollapsed}
    //   style={{
    //     backgroundColor: "#001529"
    //   }}
    // >
    //   {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
    // </Button>),
    // getItem(<div><h3 className="text-white text-left">{auth.user.name}</h3>
    //   </div>
    //   , auth.user.name, <CustomerServiceOutlined/>),
  ]


  return (
    <div
      style={{
        width: 256,
        height: "100vh"
      }}
    >

      <Menu
        className="h-[100vh]"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

