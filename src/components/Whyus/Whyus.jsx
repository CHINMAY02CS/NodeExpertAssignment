import React from 'react'
import './Whyus.css'
import Group from '../../assets/Group 1760.png'
import PlayerComponent from '../../containers/header/PlayerComponent'
function Whyus() {
  return (
    <div className='whyus-container'>
      <p className='whyus-heading'>Why Us</p>
      <p className='whyus-subheading'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>

      <div className='whyus-lowercontainer'>
      <div className='whyus-leftcontainer'>
        <PlayerComponent/>
      </div>
      <div className='whyus-rightcontainer'>
            <p className='right-heading'>Crafting Your Dream Career: Building a Path You Love with us</p>
            <p className='right-subheading1'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            <p className='right-subheading2'>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
            <button className='whyus-btn'>Get More</button>
      </div>
      </div>
    </div>
  )
}

export default Whyus
