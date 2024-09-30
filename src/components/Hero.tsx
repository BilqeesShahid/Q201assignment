"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {
  const settings={
    dots:true,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    autoPlay:true,
    pauseOnHover:false,
 };
 const slideData=[
  {
    id:0,
    img:"/glasses1.jpg",
    title:"Trending Accessories",
    mainTitle:"Modern SunGlasses",
    price:"Upto 5000",
  },
  {
    id:1,
    img:"/lawn.webp",
    title:"Sale Offer",
    mainTitle:"New Fashion Summer Sale",
    price:"Upto 5000",
  },
  {
    id:2,
    img:"/purse4.jpg",
    title:"Trending Item",
    mainTitle:"Women's Latest Fashion Sale",
    price:"Upto 5000",
  }
 ]
 
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}


             />))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
