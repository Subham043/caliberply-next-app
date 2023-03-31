import React, { useCallback, useEffect, useReducer, useState } from 'react'
import {FaTrashAlt , FaRupeeSign, FaShoppingCart,FaPlus, FaArrowRight, FaMinus} from 'react-icons/fa';
import styles from '@/styles/cart.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Swal from 'sweetalert2';


const Cart1 = () => {

  const router = useRouter()
  const [uid , setUid] = useState(null)

  useEffect(()=>{
    setUid(localStorage.getItem('uid'))
  },[uid])

  const [username , setUsername] = useState(null)
  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
  },[username])
  

 

  const [cartItem, setCartItem] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"getMyCart",
          uid:localStorage.getItem('uid')? localStorage.getItem('uid'): null,
          ip:localStorage.getItem('ip_address')
      })
      .then(res => {
      //  console.log(res.data.data)
      if(Array.isArray(res.data.data)){

        setCartItem(res.data)
      }
      })
      .catch(err => {
        console.log(err)
        })
  },[cartItem])


  
  
  const handleIncrement = (curEle) =>{
        axios.post('/',{
            type:"addQty",
            cart_id:curEle.id,
            qty:'1'
        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status === 'success'){
          toast.success(res.data.msg)
          // router.push('/cart')
       }else if(res.data.status === 'error'){
          toast.error(res.data.msg)
       }
        })
        .catch(err => {
          console.log(err)
          })
    }

    const handleDecrement = (curEle) =>{
      axios.post('/',{
          type:"minQty",
          cart_id:curEle.id,
          qty:'1'
      })
      .then(res => {
      //  console.log(res.data)
       if(res.data.status === 'success'){
        toast.success(res.data.msg)
        // router.push('/cart')
     }else if(res.data.status === 'error'){
        toast.error(res.data.msg)
     }
      })
      .catch(err => {
        console.log(err)
        })
  }


  const handleDelete = (curEle) =>{


  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
         axios.post('/',{
            type:"commonDelete",
            id:curEle.id,
            table:"mss_cart"

        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status === 'success'){
          toast.success(res.data.msg)
          // router.push('/cart')
       }else if(res.data.status === 'error'){
          toast.error(res.data.msg)
       }
        })
        .catch(err => {
          console.log(err)
          })
      // Swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )
    }
  })
      //   axios.post('/',{
      //       type:"commonDelete",
      //       id:curEle.id,
      //       table:"mss_cart"

      //   })
      //   .then(res => {
      //   //  console.log(res.data)
      //    if(res.data.status === 'success'){
      //     toast.success(res.data.msg)
      //     // router.push('/cart')
      //  }else if(res.data.status === 'error'){
      //     toast.error(res.data.msg)
      //  }
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     })
    }

    const loginGuest = () =>{

      if(cartItem.count === 0){
        toast.error('Add Products To the Cart')
      }else{
        axios.post('/',{
            type:"loginGuest",
            ip_address:localStorage.getItem('ip_address')
  
        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status === 'success'){
           toast.success(res.data.msg)
           localStorage.setItem('uid', (res.data.session.uid))
           localStorage.setItem('username', (res.data.session.username))
       }else if(res.data.status === 'error'){
          toast.error(res.data.msg)
       }
  
        router.push('/checkout')
        })
        .catch(err => {
          console.log(err)
          })
      }
  }

 


  // const dispatch = useDispatch()
  // const count = useSelector((state) => state.cart.value)
  // const [state, dispatch] = useReducer(reducer, initialState)

  // const { cart } = useCartContext();
