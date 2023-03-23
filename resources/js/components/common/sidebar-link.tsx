import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy-js'

interface IProps {
  routeName: string
  children: React.ReactNode | string
}

export default function SidebarLink({ routeName, children }: IProps) {
  return (
    <InertiaLink href={route(routeName)}>
      {children}
    </InertiaLink>
  )
}
