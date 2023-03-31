import axios from '../axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRupeeSign, FaShoppingCart,FaHamburger, FaHeart } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'
import NavSubcategory from './NavSubcategory';
import Image from 'next/image';

const Navbar2 = () => {

    const [navbar1, setNavbar] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getAllCategory"
        })
        .then(res => {
        //  console.log(res.data)
        if(Array.isArray(res.data.category)){

            setNavbar(res.data.category)
        }
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
      //  console.log(res.data)
       setGetCart(res.data)
      })
      .catch(err => {
        console.log(err)
        })
      },[getCart])


      useEffect(()=>{
        let setIp = JSON.parse(localStorage.getItem("ip_address"));
        if (setIp === null) {
          var min = 100000;
          var max = 999999;
          var num = Math.floor(Math.random() * (max - min + 1)) + min;
          localStorage.setItem("ip_address", JSON.stringify(num));     
      }
    },[])


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

// const uid = typeof window !== "undefined" ? localStorage.getItem('uid') : null
const [uid , setUid] = useState(null)
  useEffect(()=>{
    setUid(localStorage.getItem('uid'))
  },[uid])
      
   
  return (
    <>
    <header>
        <Link href='/' className='logo'>
            <Image width='150' alt='' src='https://www.calibreply.com/img/logo.1b48625e.webp' height={50}/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label htmlFor='menu-bar'><GiHamburgerMenu/></label>

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
                <li><Link href='/testimonials'>Testimonials</Link></li>
                <li><Link href='https://blog.calibreply.com/'>Blog</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li>{uid ? <Link href='/profile'>Profile</Link> : <Link href='/login'>Login</Link>}</li>
               
             
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
    </>
  )
}

export default Navbar2