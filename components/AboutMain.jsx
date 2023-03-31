import React, { useEffect, useState } from 'react'
import styles from '@/styles/About.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { FaListAlt, FaTruck,FaThumbsUp } from 'react-icons/fa';
import CarouselTestimonial from './CarouselTestimonial';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import Image from 'next/image';
import axios from '../axios';


const AboutMain = () => {

    const [aboutData, setAboutData] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getAboutus"
        })
        .then(res => {
        //  console.log(res.data)
        // if(Array.isArray(res.data)){
  
            setAboutData(res.data)
        // }
        })
        .catch(err => {
          console.log(err)
          })
    },[])

    // useEffect(()=>{
    //     let aboutbody = JSON.parse(aboutData.pbody)
    //     console.log(aboutbody)
    // })
    function createMarkup(c) {
        return { __html: c };
    }
  return (

    <>
    <section className={styles.about_us}>
        <div className={styles.auto_container}>
            <div className='row clearfix'>
                <div className='content_column col-lg-6 col-md-12 col-sm-12'>
                    <div className={styles.inner_column}>
                        <div className={styles.sec_title}>
                            <h2 style={{textTransform:'uppercase'}}>{aboutData && aboutData.heading}</h2>
                        </div>
                        <div className={styles.about_years}>
                            <span className={styles.years}>35</span>
                            <h3>Years Of Experience</h3>
                        </div>
                        {<div className={`${styles.text_box} ${styles.txt_sty}`} dangerouslySetInnerHTML={createMarkup(aboutData.pbody)}></div>}
                    </div>
                   
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12 hidden-sm">
                    <div className={styles.inner_column}>
                            <div className={`${styles.video_box}`} style={{visibility:'visible', animationName:'fadeIn'}}>
                                    <figure className={styles.image}>
                                            <Image height='400' alt='' width='400' src='https://calibreply.jurysoftprojects.com/backend/api/uploads/pages/aboutus.jpg'/>
                                    </figure>
                            </div>
                    </div>
            </div>
                
            </div>
            
        </div>
    </section>

    <section className={`${styles.call_to_action} ${styles.alternate} ${styles.call_action_bg_img}`}>
            <div className={styles.auto_container}>
                <div className={styles.content_box}>
                    <h2>
                    Provide You The Highest Quality Work <br/>
                    That Meets Your Expectation.
                    </h2>
                </div>
                <div className={styles.fact_counter}>
                    <div className={`${styles.row} ${styles.clearfix} row`}>
                        <div className='counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp mb-10'>
                            <div className={`${styles.inner_column} ${styles.counter}`}>
                                <div className={styles.count_box}>
                                    <span data-speed='3000' data-stop='30' className={styles.count_text}>20</span>+
                                </div>
                                <h4 className={styles.counter_title}>
                                    Years of Carpenting <br/>
                                    Experience
                                </h4>
                            </div>
                        </div>
                        <div className='counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp mb-10'>
                            <div className={`${styles.inner_column} ${styles.counter}`}>
                                <div className={styles.count_box}>
                                    <span data-speed='3000' data-stop='30' className={styles.count_text}>50000</span>+
                                </div>
                                <h4 className={styles.counter_title}>
                                Happy Customer
 <br/>
 with our work
                                </h4>
                            </div>
                        </div>
                        <div className='counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp mb-10'>
                            <div className={`${styles.inner_column} ${styles.counter}`}>
                                <div className={styles.count_box}>
                                    <span data-speed='3000' data-stop='30' className={styles.count_text}>300</span>+
                                </div>
                                <h4 className={styles.counter_title}>
                                Best teams with <br/>
                                dedicated carpenters
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <section className='fluid-section-one hidden-sm pt-0'>
        <div className='outer-container clearfix'>
            <div className={styles.outer_container}>
                <div className={styles.content_col}>
                    <div className={styles.inner_col}>
                        <div className={styles.sec_title2}>
                             <h2>Why Choose Us</h2>
                        </div>
                        <div className={`${styles.choose} row`}>
                            <div className='feature-block-two col-lg-4 col-md-4'>
                                <div className={styles.inner_box}>
                                    <span className='icon flaticon-24-hours'></span>
                                    <p><FaListAlt/></p>
                                    <h4>PROFESSIONAL SERVICES</h4>
                                </div>
                            </div>
                            <div className='feature-block-two col-lg-4 col-md-4'>
                                <div className={styles.inner_box}>
                                    <span className='icon flaticon-24-hours'></span>
                                    <p><FaThumbsUp/></p>
                                    <h4>QUALITY CHECK & ASSURANCE</h4>
                                </div>
                            </div>
                            <div className='feature-block-two col-lg-4 col-md-4'>
                                <div className={styles.inner_box}>
                                    <span className='icon flaticon-24-hours'></span>
                                    <p><FaTruck/></p>
                                    <h4>PROMPT DELIVERY</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.image_column1} ${styles.why_bg_img}`}>
                <figure className={styles.image_box}>
                    <Image height='200' width='200' alt='' src='https://www.calibreply.com/img/image-2.0e973d17.jpeg'/>
                </figure>
            </div>
        </div>
    </section>

    <section className='testimonial-section-two style-two pt-0'>
            <div className='auto-container'>
                <div className={`${styles.sec_title} text-center mb-0`}>
                    <h2 className='mb-0'>
                        What Clients Says
                    </h2>
                    <div className={styles.text}>
                        You read our clients review <br/>
                        check this now
                    </div>
                </div>

                
            </div>
    </section>
    


    </>
  )
}

export default AboutMain