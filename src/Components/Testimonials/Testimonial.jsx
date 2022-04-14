import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials = () => {

   const clients =[
    {
      img: profilePic1,
      rewiev:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: profilePic2,
      rewiev:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: profilePic3,
      rewiev:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: profilePic4,
      rewiev:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    ]

  return (
    <div className="t-wrapper" id='Testimonials' >
       <div className="t-heading">
        <span> Client always get</span>
        <span> Exceptional work</span>
        <span> from me...</span>

      <div className="blur t-blur1" style={{background: "var(--purple)"}} > </div>  
      <div className="blur t-blur2" style={{background: "skyblue"}} > </div>  
      </div>
      {/* slider */}
      <Swiper
      
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}      
      >
      {clients.map((client, index) => {
        return(
          <SwiperSlide key={index}>
            <div className="testimonial">   
            <img src={client.img} alt="" />
            <span>{client.rewiev}</span>
            </div>
             </SwiperSlide>
        )
      })}

      

         
      </Swiper>
    </div>
  )
}

export default Testimonials