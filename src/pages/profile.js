import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar2 from 'components/Navbar2';
import { useRouter } from 'next/router';
import styles from '@/styles/About.module.css';
import {FaTrash, FaEdit,FaTachometerAlt, FaShoppingCart, FaRegEye, FaMapMarkerAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import axios from '../../axios';
import { Footer } from 'components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Profile = () => {
    const router = useRouter()
    const [showtab , setShowTab] = useState(1)

    const handletab =(e)=>{
        setShowTab(e);
    }

    const logout = () =>{
        localStorage.removeItem('uid')
        localStorage.removeItem('username')
        localStorage.removeItem('ip_address')
        router.push('/')
    }


    const [passwordType , setPasswordType] = useState('password')
    const togglePassword =(e)=>{
        if (passwordType === "password") {
            setPasswordType("text");
            return;
          }
          setPasswordType("password");
        
      }

    const [getUserData, setGetUserData] = useState([])
    useEffect(() => {
      axios.post('/',{
          type:"userDetail",
          uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null
      })
      .then(res => {
       console.log(res.data.data)


        setGetUserData(res.data.data)
    
      })
      .catch(err => {
        console.log(err)
        })
      },[getUserData])

      const [getMyOrder, setGetMyOrder] = useState([])
      useEffect(() => {
        axios.post('/',{
            type:"myorder",
            uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null
        })
        .then(res => {
      //    console.log(res.data.data)
  
  
      setGetMyOrder(res.data.data)
      
        })
        .catch(err => {
          console.log(err)
          })
        },[getMyOrder])

      const [changePass, setChangePass] = useState({
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
    })
// console.log(changePass)
const getData = (e) =>{
     

        const {value, name} = e.target;

        setChangePass(()=>{
            return {
                ...changePass,
                [name]:value
            }
        })
}

const updatePass = () =>{

    const {oldPassword, newPassword, confirmPassword} = changePass


    if(oldPassword === ''|| newPassword=== '' || confirmPassword=== ""){
        toast.error('Enter the password')
    }

    axios.post('/',{
        type:"change_password",
        uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
        confirmPassword:confirmPassword,
        newPassword:newPassword,
        oldPassword:oldPassword
    })
    .then(res => {
     if(res.data.status==='success'){
        toast.success(res.data.msg)
     }else if(res.data.status==='error'){
        toast.error(res.data.msg)
     }
    })
    .catch(err => {
      console.log(err)
      })
}

const [updateDetail, setUpdateDetail] = useState({
    fname:'',
    mobile:'',
    email:'',
    state:'',
    city:''
})
// console.log(updateDetail)
const getData1 = (e) =>{
 

    const {value, name} = e.target;

    setUpdateDetail(()=>{
        return {
            ...updateDetail,
            [name]:value
        }
    })
}

const updateDetails = () =>{

    const {fname, mobile, email,state,city} = updateDetail


    if(fname === ''){
        toast.error('Enter Username')
    }else if(mobile === ''){
        toast.error('Enter mobile')
    }else if(email === ''){
        toast.error('Enter email')
    }else if(state === ''){
        toast.error('Enter state')
    }else if(city === ''){
        toast.error('Enter city')
    }else{
        axios.post('/',{
            type:"userDetailUpdate",
            id:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
            username:fname,
           mobile:mobile,
           email:email,
           state:state,
           city:city
        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status==='success'){
            toast.success(res.data.msg)
         }else if(res.data.status==='error'){
            toast.error(res.data.msg)
         }
        })
        .catch(err => {
          console.log(err)
          })
    }

}

