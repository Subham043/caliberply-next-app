import axios from '../../axios'
import { AboutBanner, CarouselTestimonial, Footer, Navbar } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Slider from 'components/Swiper'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const Testimonials = () => {


  const [navbar1, setNavbar] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"getAllCategory"
      })
      .then(res => {
      //  console.log(res.data)
       setNavbar(res.data.category)
      })
      .catch(err => {
        console.log(err)
        })
  },[])


  const [getCart, setGetCart] = useState([])
  useEffect(() => {
    axios.post('/',{
        type:"getMyCart",
        ip:localStorage.getItem('ip_address'),
        uid:localStorage.getItem('uid') ? localStorage.getItem('uid'): null,
    })
    .then(res => {
     console.log(res.data)
     setGetCart(res.data)
    })
    .catch(err => {
      console.log(err)
      })
    },[])

    const [uid , setUid] = useState(null)
    useEffect(()=>{
      setUid(localStorage.getItem('uid'))
    },[uid])

  return (
    <>
    <Head>
        <title>Testimonials</title>
    <meta charset="UTF-8"/>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <header>
        <Link href='/' className='logo'>
            <Image width='150' alt='' src='https://www.calibreply.com/img/logo.1b48625e.webp' height={50}/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label for='menu-bar'><GiHamburgerMenu/></label>

        <nav className='navbar'>
            <ul>
                
                <li><Link href='/' >Home</Link></li>
               
                    <li><Link href='#' >Products</Link>
                    <ul >
                    {navbar1.length > 0 && navbar1.map((navData)=>
                        <li key={navData.id}><Link href={`/product/${navData.id}`}>{navData.heading}</Link>
                            <ul>
                                {navData.subcategory && navData.subcategory.map((sub)=>
                                 <li key={sub.id}>
                                    <Link href={`/product/${sub.id}`}>{sub.heading}</Link>
                                </li>
                                )}
                            </ul>
                        </li>
                        )}
                    </ul>
                </li>
                <li><Link href='/tools'>Tools</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/testimonials' className='active'>Testimonials</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li>{uid ? <Link href='/profile'>Profile</Link> : <Link href='/login'>Login</Link>}</li>
               
             
            </ul>
            <ul className='menu menu-main header-menu' >
                <li>
                  <Link href='/cart'> 
                     <span><i><FaShoppingCart/></i></span>
                     <span id="cartcount" class="counter-cart">{getCart.count}</span>
                 </Link>
                </li>
                <li>
                  <Link href='/wishlist'> 
                     <span><i><FaHeart/></i></span>
                 </Link>
                </li>
            </ul>
        </nav>
    </header>
        <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Testimonials</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                    Testimonials
                    </li>
                </ul>
            </div>
    </section>
        <Slider/>
        <Footer/>
    </>
  )
}

export default Testimonials