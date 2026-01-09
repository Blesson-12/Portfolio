import { useState } from 'react'

import './App.css'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import ContactUs from './Component/ContactUs'

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <ContactUs/>
    </>
  )
}

export default App
