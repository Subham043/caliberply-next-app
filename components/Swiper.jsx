import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '@/styles/aboutCarousel.module.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import lists from "./testimonialsList";
import axios from "../axios";
import Image from "next/image";

const Slider = () => {

  const [testimonialsData, setTestimonialsData] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"testimonial"
      })
      .then(res => {
      //  console.log(res.data.data)
       setTestimonialsData(res.data.data)
      })
      .catch(err => {
        console.log(err)
        })
  },[])
  // const abc = JSON.parse(testimonialsData.description)
  // console.log(abc)
//  console.log(JSON.parse(testimonialsData[0].description))
function createMarkup(c) {
  return { __html: c };
}

  return (
    <>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    // pagination={{
    //   clickable: true,
    // }}
    // navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {testimonialsData.length > 0 && testimonialsData.map((list)=>
     <SwiperSlide key={list.id}>
<div key={list.id} style={{marginTop:'10%'}} className={`${styles.cards_body} row`}> 
   
   <div className='col-12'>
     <div className={styles.thumb}>
     <Image alt="" height='50' width='20' src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Content/${list.image}`}/>
     </div>
  </div>
  <div className='col-12' style={{marginTop:'20px'}}>
     <h5 className={styles.name}>
      {list.heading}
      </h5>
  </div>
   <div className='col-12 mt-10 mb-10'>
      {<div className={`${styles.text} ${styles.txt_sty}`} dangerouslySetInnerHTML={createMarkup(list.description)}></div>}
        {/* {JSON.parse(list.description)} */}
      {/* <p>
       <span style={{color:'rgb(0,0,0)', fontWeight:'200'}}>
       {list.description}
       </span>
     </p> */}
 
</div>
</div>
     </SwiperSlide>
    )}
   
  </Swiper>
    </>
    
  );
}

export default Slider;