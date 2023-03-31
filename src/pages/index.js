import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'


// import { client } from 'lib/client'

import { Product, HeroBanner, FooterBanner, Swiper, AboutHomePage, FeatureProduct, Footer, Navbar, CarouselTestimonial} from 'components'
import HomeSwiper from "components/HomeSwiper";
import axios from "../../axios";
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {


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
        uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null ,
    })
    .then(res => {
    //  console.log(res.data)
     setGetCart(res.data)
    })
    .catch(err => {
      console.log(err)
      })
    },[getCart])

    const [getUserData, setGetUserData] = useState([])
  useEffect(() => {
    axios.post('/',{
      type:"userDetail",
      username:localStorage.getItem('username')
  })
  .then(res => {
  //  console.log(res.data)
   setGetUserData(res.data)
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
  },[])


  // const uid = typeof window !== "undefined" ? localStorage.getItem('uid') : null
  const [uid , setUid] = useState(null)
  useEffect(()=>{
    setUid(localStorage.getItem('uid'))
  },[uid])



  return (
    <>
    <Head>
      <title>Calibreply</title>
      <meta charset="UTF-8"/>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>


    <header>
        <Link href='/' className='logo'>
            <Image height='50' width='150' alt="calibreply" src='https://www.calibreply.com/img/logo.1b48625e.webp'/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label htmlFor='menu-bar'><GiHamburgerMenu/></label>

        <nav className='navbar'>
            <ul>
                
                <li><Link href='/'  className='active'>Home</Link></li>
               
                    <li><Link href='#' >Products</Link>
                    <ul >
                    {navbar1.length > 0 && navbar1.map((navData)=>
                        <li key={navData.id}><Link href={`/product/${navData.id}`}>{navData.heading}</Link>
                            <ul>
                                {navData.subcategory && navData.subcategory.map((sub)=>
                                 <li key={navData.id}>
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
                <li><Link href='/testimonials'>Testimonials</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li>{uid ? <Link href='/profile'>Profile</Link>:<Link href='/login'>Login</Link>}</li>
                {/* <li><Link href='/login'></Link></li> */}
               
             
            </ul>
            <ul className='menu menu-main header-menu' >
                <li>
                  <Link href='/cart'> 
                     <span><i><FaShoppingCart/></i></span>
                     <span id="cartcount" className="counter-cart">{getCart.count}</span>
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
    <HeroBanner/>

    {/* <CarouselTestimonial/> */}
    <HomeSwiper/>
    <AboutHomePage/>

    <FeatureProduct/>
    <Footer/>
    </>
  )
}
// export async function getServerSideProps() {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData =  await client.fetch(bannerQuery);
  
//   return {
//     props: {products, bannerData}, // will be passed to the page component as props
//   }
// }


export default Home;

// export async function getStaticProps(context) {
//   // Fetch data from external API
//   const res = await fetch(`https://calibreply.jurysoftprojects.com/backend/api/api.php` , {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({type: 'getMyCart' })
//     })


//   const data = await res.json()
  
//   console.log(data)
//   return { props: {data: data.data } }
// }


