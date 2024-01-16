import React from 'react'
import "./App.css"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
const App = () => {
  return (
    <>
       <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App

