import React from 'react';
import './About.css';
import cv from '../../image/Rahul_Sharma_CV.pdf';
import { HiDownload } from 'react-icons/hi';
import data1 from './data1';
import Card from '../../components/Card';
import main from '../../image/image2.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={main} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data1.map(item => {
                return (
                  <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
                )
                
              })
            }
          </div>
          <p>
             Hi, I'm Rahul, and I graduated from the Vinoba Bhave University in 2021 with a degree in Zoology Honours. My interests are in Front End Engineering, and I love to create beautiful and modern design products with delightful user experiences.
          </p>
          <p>
            I am looking for a reputed company where i can use my expertise for the company's welfare and upliftment.
          </p>
          <a href={cv} download  className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About