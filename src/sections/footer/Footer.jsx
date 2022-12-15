import React from 'react'
import './Footer.css';
import data from './data';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container footer__container">
            <ul className='footer__menu'>
            {
                data.map(item => <li key={item.id}>
                  <div className='icon-menu'>
                      <div className='icon'>{item.icon}</div>
                    <a href={item.link}>{item.title}</a>
                  </div>
                </li>)
            }
            </ul>
        </div>
    </footer>
  )
}

export default Footer