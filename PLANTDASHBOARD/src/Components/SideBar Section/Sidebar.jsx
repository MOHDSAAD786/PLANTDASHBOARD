import React from 'react';
import './sidebar.css'
import './sidebar.scss'
// Imported image
import Logo from '../../assets/Logo2.png';

// Imported icons
import { IoMdSpeedometer } from 'react-icons/io';  // Corrected: from io5
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';  // Corrected: from md
import { BsQuestionCircle, BsTrophy } from 'react-icons/bs'; // Corrected: from bs
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';




function Sidebar() {
  return (
    <div className='sideBar grid'>
      {/* Logo Section */}
      <div className='LogoDiv flex'>
        <img src={Logo} alt="Logo" />
        <h2>Planti</h2>
      </div>

      {/* Menu Section */}
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Order</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>

        </ul>
      </div>
      {/* Menu Section */}
      <div className="settingDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Billing
                </span>
            </a>
          </li>

        </ul>
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
  );
}

export default Sidebar;
