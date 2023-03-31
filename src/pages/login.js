import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Navbar2 from 'components/Navbar2';
import { Footer } from 'components';
import axios from '../../axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

import { Audio } from  'react-loader-spinner'


const Login = () => {

const router = useRouter()
    // const [login, setLogin] = useState([])
    // useEffect(() => {
    //     axios.post('/',{
    //         type:"userlogin",
    //         password:'Subham@jurysoft',
    //         username:'8249229465'
    //     })
    //     .then(res => {
    //      console.log(res.data)
    //     if(Array.isArray(res.data.category)){

    //         setLogin(res.data.category)
    //     }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       })
    // },[])

    const [inputVal, setInputVal] = useState({
        username:'',
        password:''
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

    const login =() =>{

        const { username, password} = inputVal;

        if(username === ''){
            toast.error('enter username')
          }else if(password === ''){
            toast.error('enter password')
          }else{
              axios.post('/',{
                  type:"userlogin",
                  password:password,
                  username:username
              })
              .then(res => {
            //    console.log(res.data.session)
               
               if(res.data.status === 'success'){
                toast.success(res.data.msg)
                localStorage.setItem('uid',(res.data.session.uid))
               localStorage.setItem('username',(res.data.session.username))
                router.push('/')
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
                                        <h3>Login</h3>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="text" name="username" onChange={getData} placeholder="Username/Mobile Number" required="required"/>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-6 form-group'>
                                                <input type="password" name="password" onChange={getData} placeholder="Password" required="required" style={{width: '100%'}}/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button type="submit" onClick={login} name="submit-form" className="theme-btn btn-style-four">
                                                    <span className="btn-title" >Login</span>
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span> 
                                                        <span></span>
                                                        <span></span>
                                                </button>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='txt-center'>
                                                    <h6 className='clr-white'>
                                                        <Link href='/register' className='clr-white frg-pass-link'>Create New Account</Link>
                                                    </h6>
                                                </div>
                                                <div className='txt-center frg-pass'>
                                                    <h6 className='mrg-t-15'>
                                                        <Link href='/forgot' className='frg-pass-link'>Forgot Password</Link>
                                                    </h6>
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
        </section>

        <Footer/>
    </>
  )
}

export default Login