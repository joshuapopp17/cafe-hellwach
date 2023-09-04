import React from 'react'
import { Image } from 'react-bootstrap'
import '../styles/menu.css'
import menu from '../assets/MenuNoBottom.png'

const Menu = () => {
  return (
    <div className='menu-screen'>
        <Image src={menu} className='menu-image'></Image>
    </div>
  )
}

export default Menu