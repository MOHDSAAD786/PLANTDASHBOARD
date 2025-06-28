import React from 'react'
import './Listing.scss'
//imported icon  ========>
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
//Imported Image ==========>
  import img1 from '../../../assets/plant2.png'
  import img2 from '../../../assets/plant3.0.png'
  import img3 from '../../../assets/plant4.0png.webp'
  import img4 from '../../../assets/plant5.0.png'
  import img6 from'../../../assets/Plantseller.png'
  import img7 from'../../../assets/plantseller2.png'
  import img8 from'../../../assets/plantseller3.png'
  import img9 from'../../../assets/plantseller4.png'

export const Listing  = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>my Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort  className="icon"/>
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>Plant 1</h3>
        </div>
         <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>Plant 2</h3>
        </div>
         <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3>Plant 3</h3>
        </div>
         <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img4} alt="Image Name" />
          <h3>Plant 4</h3>
        </div>
      </div>
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort  className="icon"/>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img6} alt="User Image" />
              <img src={img7} alt="User Image" />
              <img src={img8} alt="User Image" />
              <img src={img9} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14,556  Plant Solid<br />
                <small>
                  21 sellers  <span className='date'>7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
         <div className="topSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort  className="icon"/>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img7} alt="User Image" />
              <img src={img8} alt="User Image" />
              <img src={img6} alt="User Image" />
              <img src={img9} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556  Plant Solid<br />
                <small>
                  26 sellers  <span className='date'>31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Listing;
