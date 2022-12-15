import React from 'react'
import './Header.css'
import main from '../../image/image.jpg'
import data from './data';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={main} alt="Header Portrait" />
        </div>
        <h3>Rahul Sharma</h3>
        <p>A Front-End Developer with good experience specializing in websites and user interface designs</p>
       
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} title={item.title} target="_blank" rel='noopener noreferrer'>{item.icon}</a>)
          }

        </div>
      </div>
    </header>
  )
}

export default Header