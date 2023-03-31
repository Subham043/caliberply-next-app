import { AboutBanner, Footer } from 'components'
import Navbar2 from 'components/Navbar2'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from '../../axios';
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CheckOutDetails from 'components/CheckOutDetails';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';

const Checkout = () => {

    const router = useRouter()


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
                  uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
              })
              .then(res => {
            //    console.log(res.data.total_amount)
               if(Array.isArray(res.data)){

                   setGetCart(res.data)
               }
              })
              .catch(err => {
                console.log(err)
                })
              },[])

              const [getCart1, setGetCart1] = useState([])
              useEffect(() => {
                axios.post('/',{
                    type:"getMyCart",
                    ip:localStorage.getItem('ip_address'),
                    uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                })
                .then(res => {
                //  console.log(res.data)
                 setGetCart1(res.data.data)
                })
                .catch(err => {
                  console.log(err)
                  })
                },[])

                const [getTotal, setGetTotal] = useState([])
                useEffect(() => {
                  axios.post('/',{
                      type:"getMyCart",
                      ip:localStorage.getItem('ip_address'),
                      uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                  })
                  .then(res => {
                  //  console.log(res.data)
                  setGetTotal(res.data.total_amount)
                  })
                  .catch(err => {
                    console.log(err)
                    })
                  },[])

                  const [getShippingAdress, setGetShippingAddress] = useState([])
                  useEffect(() => {
                    axios.post('/',{
                        type:"getAllAddress",
                        ip:localStorage.getItem('ip_address'),
                        uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                    })
                    .then(res => {
                     console.log(res.data)
                     if(Array.isArray(res.data.data)){

                         setGetShippingAddress(res.data.data)
                     }
                    })
                    .catch(err => {
                      console.log(err)
                      })
                    },[])


                  const [getShipping, setGetShipping] = useState([])
                  useEffect(() => {
                    axios.post('/',{
                        type:"shipping_charge"
                    })
                    .then(res => {
                    //  console.log(res.data)
                    setGetShipping(res.data.data.charge)
                    })
                    .catch(err => {
                      console.log(err)
                      })
                    },[])


                    // useEffect(()=>{
                    //     let setIp = JSON.parse(localStorage.getItem("uid"));
                    //     if (setIp === null) {
                    //       var min = 100000;
                    //       var max = 999999;
                    //       var num = Math.floor(Math.random() * (max - min + 1)) + min;
                    //       localStorage.setItem("uid", JSON.stringify(num));     
                    //   }
                    // },[])

                    const [showtab1 , setShowTab1] = useState(0)

                    const handletab1 =(e)=>{
                        setShowTab1(e);
                    }


                    const [isYellowBoxShown, setIsYellowBoxShown] = useState(true);
                    const checkboxHandler = () => {
                        setIsYellowBoxShown(!isYellowBoxShown);
                      };

                    const [userData, setUserData] = useState([])
                    useEffect(() => {
                      axios.post('/',{
                          type:"userDetail",
                          uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                      })
                      .then(res => {
                       console.log(res.data)
                      setUserData(res.data)
                      })
                      .catch(err => {
                        console.log(err)
                        })
                      },[])


                      const [inputAddress, setInputAddress] = useState({
                        AddressLine1:'',
                        AddressLine2:'',
                        Fullname:'',
                        City:'',
                        country:'',
                        email:'',
                        Number:'',
                        pincode:'',
                        state:'',
                        addressType:''

                    })
                // console.log(inputAddress)
                const getData = (e) =>{
                     
                        const {value, name} = e.target;
                
                        setInputAddress(()=>{
                            return {
                                ...inputAddress,
                                [name]:value
                            }
                        })
                }

                      const shippingAddress = () =>{
                            const{AddressLine1,AddressLine2,Fullname,addressType,City,country,email,Number,pincode,state} = inputAddress

                            if(AddressLine1 ==='' || AddressLine2==='' || Fullname==='' || country==="" || City==="" || email==="" || Number==="" || pincode==="" || state===""){
                                toast.error('Enter the Data')
                            }else{
                                axios.post('/',{
                                    type:"add_address",
                                    uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                                    add1:AddressLine1,
                                    add2:AddressLine2,
                                    add_title:Fullname,
                                    city:City,
                                    country:country,
                                    email:email,
                                    mobile:Number,
                                    pincode:pincode,
                                    state:state,
                                    add_type:'shipping'
                                })
                                .then(res => {
                                //  console.log(res.data)
                                    if(res.data.status === 'success'){
                                        toast.success(res.data.msg)
                                    }else if(res.data.status==='error'){
                                        toast.error(res.data.msg)
                                    }
                                // setUserData(res.data)
                                })
                                .catch(err => {
                                  console.log(err)
                                  })
                                }
                      }

                      const [inputBillingAddress, setInputBillingAddress] = useState({
                        AddressLine1:'',
                        AddressLine2:'',
                        Fullname:'',
                        City:'',
                        country:'',
                        email:'',
                        Number:'',
                        pincode:'',
                        state:'',
                        addressType:''

                    })
                // console.log(inputBillingAddress)
                const getData1 = (e) =>{
                     
                        const {value, name} = e.target;
                
                        setInputBillingAddress(()=>{
                            return {
                                ...inputBillingAddress,
                                [name]:value
                            }
                        })
                }

                      const billingAddress = () =>{
                            const{AddressLine1,AddressLine2,Fullname,City,country,email,Number,pincode,state,addressType} = inputBillingAddress

                            if(AddressLine1 ==='' || AddressLine2==='' || Fullname==='' || country==="" || City==="" || email==="" || Number==="" || pincode==="" || state===""){
                                toast.error('Enter the Data')
                            }else{
                                axios.post('/',{
                                    type:"add_address",
                                    uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                                    add1:AddressLine1,
                                    add2:AddressLine2,
                                    add_title:Fullname,
                                    city:City,
                                    country:country,
                                    email:email,
                                    mobile:Number,
                                    pincode:pincode,
                                    state:state,
                                    add_type:'billing'
                                })
                                .then(res => {
                                //  console.log(res.data)
                                    if(res.data.status === 'success'){
                                        toast.success(res.data.msg)
                                    }else if(res.data.status==='error'){
                                        toast.error(res.data.msg)
                                    }
                                // setUserData(res.data)
                                })
                                .catch(err => {
                                  console.log(err)
                                  })
                                }
                      }

                      const [getShippingDetails, setGetShippingDetails] = useState([])
                      useEffect(() => {
                        axios.post('/',{
                            type:"getShippingAddress",
                            uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null
                        })
                        .then(res => {
                        //  console.log(res.data)
                         if(Array.isArray(res.data)){

                             setGetShippingDetails(res.data)
                         }
                        })
                        .catch(err => {
                          console.log(err)
                          })
                        },[getShippingDetails])

                        const [getBillingDetails, setGetBillingDetails] = useState([])
                        useEffect(() => {
                          axios.post('/',{
                              type:"getBillingAddress",
                              uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null
                          })
                          .then(res => {
                            //   console.log(res.data)
                              if(Array.isArray(res.data)){

                               setGetBillingDetails(res.data)
                           }
                          })
                          .catch(err => {
                            console.log(err)
                            })
                          },[getBillingDetails])

                          const [addressInput, setAddressInput] = useState({
                            shipping:'',
                            billing:'',
                            payment_type:''
                          })

                        
                          const getaddress = (e) =>{
                     
                        const {value, name} = e.target;
                
                        setAddressInput(()=>{
                            return {
                                ...addressInput,
                                [name]:value
                            }
                        })
                }

                          
                        //   const billingId = getBillingAddress.add_id
                          const placeorder = ()=>{
                            const {shipping, billing, payment_type} = addressInput

                            if(shipping===''){
                                toast.error('Please select Shipping address')
                            }else if(payment_type===''){
                                toast.error('Please Select Payment type')
                            }else{
                                axios.post('/',{
                                    type:"order",
                                    uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                                    total:getTotal,
                                    address_id:shipping,
                                    billing_id:billing,
                                    gid:0,
                                    payment_type:payment_type,
                                    shipping_amount:getShipping,
                                })
                                .then(res => {
                                 console.log(res.data)
                                 if(res.data.status==='success'){
                                    toast.success(res.data.msg)
                                    // setTimeout(()=>{
                                    //     router.push('/success')

                                    // },1000)
                                    localStorage.setItem('oid', (res.data.oid))
                                 }else if(res.data.status==='error'){
                                    toast.error(res.data.msg)
                                 }
                                })
                                .catch(err => {
                                  console.log(err)
                                  })
                                setTimeout(()=>{
                                    axios.post('/',{
                                      type:"payment_success",
                                      uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                                      oid:localStorage.getItem('oid')?localStorage.getItem('oid'): null,
                                      coupon:localStorage.getItem('coupon')?localStorage.getItem('coupon'): null,
                                      coupon_name:localStorage.getItem('coupon_name')?localStorage.getItem('coupon_name'): null
                                  })
                                  .then(res => {
                                      if(res.data.status==='success'){
                                          toast.success(res.data.msg)
                                          router.push('/success')
                                       }else if(res.data.status==='error'){
                                          toast.error(res.data.msg)
                                       }
                                  })
                                  .catch(err => {
                                    console.log(err)
                                    })
                                },2000)

                                  setTimeout(()=>{
                                      axios.post('/',{
                                        type:"cartDelete",
                                        uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                                    })
                                    .then(res => {
                                        if(res.data.status==='success'){
                                            toast.success(res.data.msg)
                                            // router.push('/')
                                         }else if(res.data.status==='error'){
                                            toast.error(res.data.msg)
                                         }
                                    })
                                    .catch(err => {
                                      console.log(err)
                                      })
                                  },2000)
                            }

                          }

                        


                          const getSelectedAddress = () =>{
                            const {shipping} = addressInput
                             axios.post('/',{
                              type:"getSelectedAddress",
                              uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                              aid:shipping
                          })
                          .then(res => {
                              console.log(res.data)
                          })
                          .catch(err => {
                            console.log(err)
                            })
                          }

                    //       const [paymentSuccess, setPaymentSuccess] = useState([])
                    //   useEffect(() => {
                    //     axios.post('/',{
                    //         type:"payment_success",
                    //         uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
                    //         oid:localStorage.getItem('oid')?localStorage.getItem('oid'): null,
                    //         coupon:localStorage.getItem('coupon')?localStorage.getItem('coupon'): null,
                    //         coupon_name:localStorage.getItem('coupon_name')?localStorage.getItem('coupon_name'): null
                    //     })
                    //     .then(res => {
                    //     //  console.log(res.data)
                    //      if(Array.isArray(res.data)){

                    //         setPaymentSuccess(res.data)
                    //      }
                    //     })
                    //     .catch(err => {
                    //       console.log(err)
                    //       })
                    //     },[])

                        //       const [getSelectedAdd, setGetSelectedAdd] = useState([])
                        //   useEffect(() => {
                        //     axios.post('/',{
                        //         type:"getSelectedAddress",
                        //         uid:'1754',
                        //         aid:'219'
                        //     })
                        //     .then(res => {
                        //      console.log(res.data)

                        //          setGetSelectedAdd(res.data)
                            
                        //     })
                        //     .catch(err => {
                        //       console.log(err)
                        //       })
                        //     },[])



                       

  return (
    <>
    {/* <header>
        <Link href='/' className='logo'>
            <img src='https://www.calibreply.com/img/logo.1b48625e.webp' height={50}/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label htmlFor='menu-bar'>Menu</label>

        <nav className='navbar'>
            <ul>
                
                <li><Link href='/' >Home</Link></li>
               
                    <li><Link href='#' >Products</Link>
                    <ul >
                    {navbar1.length > 0 && navbar1.map((navData)=>
                        <li><Link href={`/product/${navData.id}`}>{navData.heading}</Link>
                            <ul>
                                {navData.subcategory.map((sub)=>
                                 <li>
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
                                
                <li>{uid?<Link href='/login'>Login</Link>:<Link href='/login'>MyProfile</Link>}</li>



               
             
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
    </header> */}
    <Navbar2/>
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Checkout</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        Checkout
                    </li>
                </ul>
            </div>
    </section>
    <div className='cart-box-container check-out'>
        <div className='container container-ver2'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='caupoon-wrap s2 shadow border' style={{background:'rgb(255, 255, 255)'}}>
                        <div className='biling-item'>
                            <div className='coupons coupon-3'>
                                <label id='toggle2' className='mb-20'>Your Cart Items</label>
                            </div>
                            <div id='open1' className='billing-adress'>
                                <div className='contact-form form-style'>
                                    <div className='row'>
                                        <div className='box'>
                                            <div className='info-order'>
                                                <div className='product-name'>
                                                    <table className='table table-bordered'>
                                                        <tbody>
                                                        {getCart1 && getCart1.map((cart)=>
                                                                <tr key={cart.pid}  className='gift-area-list'>
                                                                    <td className='names'> 
                                                                        <Image height='50' alt='' src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${cart.front_image}`} width={50}/>
                                                                    </td>   
                                                                     <td className='names'>
                                                                        <Link href={`/productdetails/${cart.pid}`}>{cart.name}</Link>
                                                                     </td>
                                                                </tr>
                                                            )}
                                                      
                                                        {/* <tr className='gift-area-list'>
                                                            <td className='names'> 
                                                            <img src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1%20Multiply%20MR.png' width={50}/>
                                                            </td>   
                                                            <td className='names'>
                                                            <Link href='#'>Multiply MR IS 303 Grade Plywood.</Link>
                                                            </td>
                                                        </tr> */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-94cffce4="" className="caupon-wrap s2">
                        <div data-v-94cffce4="" className="biling-item">
                            <div data-v-94cffce4="" className="coupons coupon-3 active" style={{background:'transparent'}}>
                                <label data-v-94cffce4=""  id="toggle2" style={{color:'black'}}> Select Address</label>
                                <label data-v-94cffce4="" className="pull-right">
                                    <i data-v-94cffce4="" aria-hidden="true" className="fa fa-eye font-26"></i>
                                    </label>
                                </div>
                            <div data-v-94cffce4="" id="open1" className="billing-adress">
                                
                                        <div  data-v-94cffce4="" className="contact-form form-style">

                                           
                            <div data-v-94cffce4="" className="row">
                            <div data-v-94cffce4="" className={isYellowBoxShown?"col-md-12":'col-md-6'}>
                            <label data-v-94cffce4="">Select Shipping Address</label>
                            <select data-v-94cffce4="" name='shipping' onChange={getaddress} className="form-control">
                            <option data-v-94cffce4="" value="0">Select Shipping Address</option>
                            {getShippingDetails && getShippingDetails.map((shipping)=>
                            <option key={shipping.add_id} value={shipping.add_id}>{shipping.add2}</option>
                            )}
                            </select>
                            </div>
                            <div data-v-94cffce4="" className={isYellowBoxShown?'billing-items-display':"col-md-6"}>
                                <label data-v-94cffce4="">Select Billing Address</label>
                                <select data-v-94cffce4="" onChange={getaddress} name='billing' className="form-control">
                                    <option data-v-94cffce4="" value="0">Select Billing address</option>
                                    {getBillingDetails && getBillingDetails.map((billing)=>
                            <option key={billing.add_id} value={billing.add_id}>{billing.add2}</option>
                            )}
                                </select>
                                </div>
                            {/* <div className='col-md-6'>
                                <div className='col-md-12 foundation card'>
                                        <h3>Shipping Address</h3>
                                        <div className='radio-btn'>
                                            <input type='radio' name='shipping' onClick={getSelectedAddress} id='radio213' className='radio visibilty-none' value='213'/>
                                            <label data-v-94cffce4="" for="radio213" class="label"></label>
                                        </div>
                                            {getShippingDetails && getShippingDetails.map((shipping)=>
                                        <div className='col-md-12 foundation_sm'>
                                             <ul key={shipping.add_id}>
                                                <li> {shipping.add_title} </li>
                                                <li>{shipping.email}</li>
                                                <li> {shipping.mobile_no} </li>
                                                <li> {shipping.add1} </li>
                                                <li> {shipping.add2} </li>
                                                <li> {shipping.city}, {shipping.c_state},
                                                    <br/>  
                                                    {shipping.country}, {shipping.zipcode}  </li>
                                            </ul>
                                        </div>
                                            )}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='col-md-12 foundation card'>
                                        <h3>Billing Address</h3>
                                        <div className='radio-btn'>
                                            <input type='radio' name='billing' id='radio214' className='radio visibilty-none' value='214'/>
                                            <label data-v-94cffce4="" for="radio214" class="label"></label>
                                        </div>
                                        <div className='col-md-12 foundation_sm'>
                                        {getBillingDetails && getBillingDetails.map((shipping)=>
                                             <ul key={shipping.add_id}>
                                                <li> {shipping.add_title} </li>
                                                <li>{shipping.email}</li>
                                                <li> {shipping.mobile_no} </li>
                                                <li> {shipping.add1} </li>
                                                <li> {shipping.add2} </li>
                                                <li> {shipping.city}, {shipping.c_state},
                                                    <br/>  
                                                    {shipping.country}, {shipping.zipcode}  </li>
                                            </ul>
                                            )}
                                        </div>
                                </div>
                            </div> */}
                                <div data-v-94cffce4="" className="col-lg-12 col-md-12 col-12" style={{marginBottom:'20px', alignItems:'center' , display:'flex'}}>
                                    <input data-v-94cffce4="" type="checkbox" onChange={checkboxHandler} checked={isYellowBoxShown} placeholder="" id="sel" name="sel" className="form-check-input form-control mb-25" style={{width:'5%', height:'26px', margin:'15px 5px'}}/>
                                        <label data-v-94cffce4="" htmlFor="sel">Select Shipping address as billing address</label>
                                        </div>
                                        </div>
                                            <div data-v-94cffce4="" className="row">
                                            <div data-v-94cffce4="" className="col-lg-4 col-md-4 col-4"></div>
                                            </div>
                                        </div>
                                        
                                    


                                       
                                            </div>
                                            </div>
                                            </div>
                    <div className='caupon-wrap s2'>
                        <div className='biling-item' onClick={()=>handletab1(1)}>
                            <div className='coupon coupon-3'>
                                <label>Add Shipping Address</label>
                            </div>
                            <div id='open2' className={showtab1===1?'billing-adress':'billing-items-display'}>
                                <div className='contact-form form-style'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Fullname</label>
                                            <input type='hidden' onChange={getData} name='addressType' value='shipping' className='form-control mb-25'/>
                                            <input type='text' id="fname1" name='Fullname' onChange={getData} className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Mobile</label>
                                            <input type='text' id="mobile" name='Number' onChange={getData} className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Email</label>
                                            <input type='text' id="email" name='email' onChange={getData} className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Country</label>
                                            <select onChange={getData} name='country' className='form-control'>
                                                <option>Select</option>
                                                <option value='India'>India</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>State</label>
                                            <input type='text' id="state" onChange={getData} name='state' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>City</label>
                                            <input type='text' id="City" onChange={getData} name='City' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Address Line 1</label>
                                            <input type='text'id="Address Line 1" onChange={getData} name='AddressLine1' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Address Line 2</label>
                                            <input type='text' id="email" name='AddressLine2' onChange={getData} className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Pincode</label>
                                            <input type='text' id="email" name='pincode' onChange={getData} className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-12' style={{marginBottom:'20px', alignItems:'center' , display:'flex'}}>
                                            <input type='checkbox'  id="sel" onChange={checkboxHandler} checked={isYellowBoxShown} name='sel' className='form-control form-check-input mb-25' style={{width:'5%', height:'26px', margin:'15px 5px'}}/>
                                            <label htmlFor='sel'>Select Shipping address as billing address</label>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-12' style={{marginTop:'30px'}}>
                                            <button type='button' onClick={shippingAddress} style={{width:'50%'}} className='theme-btn'>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isYellowBoxShown?'billing-items-display':'caupon-wrap s2'}>
                        <div className='biling-item' onClick={()=>handletab1(2)}>
                            <div className='coupon coupon-3'>
                                <label>Add Billing Address</label>
                            {/* {showtab1===2?<BsChevronUp/>:<BsChevronDown/>} */}
                            </div>
                            <div id='open2' className={showtab1===2?'billing-adress':'billing-items-display'}>
                                <div className='contact-form form-style'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Fullname</label>
                                            <input name='addressType' onChange={getData1} type='hidden' value='billing' className='form-control mb-25'/>
                                            <input onChange={getData1} type='text' id="fname1" name='Fullname' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Mobile</label>
                                            <input onChange={getData1}  type='text' id="mobile" name='Number' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Email</label>
                                            <input onChange={getData1}  type='text' id="email" name='email' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Country</label>
                                            <select onChange={getData1} name='country' className='form-control'>
                                            <option>Select</option>
                                                <option value='India'>India</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>State</label>
                                            <input onChange={getData1}  type='text' id="state" name='state' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>City</label>
                                            <input onChange={getData1}  type='text' id="City" name='City' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Address Line 1</label>
                                            <input onChange={getData1}  type='text' id="Address Line 1" name='AddressLine1' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Address Line 2</label>
                                            <input onChange={getData1}  type='text' id="email" name='AddressLine2' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-12'>
                                            <label htmlFor='fname1'>Pincode</label>
                                            <input onChange={getData1}  type='text' id="email" name='pincode' className='form-control mb-25'/>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-12' style={{marginTop:'30px'}}>
                                            <button onClick={billingAddress} type='button' className='theme-btn' style={{width:'50%'}}>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 space-30'>
                        <div className='box'>
                            <h3 className='title-brand'>YOUR ORDER</h3>
                            <div className='info-order'>
                                <div className='product-name'>
                                    <ul>
                                        <li className='head'>
                                            <span className='name'>Product Name</span>
                                            <span className='qty'>
                                               <b>QTY</b> 
                                            </span>
                                            <span className='total'>
                                                <b>SUB TOTAL</b>
                                            </span>
                                        </li>
                                        {getCart1 && getCart1.map((cart)=>
                                        <li key={cart.pid} className='head content'>
                                        <span className="name"> {cart.name} </span>
                                        <span className="qty ml-15"> {cart.qty} </span>
                                        <span className="total"> INR {cart.amount} </span>
                                        </li>
                                        )}
                                        {/* <li className='head content'>
                                        <span className="name"> PRIME 100% NEEM PLYWOOD (M.R IS 303) . </span>
                                        <span className="qty ml-15"> 2 </span>
                                        <span className="total"> INR 1296 </span>
                                        </li> */}
                                    </ul>
                                </div>
                                    <ul className='product-order'>
                                        <li>
                                            <span className='left'>CART SUBTOTAL</span>
                                            <span className='right'>INR {getTotal}</span>
                                        </li>
                                        <li>
                                            <span className='left'>SHIPPING & HANDLING</span>
                                            <span className='right'>INR {getShipping}</span>
                                        </li>
                                        <li>
                                            <span className='left'>ORDER TOTAL</span>
                                            <span className='right'> INR {Number(getShipping)+ Number(getTotal)} </span>
                                        </li>
                                    </ul>
                            </div>
                            <div className='payment-order box float-left'>
                                <h3 className='title-brand'>Payment Method</h3>
                                <p>
                                    <i className='fa fa-shield text-success'></i>
                                    Safe and Secure Payments. Easy returns. 100% Authentic products.
                                </p>
                                <ul className='tabs pd-0'>
                                    {/* <li className='d-flex'>
                                        <input type='radio' id='paymenttype' onChange={getaddress} name='payment_type' value='online' className='mr-15'/>
                                        <h4>Online</h4>
                                    </li> */}
                                    <li className='d-flex'> 
                                        <input type="radio" id="paymenttype" onChange={getaddress} name="payment_type" value='COD' className="mr-15"/>
                                        <h4>Pay On Delivery</h4>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={()=>placeorder()} type='button' name='submit-form' className='theme-btn btn-style-four'>
                                <span className='btn-title'>Place Order</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Checkout