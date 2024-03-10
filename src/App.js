import React from 'react'
import "./App.css"
import {Blog,Possiblity,Header,Features,Footer,WhatGPT3} from "./containers"
import {CTA,Brand,Navbar} from "./components"
import LearningModule from './components/LearningModule/LearningModule'
import Whyus from './components/Whyus/Whyus'
import Certification from './components/Certification/Certification'
import Feedback from './components/Feedback/Feedback'

const App = () => {
  return (
    <div >
      <div className='outer'>
      <div className='gradient__bg'> 
        <Navbar/>
        <Header/>
      </div></div>
      <LearningModule/>
      <Whyus/>
      <Certification/>
      <Feedback/>
      <CTA/>
      <Footer/>

    </div>
  )
}

export default App