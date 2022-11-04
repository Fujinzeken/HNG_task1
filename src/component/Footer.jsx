import React from 'react'
import i4g from '../assets/I4G.svg'
import zuri from '../assets/zuri.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <img src={zuri} alt='Zuri.png'/>
    <p>HNG Internship 9 Frontend Task</p>
    <img src={i4g} alt='I4G.png'/>
  </footer>

  )
}

export default Footer
