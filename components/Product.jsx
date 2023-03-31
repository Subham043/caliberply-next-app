import React, { useEffect, useState } from 'react'
import styles from '@/styles/Category.module.css';
import Navbar from './Navbar';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import FeatureProduct from './FeatureProduct';
import productLists from './productList'
import axios from '../axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Product= ()=> {
    // console.log(data)
    // const [categoryProd, setCategoryProd] = useState([])
    // const router = useRouter()
    // const category = router.query.productName
    // const [productCategory, setProductCategory] = useState([])
    // useEffect(() => {
    //     axios.post('/',{
    //         type:"getCategoryProduct",
    //         cid:category
    //     })
    //     .then(res => {
    //      console.log(res.data)
    //      setProductCategory(res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       })
    // },[productCategory])

  return (
    <>
    <section className={`${styles.whites_bg} mt-5`}>
        <div className='container'>
            <div className='row'>
                <div className={`${styles.product_range_left} col-sm-3`}>
                    <div className={`${styles.input_group} ${styles.custom_search_form}`}>
                        <input type='text' placeholder='Search...' className={`${styles.search_input} form-control`}/>
                        <span className={styles.input_group_btn}>
                            <button type='button' className={`${styles.btn} ${styles.btn_default} ${styles.search_btn}`}>
                              <span><FaSearch/></span>
                            </button>
                        </span>
                    </div>
                    <div className={styles.product_range_left_wrap}>
                        <div className={styles.category}>
                            <h3>Categories</h3>
                        
                        <div className={styles.cate_accordian}>
                            <ul>
                              <li>
                                <label>
                                  <span>
                                    <a>Commercial Plywood (MR) </a>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <span>
                                    <a>Water Resistant Plywood (BWR)</a>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <span>
                                    <a>Waterproof Plywood (BWP) </a>
                                  </span>
                                </label>
                              </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className={styles.slide_left_menu}></div>
                    <div className={styles.slide_left_menu}></div>
                </div>
                <div className={`${styles.product_range_right} ${styles.product_range_list} col-sm-9`}>
                    <span className={styles.posts_content}>
                          <ul className={`${styles.listings} row`} id='products_listing'>
                           {productCategory.map((product)=>
                            <li key={product.id} className='col-sm-4'>
                            <div className={`${styles.theme_border} ${styles.m_text_center} bg-white`}>
                                <div className={`${styles.pro_img} ${styles.flip_box}`}>
                                    <a>
                                      <div className={styles.flip_box_inner}>
                                          <div className={styles.flip_box_front}>
                                              <Image height='50' width='20' src={product.img} alt={product.name} className={styles.change_hover_img}/>
                                          </div>
                                          <div className={styles.flip_box_back}>
                                              <Image height='50' width='20' src={product.img} alt={product.name} className={styles.change_hover_img}/>
                                          </div>
                                      </div>
                                    </a>
                                </div>
                                <div className={`${styles.prod_code} text-center`}>
                                    <h3>
                                      <a>{product.name} </a>
                                    </h3>
                                </div>
                                <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
                                <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
                                <div className={`${styles.prod_name} text-center`}> 
                                    <a>{product.category}</a>
                                </div>
                                <div className={`${styles.size_thik} hidden-sm`}>
                                    <p>
                                      Select Thickness
                                      <select id='thickness0' name='size' className='size' tabIndex='-1'>
                                          <option>Select Thickness</option>
                                          <option selected="selected" value="6MM"> 6MM</option>
                                          <option value="8MM"> 8MM</option>
                                          <option value="12MM"> 12MM</option>
                                          <option value="18/19MM"> 18/19MM</option>
                                      </select>
                                    </p>

                                    <p>
                                      Select Size
                                      <select id='size0' name='size' className='size' tabIndex='-1'>
                                          <option>Select Size</option>
                                          <option selected="selected" value="8x4"> 8x4</option>
                                          <option value="7x4">7x4 </option>
                                      </select>
                                    </p>
                                    <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                </div>
                                <div id='pr2'>
                                    <div className={`${styles.price_div} row`}>
                                        <div className='col-6' style={{padding:'unset'}}>
                                            <div className={`${styles.price} ${styles.priceid2}`}>
                                                <i><FaRupeeSign/></i>
                                                {product.price}
                                            </div>
                                            <br/>
                                            <span style={{fontSize:'12px'}}>incl. GST</span>
                                            <br/>
                                            <div className={styles.cut_price}>
                                                <i>
                                                    <FaRupeeSign/>
                                                </i>
                                               {product.cutPrice}
                                            </div>
                                        </div>
                                        <div className='col-6' style={{padding:'unset'}}>
                                            <div className={`${styles.price} ${styles.priceid2}`}>
                                                <i>
                                                  <FaRupeeSign/>
                                                </i>
                                                {product.excGst}
                                            </div>
                                            <p style={{fontSize:'12px', marginTop:'5px'}}>&nbsp; excl. GST</p>
                                            <div className={`${styles.price1} ${styles.priceid2}`}>
                                                <i><FaRupeeSign/></i>
                                                {product.pricePerSquare} /Sq.ft
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
                           )}
                              {/* <li className='col-sm-4'>
                                  <div className={`${styles.theme_border} ${styles.m_text_center} bg-white`}>
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
                                      <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
                                      <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
                                      <div className={`${styles.prod_name} text-center`}> 
                                          <a>Plywood</a>
                                      </div>
                                      <div className={`${styles.size_thik} hidden-sm`}>
                                          <p>
                                            Select Thickness
                                            <select id='thickness0' name='size' className='size' tabIndex='-1'>
                                                <option>Select Thickness</option>
                                                <option selected="selected" value="6MM"> 6MM</option>
                                                <option value="8MM"> 8MM</option>
                                                <option value="12MM"> 12MM</option>
                                                <option value="18/19MM"> 18/19MM</option>
                                            </select>
                                          </p>

                                          <p>
                                            Select Size
                                            <select id='size0' name='size' className='size' tabIndex='-1'>
                                                <option>Select Size</option>
                                                <option selected="selected" value="8x4"> 8x4</option>
                                                <option value="7x4">7x4 </option>
                                            </select>
                                          </p>
                                          <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                      </div>
                                      <div id='pr2'>
                                          <div className={`${styles.price_div} row`}>
                                              <div className='col-6' style={{padding:'unset'}}>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      1048
                                                  </div>
                                                  <br/>
                                                  <span style={{fontSize:'12px'}}>incl. GST</span>
                                                  <br/>
                                                  <div className={styles.cut_price}>
                                                      <i>
                                                          <FaRupeeSign/>
                                                      </i>
                                                      1310
                                                  </div>
                                              </div>
                                              <div className='col-6' style={{padding:'unset'}}>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i>
                                                        <FaRupeeSign/>
                                                      </i>
                                                      888.14
                                                  </div>
                                                  <p style={{fontSize:'12px', marginTop:'5px'}}>&nbsp; excl. GST</p>
                                                  <div className={`${styles.price1} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      33 / Sq.ft
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
                                  <div className={`${styles.theme_border} ${styles.m_text_center} bg-white`}>
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
                                      <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
                                      <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
                                      <div className={`${styles.prod_name} text-center`}> 
                                          <a>Plywood</a>
                                      </div>
                                      <div className={`${styles.size_thik} hidden-sm`}>
                                          <p>
                                            Select Thickness
                                            <select id='thickness0' name='size' className='size' tabIndex='-1'>
                                                <option>Select Thickness</option>
                                                <option selected="selected" value="6MM"> 6MM</option>
                                                <option value="8MM"> 8MM</option>
                                                <option value="12MM"> 12MM</option>
                                                <option value="18/19MM"> 18/19MM</option>
                                            </select>
                                          </p>

                                          <p>
                                            Select Size
                                            <select id='size0' name='size' className='size' tabIndex='-1'>
                                                <option>Select Size</option>
                                                <option selected="selected" value="8x4"> 8x4</option>
                                                <option value="7x4">7x4 </option>
                                            </select>
                                          </p>
                                          <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                      </div>
                                      <div id='pr2'>
                                          <div className={`${styles.price_div} row`}>
                                              <div className='col-6' style={{padding:'unset'}}>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      1048
                                                  </div>
                                                  <br/>
                                                  <span style={{fontSize:'12px'}}>incl. GST</span>
                                                  <br/>
                                                  <div className={styles.cut_price}>
                                                      <i>
                                                          <FaRupeeSign/>
                                                      </i>
                                                      1310
                                                  </div>
                                              </div>
                                              <div className='col-6' style={{padding:'unset'}}>
                                                  <div className={`${styles.price} ${styles.priceid2}`}>
                                                      <i>
                                                        <FaRupeeSign/>
                                                      </i>
                                                      888.14
                                                  </div>
                                                  <p style={{fontSize:'12px', marginTop:'5px'}}>&nbsp; excl. GST</p>
                                                  <div className={`${styles.price1} ${styles.priceid2}`}>
                                                      <i><FaRupeeSign/></i>
                                                      33 / Sq.ft
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
        </div>
    </section>
    </>
  )
}
export default Product;








