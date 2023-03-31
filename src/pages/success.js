import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from '../../axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const success = () => {

    // const [navbar1, setNavbar] = useState([])
    // useEffect(() => {
    //     axios.post('/',{
    //         type:"payment_success",
    //         uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
    //         oid:localStorage.getItem('oid')?localStorage.getItem('oid'): null,
    //         coupon:localStorage.getItem('coupon')?localStorage.getItem('coupon'): null,
    //         coupon_name:localStorage.getItem('coupon_name')?localStorage.getItem('coupon_name'): null
    //     })
    //     .then(res => {
    //         if(res.data.status==='success'){
    //             toast.success(res.data.msg)
    //             router.push('/')
    //          }else if(res.data.status==='error'){
    //             toast.error(res.data.msg)
    //          }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       })
    // },[])
   


  return (
    <>
    <div className='bg'>
        <div className='card1'>
            <h1 className='card_msg'>Order Placed</h1>
            <h2 className='card_submsg'>Thank You For Order</h2>
            <Link href='/' className='btn btn-success router-link-active'>Go Back to home</Link>
        </div>
    </div>
    </>
  )
}

export default success