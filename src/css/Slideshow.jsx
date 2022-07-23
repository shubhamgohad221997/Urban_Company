import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Box,Image } from "@chakra-ui/react";

 function Slideshow1() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1658399249604-35eb31.jpeg"></Image></Box> </SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1658399252740-bdab51.jpeg"></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1658399244261-30ec5d.jpeg"></Image></Box></SwiperSlide>
       
       
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657022000977-36a913.jpeg"></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718623036-5a0936.jpeg"></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718622423-e36bd5.jpeg"></Image></Box></SwiperSlide>
        {/* <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide> */}
      </Swiper>
    </>
  );
}

function Slideshow2() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"></Image><p className='ipg1'>Bathroom And Kitchen Cleaning</p></Box> </SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg"></Image><p className='ipg1'>Full Home Cleaning</p></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg"></Image><p className='ipg1'>Sofa & Carpet Cleaning</p></Box></SwiperSlide>
       
       
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg"></Image><p className='ipg1'>Cockroach Pest Control</p></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg"></Image><p className='ipg1'>Bed Bugs Control</p></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490742113-7c2635.jpeg"></Image><p className='ipg1'>Termite Control</p></Box></SwiperSlide>
        {/* <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide>
        <SwiperSlide><Box className="swb"><Image className="slimg" src=""></Image></Box></SwiperSlide> */}
      </Swiper>
    </>
  );
}

export{Slideshow2,Slideshow1}