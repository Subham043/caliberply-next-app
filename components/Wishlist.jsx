import React, { useEffect, useState } from 'react'
import styles from '@/styles/Wishlist.module.css';
import {FaTrashAlt , FaRupeeSign, FaShoppingCart, FaHeart} from 'react-icons/fa';
import axios from '../axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';

const Wishlist = () => {


    const [getWishist, setGetWishlist] = useState([])
    useEffect(() => {
      axios.post('/',{
          type:"getMyWishList",
          ip:localStorage.getItem('ip_address'),
          uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
      })
      .then(res => {
    //    console.log(res.data)
    //    if(Array.isArray(res.data.data)){
             setGetWishlist(res.data.data)
    //    }
      })
      .catch(err => {
        console.log(err)
        })
      },[getWishist])

      
const handleRemoveWish = (wish) =>{
      axios.post('/',{
          type:"removeWishlist",
          id:wish.id
      })
      .then(res => {
    //    console.log(res.data)
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
      

      useEffect(()=>{
        let setIp = JSON.parse(localStorage.getItem("ip_address"));
        if (setIp === null) {
          var min = 100000;
          var max = 999999;
          var num = Math.floor(Math.random() * (max - min + 1)) + min;
          localStorage.setItem("ip_address", JSON.stringify(num));     
      }
    },[])

    const addCart = (wish) =>{
        axios.post('/',{
            type:"addtocart",
            ip:localStorage.getItem('ip_address'),
            uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
            qty:1,
            pid:wish.pid,
            total_amount:wish.selling_cost,
            amount:wish.selling_cost,
            name:wish.name,
            size:''
        })
        .then(res => {
         console.log(res.data)
         if(res.data.status === 'success'){
            toast.success(res.data.msg)
         }else if(res.data.status === 'error'){
            toast.error(res.data.msg)
         }
    //   setCartItems(res.data)
        })
        .catch(err => {
          console.log(err)
          })
    }


  return (
    <section className={`${styles.white_bg}`}>
        <div className='container'>
           
            <div className={`${styles.product_range_right} ${styles.product_range_list}`}>
                <span className={styles.posts_content}>
                    <ul className={`${styles.listings} row`}>
                        {getWishist && getWishist.map((wish)=>
                        <li key={wish.id} className='col-sm-4'>
                        <div className={`${styles.theme_border} m-text-center ${styles.bg_white}`}>
                            <div className={styles.remove_fly}>
                                <i>
                                    <FaTrashAlt onClick={() => handleRemoveWish(wish)}/>
                                </i>
                            </div>
                            <div className={`${styles.pro_img} ${styles.flip_box}`}>
                                      <Link href={`/productdetails/${wish.pid}`}>
                                        <div className={styles.flip_box_inner}>
                                            <div className={styles.flip_box_front}>
                                                <Image height='200' width='200' src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${wish.front_image}`} alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                            </div>
                                            <div className={styles.flip_box_back}>
                                                <Image height='200' width='200' src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${wish.front_image}`} alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                            </div>
                                        </div>
                                      </Link>
                             </div>
                             <div className={`${styles.prod_code} text-center`}>
                                      <h3>
                                        <Link href={`/productdetails/${wish.pid}`} style={{color:'black', textDecoration:'none'}}>{wish.name} </Link>
                                      </h3>
                                </div>
                            <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
                             <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
                             <div className={`${styles.prod_name} text-center`}> 
                                      <a>{wish.category_name}</a>
                                  </div>
                                  <div className={`${styles.size_thik} hidden-sm`}>
                                      <p>
                                        Select Thickness : {wish.thickness}
                                      </p>

                                      <p>
                                        Select Size : {wish.size}
                                      </p>
                                      <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                  </div>
                                  <div id='pr2'>
                                      <div className={`${styles.price_div}`}>
                                          <div className='col-6' style={{padding:'unset'}}>
                                          <div className={styles.cut_price}>
                                                  <i>
                                                      <FaRupeeSign/>
                                                  </i>
                                                  {wish.purchese_cost}
                                              </div>
                                              <div className={`${styles.price} ${styles.priceid2}`}>
                                                  <i><FaRupeeSign/></i>
                                                  {wish.selling_cost}
                                              </div>
                                              
                                          </div>
                                      </div>
                                      <div className={styles.prod_price}>
                                          <div className={styles.save_par}>
                                                You Save
                                                <span>0 (0% off)</span>
                                          </div>  
                                          <div className={`${styles.row} row`}>
                                              <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                  <div className={styles.add_com_p}>
                                                      <i>
                                                        <FaShoppingCart onClick={()=>addCart(wish)}/>
                                                      </i>
                                                  </div>
                                              </div>
                                              <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                  <div className={styles.add_com_p}>
                                                      <i>
                                                        <FaHeart/>
                                                      </i>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                        </div>
                    </li>
                        )}
                        
                        {/* <li className='col-sm-4'>
                            <div className={`${styles.theme_border} m-text-center ${styles.bg_white}`}>
                                <div className={styles.remove_fly}>
                                    <i>
                                        <FaTrashAlt/>
                                    </i>
                                </div>
                                <div className={`${styles.pro_img} ${styles.flip_box}`}>
                                          <a>
                                            <div className={styles.flip_box_inner}>
                                                <div className={styles.flip_box_front}>
                                                    <img src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                                </div>
                                                <div className={styles.flip_box_back}>
                                                    <img src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                                </div>
                                            </div>
                                          </a>
                                 </div>
                                 <div className={`${styles.prod_code} text-center`}>
                                          <h3>
                                            <a>Multiply MR IS 303 Grade Plywood. </a>
                                          </h3>
                                    </div>
                                <input data-v-73ef41d5="" type="hidden" class="cart_product_id1" value="1"/>
                                 <input data-v-73ef41d5="" type="hidden" value="3874" class="productrangedesc2"/>
                                 <div className={`${styles.prod_name} text-center`}> 
                                          <a>Plywood</a>
                                      </div>
                                      <div className={`${styles.size_thik} hidden-sm`}>
                                          <p>
                                            Select Thickness : 6MM
                                          </p>

                                          <p>
                                            Select Size : 8*4
                                          </p>
                                          <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                      </div>
                                      <div id='pr2'>
                                          <div className={`${styles.price_div}`}>
                                              <div className='col-6' style={{padding:'unset'}}>
                                              <div className={styles.cut_price}>
                                                      <i>
                                                          <FaRupeeSign/>
                                                      </i>
                                                      1310
                                                  </div>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      1048
                                                  </div>
                                                  
                                              </div>
                                          </div>
                                          <div className={styles.prod_price}>
                                              <div className={styles.save_par}>
                                                    You Save
                                                    <span>0 (0% off)</span>
                                              </div>  
                                              <div className={`${styles.row} row`}>
                                                  <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                      <div className={styles.add_com_p}>
                                                          <i>
                                                            <FaShoppingCart/>
                                                          </i>
                                                      </div>
                                                  </div>
                                                  <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                      <div className={styles.add_com_p}>
                                                          <i>
                                                            <FaHeart/>
                                                          </i>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                            </div>
                        </li>
                        <li className='col-sm-4'>
                            <div className={`${styles.theme_border} m-text-center ${styles.bg_white}`}>
                                <div className={styles.remove_fly}>
                                    <i>
                                        <FaTrashAlt/>
                                    </i>
                                </div>
                                <div className={`${styles.pro_img} ${styles.flip_box}`}>
                                          <a>
                                            <div className={styles.flip_box_inner}>
                                                <div className={styles.flip_box_front}>
                                                    <img src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                                </div>
                                                <div className={styles.flip_box_back}>
                                                    <img src='https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1 Multiply MR.png' alt='Multiply MR IS 303 Grade Plywood.' className={styles.change_hover_img}/>
                                                </div>
                                            </div>
                                          </a>
                                 </div>
                                 <div className={`${styles.prod_code} text-center`}>
                                          <h3>
                                            <a>Multiply MR IS 303 Grade Plywood. </a>
                                          </h3>
                                    </div>
                                <input data-v-73ef41d5="" type="hidden" class="cart_product_id1" value="1"/>
                                 <input data-v-73ef41d5="" type="hidden" value="3874" class="productrangedesc2"/>
                                 <div className={`${styles.prod_name} text-center`}> 
                                          <a>Plywood</a>
                                      </div>
                                      <div className={`${styles.size_thik} hidden-sm`}>
                                          <p>
                                            Select Thickness : 6MM
                                          </p>

                                          <p>
                                            Select Size : 8*4
                                          </p>
                                          <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                      </div>
                                      <div id='pr2'>
                                          <div className={`${styles.price_div}`}>
                                              <div className='col-6' style={{padding:'unset'}}>
                                              <div className={styles.cut_price}>
                                                      <i>
                                                          <FaRupeeSign/>
                                                      </i>
                                                      1310
                                                  </div>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      1048
                                                  </div>
                                                  
                                              </div>
                                          </div>
                                          <div className={styles.prod_price}>
                                              <div className={styles.save_par}>
                                                    You Save
                                                    <span>0 (0% off)</span>
                                              </div>  
                                              <div className={`${styles.row} row`}>
                                                  <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                      <div className={styles.add_com_p}>
                                                          <i>
                                                            <FaShoppingCart/>
                                                          </i>
                                                      </div>
                                                  </div>
                                                  <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                      <div className={styles.add_com_p}>
                                                          <i>
                                                            <FaHeart/>
                                                          </i>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                            </div>
                        </li> */}
                    </ul>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Wishlist