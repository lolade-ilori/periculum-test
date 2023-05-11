import React from 'react'
import { PericulumHeader } from './header.styles'

import setting from '../../assets/images/svg/setting.svg'

const Header = () => {
  return (
    <PericulumHeader>
        <nav>
            <h5>credit chart</h5>

            <div className="settings-icon-wrap">
                <img src={setting}/>
            </div>
        </nav>
    </PericulumHeader>
  )
}

export default Header