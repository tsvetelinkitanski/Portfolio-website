import React from 'react'
import "./Footer.css"

export default function Footer() {
    const getYear = () => new Date().getFullYear();
    
  return (
    <div className='footer-wrapper'>

    <p className='footer'>Copyright &copy; {getYear()}</p>
    </div>
  )
}
