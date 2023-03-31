import React, { useEffect, useMemo, useState } from 'react'
import styles from '@/styles/productDetails.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import axios from '../axios';
import Select from 'react-select';

const SingleProductDetails = ({thicknesslist,sizelist, name,variants, category_name, rating,per_sq_ft}) => {
    const [thickness, setThickness] = useState(thicknesslist ? thicknesslist[0].thickness: '6MM')
        const [size, setSize] = useState(sizelist ? sizelist[0].sizelist: '8x4')
        // const [prodId, setProdId] = useState(product.variants ? product.variants[0].id: "")
        const price = useMemo(
            () => {
              return (variants && variants.filter((item)=>{
                return item.size=== size && item.thickness===thickness
              }))
            },
            [size, thickness]
          );
        //   console.log(price)

        //   console.log(size, thickness)

  return (
   <>
   <div className={`${styles.right_border} ${styles.z_index_9} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                            <div>
                        <div className={styles.heading}>
                            {category_name}
                        </div>
                        <div className={styles.sku_code}> {name}</div>
                        <div className={`${styles.rating} ${styles.hide}`}>
                           {rating}
                            <i></i>
                            Based on 22 ratings
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    {price ? price[0].selling_cost : 0}
                                    {/* {variantSingle.selling_cost} */}
                                    
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>incl. GST</span>
                                    <div className={styles.cut_price} style={{fontSize:'14px'}}>
                                        <i><FaRupeeSign/></i>
                                        {price ? price[0].purchese_cost : 0}
                                    </div>
                                        <br/>
                                </div>
                            </div>
                            <div className='col-6'>
                               
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    {per_sq_ft}
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>/ Sq.ft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.size_thik} ${styles.font_18} my-3`}>
                        <p>
                            Select : Thickness
                          
                            <select id='thickness0' onChange={(e) => setThickness(e.target.value)} value={thickness} name='thickness' tabIndex='-1' className='size'>
                                {/* <option value="">Select Thickness </option> */}
                                {thicknesslist && thicknesslist.map((thick)=>
                                          <option key={thick.thickness}  value={thick.thickness}>{thick.thickness}</option>
                                          )}
                               
                            </select>
                           
                        </p>
                        <p className='py-3'>
                            Select : Size
                            <select className='size'  onChange={(e) => setSize(e.target.value)} value={size}  id='size0' name='size' tabIndex='-1'>
                            {/* <option>Select Size</option> */}
                            {sizelist && sizelist.map((size)=>
                                          <option key={size.size} value={size.size}>{size.size}</option>
                                          )}
                            </select>
                        </p>
                        <p className='py-2'>
                            Quantity:
                            <input type="number" className={styles.thick} style={{backgroundColor: 'rgb(202, 143, 101)'}} placeholder='1'/>
                        </p>
                    </div>
                    </div>
   </>
  )
}

export default SingleProductDetails