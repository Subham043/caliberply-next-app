import React, { useEffect, useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'bootstrap/dist/css/bootstrap.css';

import "swiper/css";
import "swiper/css/pagination";
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { getServerSideProps } from "@/pages";
import Link from "next/link";
import axios from "../axios";
import Image from "next/image";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// import { Pagination } from "swiper";

const ProductHome = ({name, category_name, thicknesslist,id,selling_cost,purchese_cost,per_sq_ft, sizelist, front_image, variants}) => {


    const addToCart = () =>{
        axios.post('/',{
            type:"addtocart",
            ip:localStorage.getItem('ip_address'),
            uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
            qty:1,
            pid:price[0].id,
            total_amount:selling_cost,
            amount:selling_cost,
            name:name,
            size:""
        })
        .then(res => {
        //  console.log(res.data)
         if(res.data.status==='success'){
            toast.success(res.data.msg)
         }else if(res.data.status==='error'){
            toast.error(res.data.msg)
         }
    //   setCartItems(res.data)
        })
        .catch(err => {
          console.log(err)
          })
    }

    const addToWish = () =>{

        //   const [wishlist, setWishlist] = useState([])

          axios.post('/',{
              type:"addWishList",
              ip:localStorage.getItem('ip_address'),
              uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
              pid:price[0].id
          })
          .then(res => {
        //    console.log(res.data.data)
           if(res.data.status==='success'){
            toast.success(res.data.msg)
         }else if(res.data.status==='error'){
            toast.error(res.data.msg)
         }
        // setWishlist(res.data)
          })
          .catch(err => {
            console.log(err)
            })
      }

      const [thickness, setThickness] = useState(thicknesslist.length>0 ? thicknesslist[0].thickness: "")
      const [size, setSize] = useState(sizelist.length>0 ? sizelist[0].size: "")
      const price = useMemo(
        () => {
          return (variants && variants.filter((item)=>{
            return item.size === size && item.thickness === thickness
          }))
        },
        [thickness, size]
      );


      const [pricePerSquare, setPricePerSquare] = useState([])
      useEffect(() => {
        axios.post('/',{
            type:"getVariantSingle",
           pid:price[0].id,
           thickness:price[0].thickness,
           size:price[0].size,
           vid:price[0].thickness,
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



  return (

<>



        
                {/* {features.length > 0 && features.slice(0,3).map((feature)=> */}
            
                 <div className="theme-border m-text-center bg-white">
                 <div className="pro-img flip-box">
                     <Link href={`/productdetails/${price[0].id}`}>
                     <div className="flip-box-inner">
                         <div className="flip-box-front home-product-list">
                            <Link href={`/productdetails/${id}`}>
                            <Image height='300' width='200'
                 src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${front_image}`}
                 alt={name}
                 title={name}
                // style={{height:'350px'}}
                 className="change-hover-img"
                 />
                            </Link>
                         
                         </div>
                         <div className="flip-box-back home-product-list">
                         <Image height='300' width='200'
                 src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${front_image}`}
                 alt={name}
                 title={name}
                //  style={{height:'350px'}}
                 className="change-hover-image"
                 />
                         </div>
                     </div>
                     </Link>
                 </div>
                 <div className="prod-code text-center">
                     <h3>
                         <Link href='#'> {name}</Link>
                     </h3>
                 </div>
                 <input type="hidden" className="cart_product_id" value='1'/>
                 <input type="hidden" className="productrangedesc2" value='3874'/> 

                 <div className="prod-name text-center">
                     <p>{category_name}</p>
                 </div>   

                 <div className="size-thik hidden-sm-0">
                     <p>
                         Select : Thickness
                         <select name='size' onChange={(e) => setThickness(e.target.value)} value={thickness} id="thickness0" tabIndex='-1' className="size">
                             {/* <option>Select Thickness</option> */}
                             {thicknesslist && thicknesslist.map((thick,i)=>
                             <option key={i} value={thick.thickness}>{thick.thickness}</option>
                             )}

                             {/* <option selected="selected" value='6MM'>{thickness}</option>
                             <option value="8MM">{thickness}</option>
                             <option value="12MM">{thickness}</option>
                             <option value="18/19MM">{thickness}</option> */}
                         </select>
                     </p>
                     <p>
                         Select : Size
                         <select name='size' onChange={(e) => setSize(e.target.value)} value={size} id="size0" tabIndex='-1' className="size">
                             {/* <option>Select Size</option> */}
                             {sizelist && sizelist.map((size,i)=>
                             <option key={i} value={size.size}>{size.size}</option>
                             )}
                             {/* <option selected="selected" value='8×4'>8×4</option>
                             <option value="7×4">7×4</option> */}
                         </select>
                     </p>
                     <div className="select-error-size errorsize2 hidden">
                         Please Select Size
                     </div>

                     <div id="pr2">
                             <div className="price-div row">
                                 <div className="col-6" style={{padding:'unset'}}>
                                     <div className="price priceid2">
                                         <p>

                                         <FaRupeeSign/> {price.length > 0 ? price[0].selling_cost : 0}
                                         </p>
                                     </div><br/>
                                     <span style={{fontSize:"12px"}}>incl. GST</span>
                                     <br/>
                                     <div className="cut-price">
                                         <p>
                                         <FaRupeeSign/>
                                         {price.length > 0 ? price[0].purchese_cost : 0}
                                         </p>
                                     </div>
                                     <br/>

                                 </div>




                                 <div className="col-6" style={{padding:'unset'}}>
                                     {/* <div className="price priceid2">
                                         <p>

                                         <FaRupeeSign/> 888.14
                                         </p>
                                     </div><br/>
                                     <span style={{fontSize:"12px" , marginTop:'5px'}}>&nbsp; excl. GST</span>
                                     <br/> */}
                                     <div className="price priceid2">
                                         <p>
                                         <FaRupeeSign/>
                                             {price[0].selling_cost===selling_cost?per_sq_ft: pricePerSquare.per_sq_ft} / Sq.ft
                                         </p>
                                     </div>
                                     <br/>

                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-md-6 col-6 text-center hover hover-clr" style={{borderRight: "2px solid rgb(255, 215, 187)"}}>
                                         <div className="add-com-p">
                                             <p>
                                                 <FaShoppingCart onClick={addToCart}/>

                                             </p>
                                         </div>
                                 </div>

                                 <div className="col-md-6 col-6 text-center hover hover-clr">
                                         <div className="add-com-p">
                                             <p>
                                             <FaHeart onClick={addToWish}/>

                                             </p>
                                         </div>
                                 </div>
                             </div>
                     </div>
                 </div>                
             </div>
               
            
                {/* )} */}
            {/* <div className="col-sm-4" style={{padding:'10px'}}>
                <div className="theme-border m-text-center bg-white">
                    <div className="pro-img flip-box">
                        <a href="#">
                        <div className="flip-box-inner">
                            <div className="flip-box-front home-product-list">
                            <img
                    src="https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1%20Multiply%20MR.png"
                    alt=""
                    
                    className=" change-hover-img"
                    />
                            </div>
                            <div className="flip-box-back home-product-list">
                            <img
                    src="https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1%20Multiply%20MR.png"
                    alt=""
                    height={250}
                    width={250}
                    className="change-hover-image"
                    />
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="prod-code text-center">
                        <h3>
                            <a href="#"> Multiply MR IS 303 Grade Plywood.</a>
                        </h3>
                    </div>
                    <input type="hidden" className="cart_product_id" value='1'/>
                    <input type="hidden" className="productrangedesc2" value='3874'/> 

                    <div className="prod-name text-center">
                        <a>Plywood</a>
                    </div>   

                    <div className="size-thik hidden-sm-0">
                        <p>
                            Select : Thickness
                            <select name='size' id="thickness0" tabIndex='-1' className="size">
                                <option>Select Thickness</option>
                                <option selected="selected" value='6MM'>6MM</option>
                                <option value="8MM">8MM</option>
                                <option value="12MM">12MM</option>
                                <option value="18/19MM">18/19MM</option>
                            </select>
                        </p>
                        <p>
                            Select : Size
                            <select name='size' id="size0" tabIndex='-1' className="size">
                                <option>Select Size</option>
                                <option selected="selected" value='8×4'>8×4</option>
                                <option value="7×4">7×4</option>
                            </select>
                        </p>
                        <div className="select-error-size errorsize2 hidden">
                            Please Select Size
                        </div>

                        <div id="pr2">
                                <div className="price-div row">
                                    <div className="col-6" style={{padding:'unset'}}>
                                        <div className="price priceid2">
                                            <p>

                                            <FaRupeeSign/> 1048
                                            </p>
                                        </div><br/>
                                        <span style={{fontSize:"12px"}}>incl. GST</span>
                                        <br/>
                                        <div className="cut-price">
                                            <p>
                                            <FaRupeeSign/>
                                                1310
                                            </p>
                                        </div>
                                        <br/>

                                    </div>




                                    <div className="col-6" style={{padding:'unset'}}>
                                        <div className="price priceid2">
                                            <p>

                                            <FaRupeeSign/> 888.14
                                            </p>
                                        </div><br/>
                                        <span style={{fontSize:"12px" , marginTop:'5px'}}>&nbsp; excl. GST</span>
                                        <br/>
                                        <div className="price priceid2">
                                            <p>
                                            <FaRupeeSign/>
                                                33/ Sq.ft
                                            </p>
                                        </div>
                                        <br/>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-6 text-center hover hover-clr" style={{borderRight: "2px solid rgb(255, 215, 187)"}}>
                                            <div className="add-com-p">
                                                <p>
                                                    <FaShoppingCart/>

                                                </p>
                                            </div>
                                    </div>

                                    <div className="col-md-6 col-6 text-center hover hover-clr">
                                            <div className="add-com-p">
                                                <p>
                                                <FaHeart/>

                                                </p>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="col-sm-4" style={{padding:'10px'}}>
                <div className="theme-border m-text-center bg-white">
                    <div className="pro-img flip-box">
                        <a href="#">
                        <div className="flip-box-inner">
                            <div className="flip-box-front home-product-list">
                            <img
                    src="https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1%20Multiply%20MR.png"
                    alt=""
                    
                    className=" change-hover-img"
                    />
                            </div>
                            <div className="flip-box-back home-product-list">
                            <img
                    src="https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/1%20Multiply%20MR.png"
                    alt=""
                    className=" change-hover-image"
                    />
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="prod-code text-center">
                        <h3>
                            <a href="#"> Multiply MR IS 303 Grade Plywood.</a>
                        </h3>
                    </div>
                    <input type="hidden" className="cart_product_id" value='1'/>
                    <input type="hidden" className="productrangedesc2" value='3874'/> 

                    <div className="prod-name text-center">
                        <a>Plywood</a>
                    </div>   

                    <div className="size-thik hidden-sm-0">
                        <p>
                            Select : Thickness
                            <select name='size' id="thickness0" tabIndex='-1' className="size">
                                <option>Select Thickness</option>
                                <option selected="selected" value='6MM'>6MM</option>
                                <option value="8MM">8MM</option>
                                <option value="12MM">12MM</option>
                                <option value="18/19MM">18/19MM</option>
                            </select>
                        </p>
                        <p>
                            Select : Size
                            <select name='size' id="size0" tabIndex='-1' className="size">
                                <option>Select Size</option>
                                <option selected="selected" value='8×4'>8×4</option>
                                <option value="7×4">7×4</option>
                            </select>
                        </p>
                        <div className="select-error-size errorsize2 hidden">
                            Please Select Size
                        </div>

                        <div id="pr2">
                                <div className="price-div row">
                                    <div className="col-6" style={{padding:'unset'}}>
                                        <div className="price priceid2">
                                            <p>

                                            <FaRupeeSign/> 1048
                                            </p>
                                        </div><br/>
                                        <span style={{fontSize:"12px"}}>incl. GST</span>
                                        <br/>
                                        <div className="cut-price">
                                            <p>
                                            <FaRupeeSign/>
                                                1310
                                            </p>
                                        </div>
                                        <br/>

                                    </div>




                                    <div className="col-6" style={{padding:'unset'}}>
                                        <div className="price priceid2">
                                            <p>

                                            <FaRupeeSign/> 888.14
                                            </p>
                                        </div><br/>
                                        <span style={{fontSize:"12px" , marginTop:'5px'}}>&nbsp; excl. GST</span>
                                        <br/>
                                        <div className="price priceid2">
                                            <p>
                                            <FaRupeeSign/>
                                                33/ Sq.ft
                                            </p>
                                        </div>
                                        <br/>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-6 text-center hover hover-clr" style={{borderRight: "2px solid rgb(255, 215, 187)"}}>
                                            <div className="add-com-p">
                                                <p>
                                                    <FaShoppingCart/>

                                                </p>
                                            </div>
                                    </div>

                                    <div className="col-md-6 col-6 text-center hover hover-clr">
                                            <div className="add-com-p">
                                                <p>
                                                <FaHeart/>

                                                </p>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>                
                </div>
            </div> */}
        {/* </div>
   </div> */}
</>







   
  )
}

export default ProductHome


