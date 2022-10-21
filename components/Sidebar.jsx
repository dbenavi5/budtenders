/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SidebarContainer, SideLogoContainer } from './styles/SidebarStyles'

const Sidebar = () => {
  return (
      <SidebarContainer>
          <SideLogoContainer>
              <img alt='logo'/>
          </SideLogoContainer>
    </SidebarContainer>
  )
}

export default Sidebar