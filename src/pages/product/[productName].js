import React, { useEffect, useState } from 'react'
import styles from '@/styles/Category.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import axios from '../../../axios';
import { useRouter } from 'next/router';
import Navbar2 from 'components/Navbar2';
// import SideCategory from 'components/SideCategory';
// import CategoryProduct from 'components/CategoryProduct';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { Footer } from 'components';
import CardComponents from 'components/CardComponents';
import { GiHamburgerMenu } from 'react-icons/gi';

const ProductName = () => {

    const [categoryProd, setCategoryProd] = useState([])
    const [subCategoryProd, setSubCategoryProd] = useState([])
// console.log(subCategoryProd.subcategory)
  const router = useRouter()
    const category = router.query.productName
    const subCategory = router.query.productName


    const [navbar1, setNavbar] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"getAllCategory"
      })
      .then(res => {
      //  console.log(res.data)
       setNavbar(res.data.category)
      })
      .catch(err => {
        console.log(err)
        })
  },[])

    useEffect(() => {
      axios.post('/',{
          type:"getSubCategory",
          category_id:subCategory
      })
      .then(res => {
    //    console.log(res.data.subcategory)
       if(Array.isArray(res.data.subcategory)){
           setSubCategoryProd(res.data.subcategory)
       }
      })
      .catch(err => {
        console.log(err)
        })
      },[subCategory])

    useEffect(() => {
          axios.post('/',{
              type:"getCategoryProduct",
              cid:category
          })
          .then(res => {

            // if(Array.isArray(res.data.data)){
                setCategoryProd(res.data.data)
            // }
        //    console.log(res.data.data)
          })
          .catch(err => {
            console.log(err)
            })
          },[category])

        //   console.log(categoryProd.name)


        //   const myIpData = ()=>{
        //     let ip_address = JSON.parse(localStorage.getItem("ip_address"));
        //     const [min, setMin] = useState(100000)
        //     const [max, setMax] = useState(100000)
        //     if (ip_address == null) {
        //       let num = Math.floor(Math.random() * (max - min + 1)) + min;
        //       localStorage.setItem("ip_address", JSON.stringify(num));
        //       console.log(ip_address)
        //   }}

        //   console.log(myIpData)


        //   const [loading, setLoading] = useState() 
        const [uid , setUid] = useState(null)
        useEffect(()=>{
          setUid(localStorage.getItem('uid'))
        },[uid])
  
          useEffect(()=>{
              let setIp = JSON.parse(localStorage.getItem("ip_address"));
              if (setIp === null) {
                var min = 100000;
                var max = 999999;
                var num = Math.floor(Math.random() * (max - min + 1)) + min;
                localStorage.setItem("ip_address", JSON.stringify(num));     
            }
          },[])

        //   const ip = JSON.parse(localStorage.getItem("ip_address"))
        //   const [cartItems, setCartItems] = useState([])

        const [singleVariant, setSingleVariant] = useState({
            thickness:'',
            size:''
        })

        const getData = (e) =>{
     
            const {value, name} = e.target;
    
            setSingleVariant(()=>{
                return {
                    ...singleVariant,
                    [name]:value
                }
            })
    }

    

    

        const addCart = (data2) =>{
            axios.post('/',{
                type:"addtocart",
                ip:localStorage.getItem('ip_address'),
                uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
                qty:1,
                pid:data2.id,
                total_amount:data2.selling_cost,
                amount:data2.selling_cost,
                name:data2.name,
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

            const [getCart, setGetCart] = useState([])
            useEffect(() => {
              axios.post('/',{
                  type:"getMyCart",
                  ip:localStorage.getItem('ip_address'),
                  uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
              })
              .then(res => {
            //    console.log(res.data.data)
               setGetCart(res.data)
              })
              .catch(err => {
                console.log(err)
                })
              },[getCart])

              const addwishlist = (data2) =>{

                //   const [wishlist, setWishlist] = useState([])
    
                  axios.post('/',{
                      type:"addWishList",
                      ip:localStorage.getItem('ip_address'),
                      uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
                      pid:data2.id
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

              const [variantProduct, setVariantProduct] = useState([])
              useEffect(() => {
                axios.post('/',{
                    type:"getVariantProduct",
                   pid:null
                })
                .then(res => {
                //  console.log(res.data)
                setVariantProduct(res.data.data)
                })
                .catch(err => {
                  console.log(err)
                  })
                },[])


              const [selectThick, setSelectThick] = useState([])
              useEffect(() => {
                axios.post('/',{
                    type:"getVariantSingle",
                   pid:'5',
                   thickness:"18/19MM",
                   size:'7x4',
                   vid:"18/19MM",
                   vname:'thickness'
                })
                .then(res => {
                //  console.log(res.data)
              setSelectThick(res.data.data)
                })
                .catch(err => {
                  console.log(err)
                  })
                },[])

                const getSingleVarThick = (data2)=> {
                    // const {thickness, size} = singleVariant
                    axios.post('/',{
                        type:"getVariantSingle",
                       pid:data2.id,
                       thickness:"8MM",
                       size:'7x4',
                       vid:'7x4',
                       vname:'thickness'
                    })
                    .then(res => {
                    //  console.log(res.data)
                  setSelectThick(res.data.data)
                    })
                    .catch(err => {
                      console.log(err)
                      })
                }

               

                const getSingleVarSize = (data2)=> {
                    const {thickness, size} = singleVariant
                    axios.post('/',{
                        type:"getVariantSingle",
                       pid:data2.id,
                       thickness:thickness,
                       size:size,
                       vid:size,
                       vname:'size'
                    })
                    .then(res => {
                    //  console.log(res.data)
                  setSelectThick(res.data.data)
                    })
                    .catch(err => {
                      console.log(err)
                      })
                }

// console.log(cartItems)
//             console.log(categoryProd)

  return(
    <>
     <header>
        <Link href='/' className='logo'>
            <Image src='https://www.calibreply.com/img/logo.1b48625e.webp' alt='calibreply' width={150} height={50}/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label htmlFor='menu-bar'><GiHamburgerMenu/></label>

        <nav className='navbar'>
            <ul>
                
                <li><Link href='/' >Home</Link></li>
               
                    <li><Link href='#'  className='active'>Products</Link>
                    <ul >
                    {navbar1.length > 0 && navbar1.map((navData)=>
                        <li key={navData.id}><Link href={`/product/${navData.id}`}>{navData.heading}</Link>
                            <ul>
                                {navData.subcategory && navData.subcategory.map((sub)=>
                                 <li key={sub.id}>
                                    <Link href={`/product/${sub.id}`}>{sub.heading}</Link>
                                </li>
                                )}
                            </ul>
                        </li>
                        )}
                    </ul>
                </li>
                <li><Link href='/tools'>Tools</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/testimonials'>Testimonials</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li>{uid ? <Link href='/profile'>Profile</Link> : <Link href='/login'>Login</Link>}</li>
               
             
            </ul>
            <ul className='menu menu-main header-menu' >
                <li>
                  <Link href='/cart'> 
                     <span><i><FaShoppingCart/></i></span>
                     <span id="cartcount" className="counter-cart">{getCart.count}</span>
                 </Link>
                </li>
                <li>
                  <Link href='/wishlist'> 
                     <span><i><FaHeart/></i></span>
                 </Link>
                </li>
            </ul>
        </nav>
    </header>
     <section className='{styles.whites_bg} mt-5'>
        <div className='container'>
            <div className='row'>
                <div className={`${styles.product_range_left} col-sm-3`}>
                    {/* <div className={`${styles.input_group} ${styles.custom_search_form}`}>
                        <input type='text' placeholder='Search...' className={`${styles.search_input} form-control`}/>
                        <span className={styles.input_group_btn}>
                            <button type='button' className={`${styles.btn} ${styles.btn_default} ${styles.search_btn}`}>
                              <span><FaSearch/></span>
                            </button>
                        </span>
                    </div> */}
                    <div className={styles.product_range_left_wrap}>
                        <div className={styles.category}>
                            <h3>Categories</h3>
                        
                        <div className={styles.cate_accordian}>
                            <ul>
                            {subCategoryProd && subCategoryProd.map((cate)=>
                                <li key={cate.id}>
                                 <label>
                                      <span>
                                          <Link href={`/product/${cate.id}`}>{cate.heading}</Link>
                                       </span>
                                  </label>
                                </li>
                           )}
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
                           {categoryProd && categoryProd.map((data2)=>
      //                      <li key={data2.id} className='col-sm-4'>
      //                      <div className={`${styles.theme_border} ${styles.m_text_center} bg-white`}>
      //                          <div className={`${styles.pro_img} ${styles.flip_box}`}>
      //                              {/* <> */}
      //                                <div className={styles.flip_box_inner}>
      //                                 <Link href={`/productdetails/${data2.id}`}>
      //                                 <div className={styles.flip_box_front}>
      //                                        <Image priority src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${data2.front_image}`}  width={500}
      // height={500} alt={data2.name} className={styles.change_hover_img}/>
      //                                    </div>
      //                                    <div className={styles.flip_box_back}>
      //                                        <Image priority src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${data2.front_image}`}  width={500}
      // height={500} alt={data2.name} className={styles.change_hover_img}/>
      //                                    </div>
      //                                 </Link>    
      //                                </div>
      //                              {/* </> */}
      //                          </div>
      //                          <div className={`${styles.prod_code} text-center`}>
      //                              <h3>
      //                                <Link href={`/productdetails/${data2.id}`}>{data2.name} </Link>
      //                              </h3>
      //                          </div>
      //                          <input data-v-73ef41d5="" type="hidden" className="cart_product_id1" value="1"/>
      //                          <input data-v-73ef41d5="" type="hidden" value="3874" className="productrangedesc2"/>
      //                          <div className={`${styles.prod_name} text-center`}> 
      //                              <i>{data2.category_name}</i>
      //                          </div>
      //                          <div className={`${styles.size_thik} hidden-sm`}>
      //                              <p>
      //                                Select Thickness
      //                                <select id='thickness0' onChange={getData} name='thickness' className='thickness' tabIndex='-1'>
      //                                    <option>Select Thickness</option>
      //                                    {data2.variants && data2.variants.map((thick)=>
      //                                    <option key={thick.id}  selected={thick.thickness}  value={thick.thickness}>{thick.thickness}</option>
      //                                    )}
      //                                    {/* <option selected="selected" value="6MM"> 6MM</option>
      //                                    <option value="8MM"> 8MM</option>
      //                                    <option value="12MM"> 12MM</option>
      //                                    <option value="18/19MM"> 18/19MM</option> */}
      //                                </select>
      //                              </p>

      //                              <p>
      //                                Select Size
      //                                <select id='size0' onChange={getData} name='size' className='size' tabIndex='-1'>
      //                                    <option>Select Size</option>
      //                                    {data2.sizelist && data2.sizelist.map((size)=>
      //                                    <option key={size.size} value={size.size}>{size.size}</option>
      //                                    )}
      //                                   {/* //  <option selected="selected" value="8x4"> 8x4</option>
      //                                   //  <option value="7x4">7x4 </option> */}
      //                                </select>
      //                              </p>
      //                              <div className={`${styles.select_error_size} ${styles.errorsize2}`} style={{display:'none'}}>Please Select Size</div>
      //                          </div>
      //                          <div id='pr2'>
      //                              <div className={`${styles.price_div} row`}>
      //                                  <div className='col-6' style={{padding:'unset'}}>
      //                                      <div className={`${styles.price} ${styles.priceid2}`}>
      //                                          <i><FaRupeeSign/></i>
      //                                          {variantProduct.selling_cost}
      //                                      </div>
      //                                      <br/>
      //                                      <span style={{fontSize:'12px'}}>incl. GST</span>
      //                                      <br/>
      //                                      <div className={styles.cut_price}>
      //                                          <i>
      //                                              <FaRupeeSign/>
      //                                          </i>
      //                                         {variantProduct.purchese_cost}
      //                                      </div>
      //                                  </div>
      //                                  <div className='col-6' style={{padding:'unset'}}>
      //                                      {/* <div className={`${styles.price} ${styles.priceid2}`}>
      //                                          <i>
      //                                            <FaRupeeSign/>
      //                                          </i>
      //                                          {data2.excGst}
      //                                      </div> */}
      //                                      {/* <p style={{fontSize:'12px', marginTop:'5px'}}>&nbsp; excl. GST</p> */}
      //                                      <div className={`${styles.price1} ${styles.priceid2}`}>
      //                                          <i><FaRupeeSign/></i>
      //                                          {variantProduct.per_sq_ft} /Sq.ft
      //                                      </div>
      //                                  </div>
      //                              </div>
      //                              <div className={styles.prod_price}>
      //                                  <div className={styles.save_par}>
      //                                        You Save
      //                                        <span>0 (0% off)</span>
      //                                  </div>  
      //                                  <div className={`${styles.row} row`}>
      //                                      <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
      //                                          <div className={styles.add_com_p}>
      //                                           {/* <Link href='/cart'> */}
      //                                           <i>
      //                                                {/* <FaShoppingCart onClick={()=>dispatch(addToCart(getCart))}/> */}
      //                                                <FaShoppingCart onClick={() => addCart(data2)}/>
      //                                              </i>
      //                                           {/* </Link> */}
                                                  
      //                                          </div>
      //                                      </div>
      //                                      <div className='col-md-6 col-6 text-center hover hover-clr' style={{borderRight:'2px solid rgb(255, 215, 187)'}}>
      //                                          <div className={styles.add_com_p}>
      //                                              <i>
      //                                                <FaHeart onClick={()=>addwishlist(data2)}/>
      //                                              </i>
      //                                          </div>
      //                                      </div>
      //                                  </div>
      //                              </div>
      //                          </div>
      //                      </div>
      //                  </li>
      <li className='col-sm-4' key={data2.id}>
        <CardComponents {...data2}/>

      </li>
                           )}
                          </ul>
                          {/* <CategoryProduct data={subCategoryProd}/> */}
                    </span>
                </div>
                

      
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default ProductName;