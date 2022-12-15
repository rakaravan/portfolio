import React from 'react'
import './Portfolio.css';
import ProjectData from './data';
import Card from '../../components/Card';


const Projects = () => {
  return (
    <section id="portfolio">
       <div className="portfolio__container">
            <div className='portfolio__head'>
               <h2>Recent Projects</h2>
            </div>
            <div className="portfolio__cards">
                {
                  ProjectData.map(item => {
                    return (
                       <Card key={item.id} className='portfolio__card'> 
                            <div className="portfolio__card-image">
                                <img src={item.image}  />
                            </div>
                            <div className="portfolio__card-desc">
                                <h3>{item.title}</h3>
                                <p> {item.desc} </p>
                                <div className='portfolio__card-btns'>
                                    <a className="btn primary" target="_blank" href={item.link_url} rel='noreferrer noopener'>View</a>
                                    <a className="btn" target="_blank" href={item.link_code} rel='noreferrer noopener'>Source Code</a>
                                </div>
                            </div>

                       </Card>
                    )
                  })
                }
            </div>
            
       </div>
    </section>
  )
}

export default Projects