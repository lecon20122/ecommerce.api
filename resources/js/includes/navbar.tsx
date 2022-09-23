import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {InertiaLink} from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import {Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

export default function Navbar() {
  return (
    <header className="h-14 z-10 py-3 bg-white shadow-sm border-b border-gray-200">
      <div className="container h-full flex items-center justify-between px-6 mx-auto">
        <Button
          type="primary"
          // onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {/*{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}*/}
        </Button>

        <ul className="flex items-center flex-shrink-0 space-x-2">
          <li>
            <InertiaLink href={route('admin.logout')}
                         className="w-10 h-10 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden logout"
                         aria-label="Button name">
              <FontAwesomeIcon icon={faSignOutAlt}/></InertiaLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
