import axios from '../../axios'
import { Footer, Navbar } from 'components'
import Contact from 'components/Contact'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'

const Contact1 = () => {


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
    <header>
        <Link href='/' className='logo'>
        <Image width='150' src='https://www.calibreply.com/img/logo.1b48625e.webp' alt='' height={50}/>
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
                <li><Link href='/contact' className='active'>Contact Us</Link></li>
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
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Contact Us</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Contact1