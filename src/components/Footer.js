import React from 'react'
import '../styles/footer.css'
import { Image } from 'react-bootstrap'
import eye from '../assets/EyeLogoHollowWhite.png'
import logo from '../assets/TextLogoWhite.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div style={{display: 'flex', gap: 10}}>
          <Image src={eye} className='eye'/>
          <Image src={logo} className='text' />
        </div>
        <h1 className='text-name'>by Joshua Popp</h1>
    </div>
  )
}

export default Footer