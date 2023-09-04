import React from 'react'
import '../styles/footer.css'
import { Image } from 'react-bootstrap'
import eye from '../assets/EyeLogoHollowWhite.png'
import logo from '../assets/TextLogoWhite.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <Image src={eye} className='eye'/>
        <Image src={logo} className='text' />
    </div>
  )
}

export default Footer