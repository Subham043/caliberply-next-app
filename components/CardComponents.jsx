import React, { useEffect, useMemo, useState } from 'react'
import styles from '@/styles/Category.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import axios from '../axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardComponents = ({name, category_name, thicknesslist,id,selling_cost,purchese_cost,per_sq_ft,thickness,size, sizelist, front_image, variants}) => {
    const [thickness1, setThickness] = useState(thicknesslist.length>0 ? thicknesslist[0].thickness : '')
    const [size1, setSize] = useState(sizelist.length>0 ? sizelist[0].size : '')
    const price = useMemo(
      () => {
        return variants.filter((item)=>{
          return item.size === size1 && item.thickness === thickness1
        })
      },
      [thickness1, size1]
    );
    

    const addCart = () =>{
      if(pricePerSquare.category_name.length> 20){
        toast.error('No product in this size and thickness')
       
    }else{
        axios.post('/',{
            type:"addtocart",
            ip:localStorage.getItem('ip_address'),
            uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
            qty:1,
            pid:price[0].id,
            total_amount:price[0].selling_cost,
            amount:price[0].selling_cost,
            name:name,
            size:''
        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status === 'success'){
            toast.success(res.data.msg)
         }else if(res.data.status === 'error'){
            toast.error(res.data.msg)
         }
    //   setCartItems(res.data)
        })
        .catch(err => {
            toast.error('Something Error')
          console.log(err)
          })
        }
    }


    const addwishlist = () =>{

        //   const [wishlist, setWishlist] = useState([])
        if(pricePerSquare.category_name.length> 20){
          toast.error('No product in this size and thickness')
         
      }else{
          axios.post('/',{
              type:"addWishList",
              ip:localStorage.getItem('ip_address'),
              uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
              pid:price[0].id
          })
          .then(res => {
        //    console.log(res.data.data)
           if(res.data.status === 'success'){
            toast.success(res.data.msg)
         }else if(res.data.status === 'error'){
            toast.error(res.data.msg)
         }
            
        // setWishlist(res.data)
          })
          .catch(err => {
            console.log(err)
            })
          }
      }

      const [pricePerSquare, setPricePerSquare] = useState([])
      // console.log(pricePerSquare)
      useEffect(() => {
        axios.post('/',{
            type:"getVariantSingle",
           pid:price.length>0?price[0].id:id,
           thickness:price.length>0?price[0].thickness:thickness1,
           size:price.length>0?price[0].size:size1,
           vid:price.length>0?price[0].thickness:thickness1,
           vname:'thickness'
        })
        .then(res => {
        //  console.log(res.data)
        setPricePerSquare(res.data.data)
        })
        .catch(err => {
          console.log(err)
          })
        },[price])
        // console.log(pricePerSquare.name)

      //   const [pricePerSquare1, setPricePerSquare1] = useState([])
      // useEffect(() => {
      //   axios.post('/',{
      //       type:"getVariantSingle",
      //      pid:price[0].id,
      //      thickness:price[0].thickness,
      //      size:price[0].size,
      //      vid:size1,
      //      vname:'size'
      //   })
      //   .then(res => {
      //   //  console.log(res.data)
      //   setPricePerSquare1(res.data.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     })
      //   },[])

        // console.log(pricePerSquare)


  return (
   <>
   <div className={`${styles.theme_border} ${styles.m_text_center} bg-white`}>
                                <div className={`${styles.pro_img} ${styles.flip_box}`}>
                                    {/* <> */}
                                      <div className={styles.flip_box_inner}>
                                       <Link href={price.length>0?`/productdetails/${price[0].id}`:`/productdetails/${id}`}>
                                       <div className={styles.flip_box_front}>
                                              <Image priority src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${front_image}`}  width={500}
       height={500} alt={name} className={styles.change_hover_img}/>
                                          </div>
                                          <div className={styles.flip_box_back}>
                                              <Image priority src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${front_image}`}  width={500}
       height={500} alt={name} className={styles.change_hover_img}/>
                                          </div>
                                       </Link>    
                                      </div>
                                    {/* </> */}
                                </div>
                                <div className={`${styles.prod_code} text-center`}>
                                    <h3>
                                      <Link href={price.length>0?`/productdetails/${price[0].id}`:`/productdetails/${id}`}>{name} </Link>
                                    </h3>
                                </div>
                                <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
                                <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
                                <div className={`${styles.prod_name} text-center`}> 
                                    <i>{category_name}</i>
                                </div>
                                <div className={`${styles.size_thik}`}>
                                    <p>
                                      Select Thickness
                                      <select id='thickness0' onChange={(e) => setThickness(e.target.value)} value={price.length>0?price[0].thickness:thickness1}  name='thickness' className='thickness' tabIndex='-1'>
                                          {/* <option>Select Thickness</option> */}
                                          {thicknesslist.map((thick,i)=>
                                          <option key={i} value={thick.thickness}>{thick.thickness}</option>
                                          )}
                                          {/* <option selected="selected" value="6MM"> 6MM</option>
                                          <option value="8MM"> 8MM</option>
                                          <option value="12MM"> 12MM</option>
                                          <option value="18/19MM"> 18/19MM</option> */}
                                      </select>
                                    </p>

                                    <p>
                                      Select Size
                                      <select id='size0' onChange={(e) => setSize(e.target.value)} value={price && price.length>0?price[0].size:size1}  name='size' className='size' tabIndex='-1'>
                                          {/* <option>Select Size</option> */}
                                          {sizelist.map((size,i)=>
                                          <option key={i} value={size.size}>{size.size}</option>
                                          )}
                                         {/*   <option selected="selected" value="8x4"> 8x4</option>
                                           <option value="7x4">7x4 </option> */}
                                      </select>
                                    </p>
                                    <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
                                </div>
                                <div id='pr2'>
                                    <div className={`${styles.price_div} row`}>
                                        <div className='col-6' style={{padding:'unset'}}>
                                            <div className={`${styles.price} ${styles.priceid2}`}>
                                                <i><FaRupeeSign/></i>
                                                {price.length>0 ? price[0].selling_cost : selling_cost}
                                            </div>
                                            <br/>
                                            <span style={{fontSize:'12px'}}>incl. GST</span>
                                            <br/>
                                            <div className={styles.cut_price}>
                                                <i>
                                                    <FaRupeeSign/>
                                                </i>
                                               {price.length > 0 ? price[0].purchese_cost : purchese_cost}
                                            </div>
                                        </div>
                                        <div className='col-6' style={{padding:'unset'}}>
                                            {/* <div className={`${styles.price} ${styles.priceid2}`}>
                                                <i>
                                                  <FaRupeeSign/>
                                                </i>
                                                {excGst}
                                            </div> */}
                                            {/* <p style={{fontSize:'12px', marginTop:'5px'}}>&nbsp; excl. GST</p> */}
                                            <div className={`${styles.price1} ${styles.priceid2}`}>
                                                <i><FaRupeeSign/></i>
                                                {price.length>0 && price[0].selling_cost === selling_cost ? per_sq_ft: pricePerSquare.per_sq_ft || per_sq_ft} /Sq.ft
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
                                                 {/* <Link href='/cart'> */}
                                                 <i>
                                                      {/* <FaShoppingCart onClick={()=>dispatch(addToCart(getCart))}/> */}
                                                      <FaShoppingCart onClick={addCart}/>
                                                    </i>
                                                 {/* </Link> */}
                                                  
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
                                                <div className={styles.add_com_p}>
                                                    <i>
                                                      <FaHeart onClick={addwishlist}/>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
   </>
  )
}

export default CardComponents