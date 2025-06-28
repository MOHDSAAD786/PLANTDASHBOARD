import React from 'react'
import './Top.scss'

// Imported Icons
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'


// Imported Image
import adminImage from '../../../assets/adminimage.jpeg'
import image1 from '../../../assets/image4.jpg'
import video from '../../../assets/video.mp4'


const Top = () => {
  return (
    <div className="topSection">
      
      {/* Header Section */}
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Saad Pranti.</h1>
          <p>Hello Saad, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={adminImage} alt="Admin" />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fastest-growing industry today is natural mode products!</p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
             <div className="main flex">
                 <div className="textDiv">
                  <h1>My Stat</h1>
                  <div className="flex">
                    <span>
                      Today <br /> <small>4 Orders</small>
                    </span>
                     <span>
                      This Month <br /> <small>127  Orders</small>
                    </span>
                  </div>
                   <span className='flex link'>
                      Go to my orders <BsArrowRightShort  className="icon"/>
                   </span>
                 </div>
                 <div className="imgDiv">
                  <img src={image1} alt="Image Name" />
                 </div>
               </div>
             <div className="sideBarCard">
               <BsQuestionCircle  className='icon'/>
                 <div className="cardcontent">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <h3>Help Center</h3>
                    <p>Having trouble in plant contact us from for more question.</p>
                    <button className='btn'>Go to help center</button>
                    </div>
                   </div>
        </div>

      </div>

    </div>
  )
}

export default Top
