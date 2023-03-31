import { AboutBanner, Footer, HeroBanner, Navbar } from 'components'
import styles from '@/styles/About.module.css';
import Gallery from 'components/Gallery'
import Navbar1 from 'components/Navbar1'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Navbar2 from 'components/Navbar2';
import axios from '../../axios';
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';


const Gallery1 = () => {


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

    useEffect(()=>{
      let setIp = JSON.parse(localStorage.getItem("ip_address"));
      if (setIp === null) {
        var min = 100000;
        var max = 999999;
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        localStorage.setItem("ip_address", JSON.stringify(num));     
    }
  },[getCart])
  const [uid , setUid] = useState(null)
  useEffect(()=>{
    setUid(localStorage.getItem('uid'))
  },[uid])

  return (
    <>
     <Head>
        <title>Gallery</title>
    <meta charset="UTF-8"/>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <header>
        <Link href='/' className='logo'>
            <Image alt='logo' width='150'src='https://www.calibreply.com/img/logo.1b48625e.webp' height={50}/>
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
                <li><Link href='/gallery' className='active'>Gallery</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/testimonials'>Testimonials</Link></li>
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
    <section className={styles.page_title}>
            <div className={styles.auto_container}>
                <h1>Gallery</h1>
                <ul className={`${styles.bread_crumb} ${styles.clearfix}`}>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        Gallery
                    </li>
                </ul>
            </div>
    </section>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Gallery1