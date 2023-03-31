import { Footer, Navbar } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Wishlist from 'components/Wishlist'
import Link from 'next/link'
import React from 'react'

const Wishlist1 = () => {
  return (
    <>
    
    <Navbar2/>
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Wishlist</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        Wishlist
                    </li>
                </ul>
            </div>
    </section>
    <Wishlist/>
    <Footer/>
    </>
  )
}

export default Wishlist1