import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import axios from "../axios";
import Link from "next/link";
import Image from "next/image";

const HomeSwiper = () => {

    const [ourproduct, setOurProduct] = useState([])

    useEffect(() => {
        axios.post('/',{
            type:"getAllCategory"
        })
        .then(res => {
        //  console.log(res.data.category)
         setOurProduct(res.data.category)
        })
        .catch(err => {
          console.log(err)
          })
    },[])


  return (
    <div className="main-container1">
    <div className='sec-heading'>
        <h1 className='h1'>
            <span>Our</span> Products
        </h1>
        </div>
    <Swiper
        effect={"flip"}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={false}
        autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {ourproduct.map((prodImage)=>
        <SwiperSlide key={prodImage.id}>
        <h4>{prodImage.heading}</h4>
        <Link href={`/product/${prodImage.id}`}>
          <Image height='300' alt="" width='200'src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Category/${prodImage.photo}`}/>
        </Link>
        </SwiperSlide>
        )}
        <div style={{textAlign:'center'}}>

        <Link className="p-btn btn my-3" href='/product/132'>Book Now</Link>
       </div>
        {/* <SwiperSlide>
        <a>Subham</a>
          <img src="https://calibreply.jurysoftprojects.com/backend/api/uploads/Category/plywood.jpg"/>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide> */}

      </Swiper>
    </div>
  )
}

export default HomeSwiper