const [getAddress, setGetAddress] = useState([])
useEffect(() => {
  axios.post('/',{
      type:"getAllAddress",
      uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
      ip:localStorage.getItem('ip_address')
  })
  .then(res => {
   console.log(res.data)
   if(Array.isArray((res.data.data))){
       setGetAddress(res.data.data)
   }
  })
  .catch(err => {
    console.log(err)
    })
  },[getAddress])

  const deleteAddress = (addressData) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete address!'
      }).then((result) => {
        if (result.isConfirmed) {
    axios.post('/',{
        type:"removeAddress",
        add_id:addressData.add_id
    })
    .then(res => {
     console.log(res.data)
     if(res.data.status==='success'){
        toast.success(res.data.msg)
     }else if(res.data.status==='error'){
        toast.error(res.data.error)
     }
    })
    .catch(err => {
      console.log(err)
    })
}})

}

  const cancelOrder = (order)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.post('/',{
                type:"CancelMyOrder",
                uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
                oid:order.oid
            })
            .then(res => {
            if(res.data.status==='success'){
                toast.success(res.data.msg)
             }else if(res.data.status==='error'){
                toast.error(res.data.error)
             }
            })
            .catch(err => {
              console.log(err)
              })
        }})
   
  }

  return (
    <>

    <Navbar2/>
    <section className={styles.page_title}>
            <div className={styles.auto_container}>
                <h1>Profile</h1>
                <ul className={`${styles.bread_crumb} ${styles.clearfix}`}>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        Profile
                    </li>
                </ul>
            </div>
    </section>
    <section className='about-us'>
        <div className='auto-container'>
            <div className='row clearfix'>
                <div className='container container-ver2 mb-50'>
                    <section className='contact-pg-contact-section section-padding'>  
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='myaccount-page-wrapper'>
                                        <div className='row'>
                                            <div className='col-lg-3 col-md-4'>
                                                <div className='card theme-card'>
                                                    <div className='card-body'>
                                                        <div className='text-center'>
                                                            <div className='mt-3'>
                                                                <h4>{getUserData && getUserData.fullname} </h4>
                                                                <p className="text-secondary mb-1">{getUserData && getUserData.mobile}</p>
                                                                <p className="text-secondary mb-1">{getUserData && getUserData.email}</p>
                                                                <p className="text-muted font-size-sm"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-4'/>
                                                <div role='tablist' onClick={()=>handletab(1)} className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab' className={showtab===1?'active':''}>
                                                        <i><FaTachometerAlt/> </i>
                                                        Dashboard
                                                    </a>
                                                </div>
                                    
                                                <div role='tablist' onClick={()=>handletab(2)}  className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab' className={showtab===2?'active':''}>
                                                        <i><FaRegEye/> </i>
                                                        Change Password
                                                    </a>
                                                </div>
                                                <div role='tablist' onClick={()=>handletab(3)} className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab' className={showtab===3?'active':''}>
                                                        <i><FaShoppingCart/> </i> 
                                                        Orders
                                                    </a>
                                                </div>
                                                <div role='tablist' onClick={()=>handletab(4)} className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab' className={showtab===4?'active':''}>
                                                        <i><FaMapMarkerAlt/> </i> 
                                                         Address
                                                    </a>
                                                </div>
                                                <div role='tablist' onClick={()=>handletab(5)} className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab' className={showtab===5?'active':''}>
                                                        <i><FaUser/> </i>
                                                        Account Details
                                                    </a>
                                                </div>
                                                <div onClick={logout} role='tablist' className='myaccount-tab-menu nav'>
                                                    <a data-toggle='tab'>
                                                        <i><FaSignOutAlt/> </i>
                                                        Logout
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-9 col-md-8'>
                                                <div id='myaccountContent' className='tab-content'>
                                                    <div id='dashboard' role="tabpanel">
                                                        <div className={showtab===1?'myaccount-content':'myaccount-content-display'}>
                                                            <h3>Dashboard</h3>
                                                            <div className='welcome'>
                                                              {getUserData?<p>Hello <strong>{getUserData && getUserData.fullname} </strong> (If Not <strong>{getUserData && getUserData.fullname} !</strong><a onClick={logout} className='logout'> Logout</a>)</p>:''}  
                                                            </div>
                                                            {getUserData?<p className='mb-0'>
                                                            From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.
                                                            </p>:<h1>Not yet logged in  <Link href='/login'>Login</Link></h1>}
                                                            
                                                        </div>
                                                    </div>
                                                    <div id="account-info" role="tabpanel">
                                                        <div className={showtab===2?'myaccount-content':'myaccount-content-display'}>
                                                            <h3>Change password</h3>
                                                            <span>
                                                                <div className='account-details-form'>
                                                                    <div className='contact-form form-style'>
                                                                        <div className='row'>
                                                                            <div className='col-lg-6 col-md-12 col-12 mb-25'>
                                                                                <label className='fname1'>Old Password</label>
                                                                                <span>
                                                                                    <input id='oldPassword' name='oldPassword' onChange={getData} type={togglePassword==1? passwordType :'text'} className='form-control'/>
                                                                                    <span className='input-group-btn'>
                                                                                        <button onClick={()=>togglePassword(1)} style={{width:'10%',background:'#714726'}} type='button' className='btn btn-default reveal3'>
                                                                                            <i><FaRegEye/></i>
                                                                                        </button>
                                                                                    </span>
                                                                                </span>
                                                                                <span className='error-msgs'></span>
                                                                            </div>
                                                                            <div className='col-lg-6 col-md-12 col-12 mb-25'>
                                                                                <label className='fname1'>New Password</label>
                                                                                <span>
                                                                                    <input id='newPassword' name='newPassword' onChange={getData} type={passwordType} className='form-control'/>
                                                                                    <span className='input-group-btn'>
                                                                                        <button onClick={()=>togglePassword(2)} style={{width:'10%',background:'#714726'}} type='button' className='btn btn-default reveal3'>
                                                                                            <i><FaRegEye/></i>
                                                                                        </button>
                                                                                    </span>
                                                                                </span>
                                                                                <span className='error-msgs'></span>
                                                                            </div>
                                                                            <div className='col-lg-6 col-md-12 col-12 mb-25'>
                                                                                <label className='fname1'>Confirm Password</label>
                                                                                <span>
                                                                                    <input id='confirmPassword' name='confirmPassword' onChange={getData} type={passwordType} className='form-control'/>
                                                                                    <span className='input-group-btn'>
                                                                                        <button onClick={()=>togglePassword(3)} style={{width:'10%',background:'#714726'}} type='button' className='btn btn-default reveal3'>
                                                                                            <i><FaRegEye/></i>
                                                                                        </button>
                                                                                    </span>
                                                                                </span>
                                                                                <span className='error-msgs'></span>
                                                                            </div>
                                                                            <div className='col-lg-12 col-md-12 col-12 py-3'>
                                                                            <button onClick={updatePass} type="button" style={{width:'30%'}} className="theme-btn contact-btn">Update Password</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div id="orders" role="tabpanel">
                                                    <div className={showtab===3?"myaccount-content":'myaccount-content-display'}>
                                                        <h3>Orders</h3>
                                                        <div className="myaccount-table table-responsive text-center">
                                                            <table className="table table-bordered">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>S. No.</th>
                                                                        <th>Order ID</th>
                                                                        <th>Order Detail</th>
                                                                        <th>Shipping Address</th>
                                                                        <th>Payment</th>
                                                                        <th>Payment Type</th>
                                                                        <th>Order Status</th>
                                                                        <th>Total</th>
                                                                        <th>Invoice</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                            <tbody>
                                                                {getMyOrder && getMyOrder.map((order,i)=>
                                                                <tr key={i}>
                                                                    <td>{i + 1}</td>
                                                                    <td>#{order.oid}</td>
                                                                    <td>view</td>
                                                                    <td>view</td>
                                                                    <td>{order.payment_status}</td>
                                                                    <td>{order.paymenttype}</td>
                                                                    <td>{order.status_order==5?<p style={{color:'red'}}>Order Cancelled</p>:<p style={{color:'green'}}>Order placed</p>}</td>
                                                                    <td>{order.total}</td>
                                                                    <td><Link href={`https://www.calibreply.com/invoice/${order.oid}`}>View Invoice</Link></td>
                                                                    <td>{order.status_order==5?<p style={{color:'red'}}>Order Cancelled</p>:<button onClick={()=>cancelOrder(order)}>Cancel Order</button>}</td>
                                                                </tr>
                                                                )}
                                                            </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    </div>
                                                {/* Address section */}

                                                <div id='address-edit' role='tabpanel'>
                                                    <div className={showtab===4?'myaccount-content row':'myaccount-content-display'}>
                                                        <h3>Billing/Shipping Address</h3>
                                                        {getAddress.length>0 ? getAddress.map((addressData)=>
                                                        <div key={addressData.add_1} className='col-sm-6'>
                                                            <address>
                                                                <p>
                                                                    <strong>{addressData.add_title}</strong>
                                                                </p>
                                                                <p>
                                                                    {addressData.add1}
                                                                    <br/>
                                                                    {addressData.add2}
                                                                    <br/>
                                                                    {addressData.c_state}, {addressData.city}
                                                                    <br/>
                                                                    {addressData.country} {addressData.zipcode}
                                                                </p>
                                                                <p>{addressData.email} </p>
                                                                <p>{addressData.mobile_no}</p>
                                                            </address>
                                                            <Link href='#' className='check-btn sqr-btn pointer theme-color pull-left'>
                                                                <i><FaEdit/> </i>
                                                                Edit Address
                                                            </Link>
                                                            <a onClick={()=>deleteAddress(addressData)} className='check-btn sqr-btn pointer theme-color pull-right'>
                                                                <i><FaTrash/> </i>
                                                                Delete
                                                            </a>
                                                        </div>
                                                        ):<p>No address</p>}
                                                    </div>
                                                </div>

                                                {/* Account Section */}
                                                <div id="account-info" role="tabpanel">
                                                    <div className={showtab===5?"myaccount-content":'myaccount-content-display'}>
                                                        <h3 >Account Details</h3>
                                                        <div className="account-details-form">
                                                            <div className="contact-form form-style">
                                                                <span >
                                                                    <div  className="row">
                                                                        <div  className="col-lg-6 col-md-12 col-12 mb-25">
                                                                            <label  htmlFor="fname1">Fullname</label>
                                                                            <span >
                                                            <input  type="text" placeholder={getUserData.fullname} onChange={getData1} id="fname1"  name="fname" className="form-control"/>
                                                    <span  className="error-msgs"></span>
                                                      </span>
                                                      </div>
                                                        <div  className="col-lg-6 col-md-12 col-12 mb-25">
                                                         <label  htmlFor="fname2">Mobile</label>
                                                                       <span >
                                                                    <input  type="text" placeholder={getUserData.mobile} onChange={getData1} id="fname2" name="mobile" className="form-control"/>
                                                                    <span  className="error-msgs"></span>
                                                                     </span>
                                                                     </div>
                                                                     <div  className="col-lg-6 col-md-12 col-12 mb-25">
                                                                      <label  htmlFor="fname2">Email</label>
                                                                        <span>
                                                                        <input  type="text" defaultValue={getUserData.email} onChange={getData1} id="fname3" name="email" className="form-control"/>
                                                                        <span  className="error-msgs">
                                                                        </span>
                                                                        </span>
                                                                        </div>
                                                                        <div  className="col-lg-6 col-md-12 col-12 mb-25"><label  htmlFor="City">State</label>
                                                                            <span>
                                                                            <input  type="text" placeholder={getUserData.state} onChange={getData1} id="state" name="state" className="form-control"/>
                                                                            <span  className="error-msgs">
                                                                            </span>
                                                                            </span>
                                                                            </div>
                                                                            <div  className="col-lg-6 col-md-12 col-12 mb-25">
                                                                            <label  htmlFor="City">City</label>
                                                                            <span>                            
                                                                            <input  type="text" placeholder={getUserData.city} onChange={getData1} id="City" name="city" className="form-control"/>
                                                                                <span className="error-msgs"></span>
                                                                                    </span>
                                                                                </div>
                                                                            <div  className="col-lg-12 col-md-12 col-12 py-3">
                                                                                <button style={{width:"30%"}} type="button" onClick={updateDetails} className="theme-btn contact-btn">Update Detail
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default Profile