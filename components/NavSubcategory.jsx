import Link from 'next/link'
import axios from '../axios'
import React, { useEffect, useState } from 'react'

const NavSubcategory = ({navData}) => {

    // const [navbar2, setNavbar1] = useState([])
    // useEffect(() => {
    //     axios.post('/',{
    //         type:"getAllCategory"
    //     })
    //     .then(res => {
    //      console.log(res.data)
    //      setNavbar1(res.data.category)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       })
    // })



  return (
    <>
    
    {navData.subcategory.length > 0 && navData.subcategory.map((nav2)=>
    <li key={nav2.id}><Link href='#'>{nav2.heading}</Link></li>
    )
}
  </>
  )}
export default NavSubcategory;