// const dispatch = useDispatch()
//   const { cart, quantity, totalPrice} = useSelector((state)=>state.allCart)
//   const items = useSelector((state)=>state.allCart.cart)
  // console.log(items)

  // const { removeItem , setDecrease, setIncrease } = useCartContext()

  // console.log(cart)

  return (
   <section className={styles.gray_bg}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.wish_tab}`}>
          <div className={`${styles.cs}`}>
            <Link href='/product/132'>
              Continue Shopping
            </Link>
          </div>
          <div className={`${styles.tab}`}>
            <ul className={`${styles.main_ul}`}>
              <li className={`${styles.active}`}>
                <i>
                  <FaShoppingCart/>
                </i>
                my shopping cart
                <span>({cartItem.count} Item)</span>
              </li>
            </ul>
            <div className={styles.tab_container}>
              <div className={styles.respon}>
                <span className={`${styles.span} ${styles.active}`}></span>
                my shopping cart ( {cartItem.count} items)
              </div>
              <div className={`${styles.contant} ${styles.s1}`}>
                <table width='100%' border='0' className={styles.table} cellPadding="0">
                    <tbody>
                      <tr >
                        <th width='450'>PRODUCT DETAILS</th>
                        <th width='100'>PRICE</th>
                        <th width='70'>QUANTITY</th>
                        <th width='155'>TOTAL</th>
                        <th width='155'></th>
                      </tr>
                      
                      {cartItem.data && cartItem.data.map((curEle)=>
                       <tr key={curEle.id}>
                       <td>
                         <div className={styles.pro_img}>
                           <Image src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${curEle.front_image}`} alt='1 Multiply MR.png' title='1 Multiply MR.png' width='100' height='100'/>
                         </div>
                         <div className={styles.right_proim}>
                             <h3> {curEle.name} </h3>
                             <div className={styles.size_thik}>
                               <p> Size: {curEle.size} </p>
                               <p>thickness : {curEle.thickness} </p>
                             </div>
                         </div>
                       </td>
                       <td>
                         <div className={styles.cut_price}>
                             <i><FaRupeeSign/></i>
                             {curEle.purchese_cost}
                         </div>
                         <div className={styles.uncut_price}>
                             <i><FaRupeeSign/></i>
                             {curEle.selling_cost}
                         </div>
                       </td>
                       <td>
                         <div className={styles.qty}>
                           <div style={{marginTop:'20px'}}>
                             <div className={`${styles.input_group} align-center`}>
                               <button onClick={()=>handleIncrement(curEle)}  className={`${styles.btn} ${styles.btn_touchspin} ${styles.qty_btn}`}>
                               <FaPlus/>
                               </button>
                               <input type='text' min='1' placeholder='0' value={curEle.qty} name='product_quantity_name' className={`${styles.input_quality} mt-20`} style={{display:'block', textAlign:'center'}}/>
                               <button onClick={()=>handleDecrement(curEle)} className={`${styles.btn} ${styles.btn_touchspin} ${styles.qty_btn}`}>
                               <FaMinus/>
                               </button>
                             </div>
                           </div>
                         </div>
                         <div className={styles.clear}></div>
                       </td>
                       <td align='center'>
                           <div className={styles.uncut_price}>
                             <i><FaRupeeSign/></i>
                             {curEle.total_amount}
                           </div>
                       </td>
                       <td>
                         <div className={styles.cent_w_d}>
                             <p>
                               <a>
                                 <i><FaTrashAlt onClick={() =>handleDelete(curEle)}/></i>
                               </a>
                             </p>
                         </div>
                       </td>
                     </tr>
                         )}
                     
                      <tr className={styles.lastrowresponsive}>
                        <td colSpan='4'>
                          <h6 style={{display:'none'}}>Check Delivery Info(?)</h6>
                          <div className={styles.enter_pin_code} style={{display:'none'}}>
                            <input placeholder='Enter Pincode' type='tel' value='712409' name='pincode' id='pincode' maxLength='6'/>
                          </div>
                          <span id='pin'></span>
                          <div onClick={loginGuest} className={username?'myaccount-content-display':styles.buy_now}>
                              {/* <Link href="/checkout"> */}
                              <a>
                                <span>Guest Checkout</span>
                                <span className={styles.icon}>
                                  <i> 
                                      <FaArrowRight/>
                                  </i>
                                </span>
                              {/* </Link> */}
                              </a>
                          </div>
                        </td>
                        <td className={styles.shipping_char}>
                            <div className={styles.buy_now}>
                              {uid? <Link href="/checkout">
                                  <span>Order</span>
                                  <span className={styles.icon}>
                                    <i><FaArrowRight/></i>
                                  </span>
                                </Link>: <Link href="/login">
                                  <span>Log In</span>
                                  <span className={styles.icon}>
                                    <i><FaArrowRight/></i>
                                  </span>
                                </Link>}
                                {/* <Link href="/login">
                                  <span>Log In</span>
                                  <span className={styles.icon}>
                                    <i><FaArrowRight/></i>
                                  </span>
                                </Link> */}
                            </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Cart1