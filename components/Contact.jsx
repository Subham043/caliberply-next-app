import React, { useState } from 'react'
import styles from '@/styles/contact.module.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from '../axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const router = useRouter()
  const [inputVal, setInputVal] = useState({
    username:'',
    email:'',
    phone:'',
    message:''
})
console.log(inputVal)
const getData = (e) =>{

    const {value, name} = e.target;

    setInputVal(()=>{
        return {
            ...inputVal,
            [name]:value
        }
    })
}

const form =() =>{

  const { username, email,phone,message } = inputVal;

  if(username === ''){
      toast.error('enter username')
    }else if(email === ''){
      toast.error('enter email')
    }else if(phone === '' || phone.length>10 || phone.length<10){
      toast.error('Enter Valid Number')
    }else if(message === ''){
      toast.error('Enter Message')
    }else{
        axios.post('/',{
            type:"contact_submit",
            email:email,
            name:username,
            mobile:phone,
            msg:message
        })
        .then(res => {
         
         if(res.data.status === 'success'){
          toast.success(res.data.msg)
         
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
    <section className={`${styles.about_us} container`}>
        <section className={`${styles.call_back_section} ${styles.contact_bg_img}`}>
          <div className={`${styles.auto_container}`}>
            <div className={`${styles.outer_box}`}>
              <div className={`${styles.no_gutters} row`}>
                <div className={`${styles.text_column} col-xl-8 col-lg-12 col-md-12 col-sm-12 ${styles.order_2}`}>
                  <div className={styles.inner_column}>
                    <div className={styles.inner}>
                      <div className={styles.message}>
                        <strong>20 Years of Experience </strong><br/>
                        in Woodworks Business Services
                      </div>
                      <div className={styles.text}>
                      send us a email and we’ll get in touch shortly, or phone between 8:00AM to 9:00PM Monday to sunday- We would be delighted to speak.
                      </div>
                      <div className='row'>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box}>
                              <ul>
                                <li>
                                  <strong>Phone</strong>
                                </li>
                                <li>
                                  <Link href='tel:9591999452'>+91-9591999452 , 080-28602201 , 080-28608500</Link>
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box}>
                            <ul>
                              <li>
                                <strong>Email</strong>
                              </li>
                              <li>
                                <Link href='mailto:hello@calibreply.com'>hello@calibreply.com</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={`${styles.info_block} col-lg-12 col-md-12 col-sm-12`}>
                          <div className={styles.inner_box}>
                              <ul>
                                <li>
                                  <strong>Location</strong>
                                </li>
                                <li>
                                Sy No 39/1, Pattanagere Road, Near R V Engg College, Near Global Village Tech Park, R V College Road, Mysore Road, Bangalore, Karnataka 560059
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_column} col-xl-4 col-lg-12 col-md-12 col-sm-12`}>
                    <div className={styles.inner_column}>
                      <div className={styles.request_form}>
                        <h3>Request A Quote</h3>
                        <div className='row'>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='text' name='username' onChange={getData} placeholder='Name' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='email' name='email' onChange={getData} placeholder='Email' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='text' name='phone' onChange={getData} placeholder='Phone' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <textarea name='message' onChange={getData} placeholder='Message' required></textarea>
                          </div>
                          <div onClick={form} className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <button type='submit' name='submit-form' className={`${styles.theme_btn} ${styles.btn_style_four}`}>
                                  <span className={styles.btn_title}>Submit Now</span>
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
              </div>

            </div>
          </div>
        </section>
    </section>
    </>
  )
}

export default Contact