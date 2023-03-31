import React, { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar2 from 'components/Navbar2';
import { Footer } from 'components';
import { v4 as uuid } from 'uuid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import axios from '../../axios';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Register = () => {
    const unique_id = uuid();
// console.log(unique_id)
const router = useRouter()

    const [inputVal, setInputVal] = useState({
        // uid:unique_id,
        fname:'',
        lname:'',
        email:'',
        phone:'',
        password:'',
        cpassword:''
    })

const getData = (e) =>{
     
        const {value, name} = e.target;

        setInputVal(()=>{
            return {
                ...inputVal,
                [name]:value
            }
        })
}


    const signUp =() =>{
       
       
    
          const { fname,lname,email,phone,password,cpassword } = inputVal;
    
         if(fname === ''){
              toast.error('First name required')
          }else if(lname === ''){
              toast.error('Last name required')
          }else if(email === '' || !email.includes('@')){
              toast.error('Enter valid email')
          }else if(phone.length > 10){
              toast.error('Enter Mobile Number')
          }else if(password === ''){
              toast.error('Enter Password')
          }else if(password.length<6){
            toast.error('Password must be contain minimum 6 character')
        }else if(cpassword === ''){
              toast.error('Enter Password')
          }else if(cpassword != password){
              toast.error('Password Not Match')
          }else{
            //   toast.success("Data added")
              axios.post('/',{
                type:"signup",
                password:password,
                username:fname,
                email:email,
                fullname:fname,
                mobile:phone
            }).then(res => {
                console.log(res.data)
                if(res.data.status==='success'){
                    toast.success(res.data.msg)
                    router.push('/login')
                }else if(res.data.status==='error'){
                    toast.error(res.data.msg)
                }
                // setGetCart(res.data)
               })
               .catch(err => {
                 console.log(err)
                 })
               }
             
          }



// const addData = (e) =>{
//     e.preventDefault();
//     const pdata = JSON.parse(localStorage.getItem('userDataCalibreply') || '[]')
//     const { uid,fname,lname,email,phone,password,cpassword} = inputVal;
    
//     if(pdata.uid === uid){
//                 alert('error')
//     }
//     else if(fname === ''){
//         toast.error('First name required')
//     }else if(lname === ''){
//         toast.error('Last name required')
//     }else if(email === '' || !email.includes('@')){
//         toast.error('Enter valid email')
//     }else if(phone.length > 10){
//         toast.error('Enter Mobile Number')
//     }else if(password === '' || password.length<6){
//         toast.error('Enter Password')
//     }else if(cpassword === ''){
//         toast.error('Enter Password')
//     }else if(cpassword != password){
//         toast.error('Password Not Match')
//     }else{
//         toast.success("Data added")
//         localStorage.setItem('userDataCalibreply' , JSON.stringify([...pdata, inputVal]));
//     }
// }

  return (
    <>

    <Navbar2/>
        <section className='about-us container'>
            <section className='call-back-section contact-bg-img'>
                <div className='auto-container'>
                    <div className='outer-box'>
                        <div className='row no-gutters'>
                            <div className='col-lg-3 col-md-3 col-sm-12 form-group'></div>
                            <div className='form-column col-xl-6 col-lg-12 col-md-6 col-sm-12'>
                                <div className='inner-column'>
                                    <div className='request-form'>
                                        <h3>Sign Up</h3>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="text" name="fname" onChange={getData} placeholder="First Name" autocomplete="off" required="required"/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="text" name="lname" onChange={getData} placeholder="Last Name" autocomplete="off" required="required"/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="email" name="email" onChange={getData} placeholder="Email" autocomplete="off" required="required" style={{width: '100%'}}/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="number" name="phone" onChange={getData} placeholder="Mobile No." autocomplete="off" required="required" class="w-100"/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="password" name="password" onChange={getData} placeholder="Password" required="required" autocomplete="off" style={{width: '100%'}}/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                            <input type="password" name="cpassword" onChange={getData} placeholder="Confirm Password" required="required" autocomplete="off" style={{width: '100%'}}/>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button type="submit" name="submit-form" onClick={signUp} class="theme-btn btn-style-four">
                                                    <span class="btn-title">Signup</span>
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span>
                                                        <span></span>
                                                </button>
                                            </div>
                                            <div className='txt-center'>
                                                    <h6 className='clr-white'>
                                                        <Link href='/login' className='clr-white frg-pass-link'>If Account Already exists, Click Here</Link>
                                                    </h6>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <Footer/>
    </>
  )
}

export default Register