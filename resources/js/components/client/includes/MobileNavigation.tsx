import React from 'react';
import {TabBar} from "antd-mobile";
import{
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

function MobileNavigation() {

  const tabs = [
    {
      key: '/home',
      title : 'Home' ,
      icon: <AppOutline />,
    },
    {
      key : '/todo' ,
      title : 'to do' ,
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title : 'message' ,
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title : 'my' ,
      icon: <UserOutline />,
    },
  ]

  return (
    // <div className="btm-nav btm-nav-sm md:hidden">
    //   <button>
    //     <i className="text-gray-400 w-5 pi pi-home text-black"/>
    //     <span className="btm-nav-label">Home</span>
    //   </button>
    //   <button className="active">
    //     <i className="text-gray-400 w-5 pi pi-shopping-cart text-black"/>
    //     <span className="btm-nav-label">Cart</span>
    //   </button>
    //   <button>
    //     <i className="text-gray-400 w-5 pi pi-user text-black"/>
    //     <span className="btm-nav-label">Me</span>
    //   </button>
    // </div>
    <TabBar className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white">
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}

export default MobileNavigation;
