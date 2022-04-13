import React from 'react'
import './Header.css'
import CTA from'./Cta'

import HeaderSocials from './HeaderSocials'
import MainPhoto from'./MainPhoto';
import Sd from './Sd'
const Header = () => {
  return (
    <header>
     <div className='container header__container'>
        <h5>KEEP CALM & GALLOP ON</h5>
        <h1>Leading Gallopers</h1>
        <h5 className="text-light">HORSE RIDING CLUB</h5>
        <CTA/>
        <HeaderSocials/>
        <MainPhoto/>
        <Sd/>

    
     
     </div>
     
    </header>
  )
}

export default Header