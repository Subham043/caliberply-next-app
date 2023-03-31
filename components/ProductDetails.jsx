import React, { useEffect, useState } from 'react'
import styles from '@/styles/productDetails.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from '../axios';
import Image from 'next/image';

const ProductDetails = () => {

    

    const [image, setImage] = useState([])

    useEffect(() => {
          axios.post('/',{
              type:"getProductDetail",
              Id: "1"
          })
          .then(res => {
        //    console.log(res.data.data)
        //    setImage(res.data.data)
          })
          .catch(err => {
            console.log(err)
            })
          },[])


  return (
    <>
    <section className={`${styles.whites_bg} mt-5`}>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-5 col-xl-5'>
                    <div className={`${styles.border_3} row pd-20 flex-reverse`}>
                        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 flexslider '>
                            <div className='flex-viewport' style={{overflow:'hidden', position:'relative'}}>
                                <ul className='slides m-d-flex'> 
                                    <li className={styles.m_multi_img} style={{width:'80px', marginRight:'5px', marginBottom:'10px', float:'left', display:'block'}}>
                                    <Image height={200} width={200} src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.red_border} title='Multiply MR IS 303 Grade Plywood.'/>
                                    </li>
                                    <li className={styles.m_multi_img} style={{width:'80px', marginRight:'5px', marginBottom:'10px', float:'left', display:'block'}}>
                                        <Image height={200} width={200} src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/7b529a38827aa0a50056160928094a53.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.red_border} title='Multiply MR IS 303 Grade Plywood.'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-8 col-xl-8 flexslider'>
                            <div className='flex-viewport' style={{position:'relative'}}>
                                <ul className='slides' style={{width:'200%', transitionDuration:'0s', transform:'translate3d(0px , 0px, 0px)'}}>
                                    <li className={`${styles.flex_active_slide} ${styles.zomm_img_div}`}>
                                        <div className={`${styles.easyzoom} ${styles.easyzoom__adjacent} ${styles.is_ready}`}>
                                            <div>
                                                <div className={`${styles.zoom_on_hover} ${styles.img_responsive} w-65`}>
                                                    <Image height={200} width={200} src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='' className={styles.normal}/>
                                                    <Image height={200} width={200} src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='' className={styles.zoom} style={{translate:'scale(2)', left:'-119.052px', top:'-257.442px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='col-sm-6 col-md-6 col-lg-7 col-xl-7'>
                    <div className='row'>
                        <div className={`${styles.right_border} ${styles.z_index_9} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                            <div>
                        <div className={styles.heading}>
                            Plywood
                        </div>
                        <div className={styles.sku_code}> Multiply MR IS 303 Grade Plywood.</div>
                        <div className={`${styles.rating} ${styles.hide}`}>
                            4.9
                            <i></i>
                            Based on 22 ratings
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    1048
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>incl. GST</span>
                                    <div className={styles.cut_price} style={{fontSize:'14px'}}>
                                        <i><FaRupeeSign/></i>
                                        1310
                                    </div>
                                        <br/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    888.14
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>excl. GST</span>
                                </div>
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    27.97
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>/ Sq.ft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.size_thik} ${styles.font_18} my-3`}>
                        <p>
                            Select : Thickness

                            <select id='thickness0' name='size' tabIndex='-1' className='size'>
                                <option value="">Select Thickness </option>
                                <option selected="selected" value="6MM"> 6MM</option>
                                <option value="8MM">8MM </option>
                                <option value="12MM">12MM </option>
                                <option value="18/19MM">18/19MM </option>
                            </select>
                        </p>
                        <p className='py-3'>
                            Select : Size
                            <select className='size' id='size0' name='size' tabIndex='-1'>
                                <option value="">Select Size </option>
                                <option selected="selected" value="8x4">8x4</option>
                                <option value="7x4">7x4</option>
                            </select>
                        </p>
                        <p className='py-2'>
                            Quantity:
                            <input type="number" class={styles.thick} style={{backgroundColor:'rgb(202, 143, 101) !important'}} placeholder='1'/>
                        </p>
                    </div>
                    </div>
                    <div className={`${styles.add_cart_area} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                        <h3 className={`${styles.d_price} ${styles.hide}`}>
                            <i><FaRupeeSign/></i>
                            1,000
                        </h3>
                        <p className={styles.delivery}>
                            Delivery:
                            <span> Pincode Checker</span>
                        </p>
                        <div className={styles.pincode}>
                            <div className='form-group'>
                                <input type='text' placeholder='Enter Pincode' className={`${styles.inputForm} input-form`}/>
                                <button className={`${styles.theme_btn} ${styles.btn} ${styles.max_50}`}>Check</button>
                            </div>
                        </div>
                        <div className={styles.status_pincode}>

                        </div>
                        <span className={styles.stock}>In Stock</span>
                        <div className={styles.cart_btn}>
                            <a className={`${styles.btn} ${styles.buy_now_btn}`}>Buy Now</a>
                            <a className={`${styles.btn} ${styles.add_to_cart}`}>Add To Cart</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className='container'>
        <div className='row'>
            <div className={`${styles.d_icons} col-lg-2 col-xl-2 col-md-6 col-sm-6`}>
                <Image height={200} width={200} alt='' src='http://calibreply.com/img/1.381472c7.jpg'/>
                <p>Lifetime Warranty On Premium Offerings </p>
            </div>
            <div className={`${styles.d_icons} col-lg-2 col-xl-2 col-md-6 col-sm-6`}>
                <Image height={200} width={200} alt='' src='http://calibreply.com/img/2.c4f100b8.jpg'/>
                <p>High Resistance to All Climatic Conditions </p>
            </div>
        </div>
    </div>

    <section className='hidden-sm' style={{paddingTop:'0px'}}>
        <div className='container'>
            <div className={styles.product_tab}>
                <div className={styles.tab}>
                    <ul className={styles.main_ul}>
                        <li className={`${styles.tab_active} ${styles.mb_10}`}>Description</li>
                        <li>Specifications</li>
                        <li>Reviews</li>
                    </ul>
                    <div className={`${styles.tab_container} ${styles.shadow}`}>
                        <div className={`${styles.contant} ${styles.s1} ${styles.fontchange} ${styles.txt_sty}`} style={{display:'block', padding:'3%'}}>
                        Multiply commercial plywood is non Caliber product. Which is made of medium quality hardwood (Semi hardwood mix) bonded with Melamine Urea Formaldehyde (MUF) resin. Few core veneers treated with wood preservatives to protect the plywood from biological deterioration caused by Termite ,borer,fungi etc. This product available in various sizes, thicknesses and in affordable price too.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails