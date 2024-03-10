import React from 'react'
import './Feedback.css'
import { FiArrowRight } from 'react-icons/fi';
import arrow from '../../assets/arrow_right_alt-24px (1).svg'
import star from '../../assets/grade-24px (1).svg'
import man from '../../assets/photography-of-a-guy-wearing-green-shirt-1222271.png'
function Feedback() {
  return (
    <div className='feedback-container'>
      <div className='feedback-upercontainer'>
      <div>
         <p className='feedback-title'>Our Students Feedback</p>
         <p className='feedback-subtitle'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
      </div>
      <div>
        <button className='arrow-btn'>Read More  <FiArrowRight /></button>
      </div>
      </div>
      <div className='feedback-card'>
            <img src={man} className='manimg'/>
            <div className='feedback-rightcontainer'>
                <div className='stars'>
                {Array(5)
                .fill(true)
                .map((item, index) => (
                 <div className='star'>
                 <img src={star} className='image-feed'/>
                 </div>
                ))}
                </div>
                <div className='three'>
                <div className='person-feedback'>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</div>
                <div className='peson-name'>Riad Isalm</div>
                <div className='person-detail'>Product Manager. <span>@Learning.Com</span></div></div>
            </div>
      </div>
    </div>
  )
}

export default Feedback
