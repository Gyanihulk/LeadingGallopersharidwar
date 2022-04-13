import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Contact from './Components/Contacts/Contacts'
import Experience from './Components/Experience/Experience'
import Fotter from './Components/Fotter/Fotter'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Testimonals from './Components/Testimonial/Testimonial'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonals/>
    <Contact/>
    <Fotter/>
    </>
    
  )
}

export default App