import './Contact.css'
import data from './data';
import Card from './../../components/Card';
import {AiOutlineMail } from 'react-icons/ai';



const Contact = () => {
  return (
    <section id="contact">
        <div className="contact__container container">
            <h2>Get In Touch</h2>
            <p>Shoot me a message via any of the links below!</p>
            <div className="contact__icons">
              
            <div className='icons'>
                 <a  href='mailto: rahulkr.sharma110@gmail.com'><AiOutlineMail /></a>

            </div>
             
              {
                  data.map(item => {
                    return (
                      <Card key={item.id} className='contact__card'>
                          <a href={item.link} target="_blank">{item.icon}</a>
                      </Card>
                    )
                })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Contact