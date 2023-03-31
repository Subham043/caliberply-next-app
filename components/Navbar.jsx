import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
    <header>
            <div class="container">
                <div class="logo">
                    <Image height={200} width={200} src="https://www.calibreply.com/img/logo.1b48625e.webp" alt="calibreply" />
                </div>
                <nav>
                    <ul className='menu'>
                        <li className='active'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                        <Link href='/category'>Products</Link>
                            <ul className='submenu'>
                                <li>
                                    Plywood
                                    <ul className='submenu2'>
                                        <li>Commercial Plywood (MR)</li>
                                        <li>Water Resistant Plywood (BWR)</li>
                                        <li>Waterproof Plywood (BWP)</li>
                                    </ul>
                                    </li>
                                <li>
                                    BLock Board
                                    <ul className='submenu2'>
                                        <li>100% Hardwood BlockBoard</li>
                                        <li>100% Pinewood BlockBoard</li>
                                    </ul>
                                    </li>
                                <li>
                                    Shuttering Plywood
                                    <ul className='submenu2'>
                                        <li>12MM - 25kgs</li>
                                        <li>12MM - 30kgs</li>
                                        <li>12MM - 34kgs</li>
                                    </ul>
                                    </li>
                                <li>Laminates

                                    <ul className='submenu2'>
                                        <li>Half Whites Laminates</li>
                                        <li>Fabric Liner Laminates</li>
                                        <li>Decolam/colour Laminates</li>
                                        <li>New Category</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Tools</a>
                        </li>
                        <li>
                            <a>Gallery</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Contact us</a>
                        </li>
                        <li>
                            <a>My Profile</a>
                        </li>


                          <li  style={{marginLeft:"60px", fontSize:"20px", cursor:"pointer"}}>
                          <FaShoppingCart style={{marginLeft:"5px"}}/>
                          <FaHeart style={{marginLeft:"20px"}}/>

                          </li>
              
                       
                    </ul>
                </nav>
                <div>
                  
                    
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar