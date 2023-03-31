import axios from '../../axios'
import { Footer } from 'components'
import Navbar2 from 'components/Navbar2'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {

    const router = useRouter()


    const [inputVal, setInputVal] = useState({
        email:'',
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

const sendOtp =() =>{

    const {email} = inputVal;

    if(email === ''){
        toast.error('enter register email')
      }else{
          axios.post('/',{
              type:"forgot",
              email:email
          })
          .then(res => {
        //    console.log(res.data.session)
           
           if(res.data.status === 'success'){
            toast.success(res.data.msg)
            router.push('/verify')
         }else if(res.data.status === 'error'){
            toast.error(res.data.msg)
         }
        })
        .catch(err => {
            console.log(err)
        })
      }

      
}


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
                                        <h3>Forgot Password</h3>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-6 col-sm-6 form-group'>
                                                <input type="email" name="email" onChange={getData} placeholder="Register Email" required="required"/>
                                            </div>
                                            <div onClick={sendOtp} className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button type="submit" name="submit-form" className="theme-btn btn-style-four">
                                                    <span className="btn-title" >Send OTP</span>
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span>
                                                        <span></span>
                                                </button>
                                            </div>

                                            <div className='txt-center'>
                                                    <h6 className='clr-white'>
                                                        <Link href='/login' className='clr-white frg-pass-link'>Login</Link>
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

export default Forgot