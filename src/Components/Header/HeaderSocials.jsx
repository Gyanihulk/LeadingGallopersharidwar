import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://instagram.com" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://facebook.com" target="_blank"><AiOutlineFacebook/></a>
        <a href="https://whatsapp.com" target="_blank"><AiOutlineWhatsApp/></a>
    </div>
  )
}

export default HeaderSocials