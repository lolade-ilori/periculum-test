import React, { useState } from 'react'
import { NavIcon, SidebarContainer } from './sidebar.styles'

import home from '../../assets/images/svg/home.svg'
import doc from '../../assets/images/svg/document.svg'
import logout from '../../assets/images/svg/logout.svg'

const Sidebar = () => {
    const [navClicked, setNavClicked] = useState('home')

    const handleNavClicked = (item:string) => {
        setNavClicked(item)
    }

  return (
    <SidebarContainer>
        <nav>
            <div className="top-nav-wrapper">
                <div className="img-wrap" onClick={() => handleNavClicked('home')}>
                    <NavIcon active={navClicked === 'home' ? true : false} src={home}/>
                </div>

                <div className="img-wrap" onClick={() => handleNavClicked('profile')}>
                    <NavIcon active={navClicked === 'profile' ? true : false}  src={doc}/>
                </div>
            </div>

            <div className="footer-nav-wrapper">
                <div className="img-wrap">
                    <NavIcon  src={logout}/>
                </div>
            </div>
        </nav>
    </SidebarContainer>
  )
}

export default Sidebar