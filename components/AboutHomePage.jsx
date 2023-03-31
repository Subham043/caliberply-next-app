import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';


const AboutHomePage = () => {

  return (
    <div className='main-container1'>
        <div className='sec-heading'>
        <h1 className='h1'>
            <span>About</span> Us
        </h1>
        </div>
 <div className='about_us_home col-lg-12'>
 <div className='about_us_home_img col-sm-6' >
     <Image height='200' width='200' src='https://www.calibreply.com/img/carpenter2-home-tiles.f834ff8f.png' alt=''/>
 </div>
 <div className='about_us_home_para col-sm-6'>
     <p>
     We, Ecogen Industries, Located at Mysore Road, Near R.V. Engineering College, Mysore Road, Bangalore, Karnataka have an excellent reputation for consistently providing high quality Plywood products and services. This fact is based on the strong belief and with the principles of unbeatable quality, wide selection, dedicated service & prompt delivery we offer. We provide our customers with genuine value-for-money goods that are durable in nature. We specialist in high quality hardwood plywood, lumber, hardware, tools & finishing supplies.
     </p>
 </div>
</div>

       
    </div>
  )
}

export default AboutHomePage