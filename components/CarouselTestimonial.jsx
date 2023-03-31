import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/aboutCarousel.module.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import lists from './testimonialsList';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

const CarouselTestimonial = () => {
  return (
    <>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {lists.map((list)=>
     <SwiperSlide key={list.id}>
<div key={list.id} style={{marginTop:'10%'}} className={`${styles.cards_body} row`}> 
   
   <div className='col-12'>
     <div className={styles.thumb}>
     <Image height='200' width='200' alt='' src={list.image}/>
     </div>
  </div>
  <div className='col-12' style={{marginTop:'20px'}}>
     <h5 className={styles.name}>
      {list.name}
      </h5>
  </div>
   <div className='col-12 mt-10 mb-10'>
      <div className={`${styles.text} ${styles.txt_sty}`}>
      <p>
       <span style={{color:'rgb(0,0,0)', fontWeight:'200'}}>
       {list.about}
       </span>
     </p>
 </div>
</div>
</div>
     </SwiperSlide>
    )}
   
  </Swiper>
  
  </>
  )
}

export default CarouselTestimonial