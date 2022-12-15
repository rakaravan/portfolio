import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Projects from './sections/portfolio/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App;