import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/leading_gallopers_riding_club_/" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://www.facebook.com/leadinggallopersridingclub" target="_blank"><AiOutlineFacebook/></a>
        <a href="https://api.whatsapp.com/send?phone=919675999979" target="_blank"><AiOutlineWhatsApp/></a>
    </div>
  )
}

export default HeaderSocials