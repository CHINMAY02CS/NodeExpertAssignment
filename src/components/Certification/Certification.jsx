import React from 'react'
import './Certification.css'
import usericon from '../../assets/supervised_user_circle-24px (2).svg'
import assignmenticon from '../../assets/assignment_turned_in-24px.svg'
const carddetails = [
    {
        id:1,
        img:usericon,
        number:'100+',
        text:'Batch Complete'
    },
    {
        id:2,
        img:usericon,
        number:'50+',
        text:'Active Batches'
    },
    {
        id:3,
        img:assignmenticon,
        number:'10,000+',
        text:'Student Satisfied'
    },
    {
        id:4,
        img:assignmenticon,
        number:'10+',
        text:'Course Modules'
    }
]
function Certification() {
  return (
    <div className='certification-container'>
      <p className='certification-title'>We Completed 1200+ Certification Program Successfully & Counting</p>
      <p className='certification-subtitle'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
      <div className='certification-cards'>
            {
                carddetails.map((obj)=>{
                    return(
                        <div className='icon-card'>
                            <img src={obj.img}/>
                            <div className='text-below-icon'>
                                <p className='number'>{obj.number}</p>
                                <p className='text'>{obj.text}</p>
                            </div>
                        </div>
                    )
                })
            }
      </div>
    </div>
  )
}

export default Certification
