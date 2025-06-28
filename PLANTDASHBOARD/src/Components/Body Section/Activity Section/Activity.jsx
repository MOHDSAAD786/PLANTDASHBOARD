import React from 'react'
import './Activity.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../../assets/Plantseller.png'
import img2 from '../../../assets/plantseller2.png'
import img3 from '../../../assets/plantseller3.png'
import img4 from '../../../assets/plantseller4.png'


export const Activity = () => {
  return (
    <div className='activitiSection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
             See All
             <BsArrowRightShort  className="icon"/>
        </button>
      </div>
    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={img3} alt="Customer Image"/>
        <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min  ago
        </div>
      </div>
       <div className="singleCustomer flex">
        <img src={img1} alt="Customer Image"/>
        <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min  ago
        </div>
      </div>
       <div className="singleCustomer flex">
        <img src={img2} alt="Customer Image"/>
        <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          10 min  ago
        </div>
      </div>
       <div className="singleCustomer flex">
        <img src={img3} alt="Customer Image"/>
        <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          20 min  ago
        </div>
      </div>
       <div className="singleCustomer flex">
        <img src={img4} alt="Customer Image"/>
        <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          30 min  ago
        </div>
      </div>
      
      
    </div>
    </div>
  )
}
export default Activity
