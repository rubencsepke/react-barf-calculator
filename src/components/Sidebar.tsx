import React, { ComponentProps, ReactNode } from 'react'
import '../css/sidebar.css'

type SidebarProps = {
  children: ReactNode
}

const Sidebar = ({children}: SidebarProps) => {

  return (
    <aside className="sidebar">
      {children}
    </aside>
  )
}

export default Sidebar;
