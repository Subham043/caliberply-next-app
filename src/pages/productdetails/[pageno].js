import React, { useEffect, useMemo, useState } from 'react'
import styles from '@/styles/productDetails.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import axios from '../../../axios';
import Navbar2 from 'components/Navbar2';
import { useRouter } from 'next/router';
import Thickness from 'components/Thickness';
import { AboutBanner, Footer } from 'components';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import ReactStars from "react-rating-stars-component"; 
import SingleProductDetails from 'components/SingleProductDetails';
import { GiHamburgerMenu } from 'react-icons/gi';


const Productdetails = () => {


    const router = useRouter()
    const id = router.query.pageno
    const [product1, setProduct1] = useState([])
  
    useEffect(() => {
      axios.post('/',{
          type:"getProductDetail",
          id:id
      })
      .then(res => {
    console.log(res.data.product)
        setProduct1(res.data.product)
      })
      .catch(err => {
        console.log(err)
        })
      },[id])
  
  //   const [size, setSize] = useState(product1.sizelist ? product1.sizelist[0].size: "")
  //   const [thickness, setThickness] = useState(product1.thicknesslist ? product1.thicknesslist[0].thickness: "")
  
  //   const price = useMemo(
  //     () => {
  //       return (product1.variants && product1.variants.filter((item)=>{
  //         return item.size === size && item.thickness === thickness
  //       }))
  //     },
  //     [thickness, size]
  //   );
  
  //   console.log(price)
  
  
  
      // console.log(product.thicknesslist)
  
      const [showtab , setShowTab] = useState(1)
  
      const handletab =(e)=>{
          setShowTab(e);
      }
  // const [items, setItems] = useState([])
  // useEffect(()=>{
  //     const item1 = JSON.parse(product1.items)
  //     setItems(item1)
  // },[items])
  // console.log(items)
  // const items = 
  // console.log(items)
  
  // const items = JSON.parse(product1.items)
  // console.log(items)
      // let items = JSON.parse(product1.items)
      // console.log(items)
  
  //     const [name1, value] = useState()
  
  //     const price1 = useMemo(
  //         () => {
  //             const sub = JSON.stringify(product1.items)
  //           return (
  //             sub.filter((item)=>{
  //             return item.name === name1 && item.value === value
  //           }))
  //         },
  //         [name1, value]
  //       );
  // console.log(price1)
  
  
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
  
              const [getRatings, setGetRatings] = useState([])
              useEffect(() => {
                axios.post('/',{
                    type:"getProductReviewRating",
                    pid:id,
                })
                .then(res => {
              //    console.log(res.data)
              if(Array.isArray(res.data.data)){
  
                  setGetRatings(res.data.data)
              }
                })
                .catch(err => {
                  console.log(err)
                  })
                },[getRatings])
  
  
                const [pin, setPin] = useState({
                  // uid:unique_id,
                 pincode:''
              })
  
              const getData = (e) =>{
       
                  const {value, name} = e.target;
          
                  setPin(()=>{
                      return {
                          ...pin,
                          [name]:value
                      }
                  })
          }
  
          const pinCheck = () =>{
              const {pincode} = pin
              if(pincode === '' || pincode.length<6 || pincode.length>6){
                  toast.error('Enter Pincode')
              }else if(pincode.length === 6){
                  axios.post('/',{
                      type:"pincodeCheck",
                      pincode:pincode
                  })
                  .then(res => {
                  //  console.log(res.data)
                  if(res.data.status === 'success'){
                      toast.success('Available')
                  }else if(res.data.status === "error"){
                      toast.error('Currently Not Available')
                  }
                  })
                  .catch(err => {
                    console.log(err)
                    })
              }
          }
       
          const [review, setReview] = useState({
              // uid:unique_id,
              userReview:'',
          })
          // console.log(review)
  
          const getReview = (e) =>{
   
              const {value, name} = e.target;
      
              setReview(()=>{
                  return {
                      ...review,
                      [name]:value
                  }
              })
      }
  
      const ratingChanged = (newRating) => {
          axios.post('/',{
              type:"saveRatings",
              rating:newRating,
              uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
              pid:id
          })
          .then(res => {
              // console.log(res.data)
              if(res.data.status==='success'){
                  toast.success(res.data.msg)
              }else if(res.data.status ==='error'){
                  toast.error(res.data.msg)
              }
          })
          .catch(err => {
            console.log(err)
            })
        }
  
          const addReview = (product1) =>{
              const {userReview} = review
              if(userReview === ''){
                  toast.error('Enter Review')
              }else{
                  axios.post('/',{
                      type:"saveReview",
                      cmd:userReview,
                      pid:product1.id,
                      uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null
                  })
                  .then(res => {
                  //  console.log(res.data)
                  if(res.data.status === 'success'){
                      toast.success(res.data.msg)
                  }else if(res.data.status === "error"){
                      toast.error(res.data.msg)
                  }
                  })
                  .catch(err => {
                    console.log(err)
                    })
              }
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
  
  
          // const [getThick, setGetThick] = useState([])
          //   useEffect(() => {
          //     axios.post('/',{
          //         type:"getProductDetail",
          //         id:id
          //     })
          //     .then(res => {
          //      console.log(res.data.data.thicknesslist)
          //      if(Array.isArray(res.data.data.thicknesslist)){
                   
          //          setGetThick(res.data.data.thicknesslist)
          //      }
          //     })
          //     .catch(err => {
          //       console.log(err)
          //       })
          //     },[])
          //     console.log(getThick)
  
  
          // const [thick, setThick]= useState()
          // useEffect(()=>{
          //     setThick(product1.thicknesslist)
          // },[])
          // console.log(typeof thick)
  
  
          
          const [thickness1, setThickness] = useState(product1.thicknesslist && product1.thicknesslist.length>0 ? product1.thicknesslist[0].thickness: '')
          const [size1, setSize] = useState(product1.sizelist && product1.sizelist.length>0 ? product1.sizelist[0].sizelist: '')
          // const [prodId, setProdId] = useState(product.variants ? product.variants[0].id: "")
          const price = useMemo(
              () => {
                return (product1.variants && product1.variants.filter((item)=>{
                  return item.size=== size1 && item.thickness===thickness1
                }))
              },
              [size1, thickness1]
            );
  
//   console.log(price)
            const [inputQuantity, setInputQuantity] = useState({
                quantity:''
            })
            console.log(inputQuantity)
          const getInputData = (e) =>{
       
              const {value, name} = e.target;
      
              setInputQuantity(()=>{
                  return {
                      ...inputQuantity,
                      [name]:value
                  }
              })
      }
  
      const addCart = (product1) =>{
          const {quantity} = inputQuantity
            axios.post('/',{
                type:"addtocart",
                ip:localStorage.getItem('ip_address'),
                uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
                qty:quantity?quantity:1,
                pid:price?price[0].id:product1.id,
                total_amount:price?price[0].selling_cost:product1.selling_cost,
                amount:price?price[0].selling_cost:product1.selling_cost,
                name:product1.name,
                size:''
            })
            .then(res => {
                if(res.data.status==='success'){
                    toast.success(res.data.msg)
                    setTimeout(() => {
                        router.push('/cart')
                      
                    }, 2000);
                }else if(res.data.status ==='error'){
                    toast.error(res.data.msg)
                }
            })
            .catch(err => {
              console.log(err)
              })
        
          
      } 

      const addToCart = (product1)=>{
        const {quantity} = inputQuantity
    
            axios.post('/',{
                type:"addtocart",
                ip:localStorage.getItem('ip_address'),
                uid:localStorage.getItem('uid')?localStorage.getItem('uid'):null,
                qty:quantity?quantity:1,
                pid:price?price[0].id:product1.id,
                total_amount:price?price[0].selling_cost:product1.selling_cost,
                amount:price?price[0].selling_cost:product1.selling_cost,
                name:product1.name,
                size:''
            })
            .then(res => {
                if(res.data.status==='success'){
                    toast.success(res.data.msg)
                }else if(res.data.status ==='error'){
                    toast.error(res.data.msg)
                }
            })
            .catch(err => {
              console.log(err)
              })
            
    }

      const [pricePerSquare, setPricePerSquare] = useState([])
      useEffect(() => {
        axios.post('/',{
            type:"getVariantSingle",
           pid:price && price.length>0?price[0].id:id,
           thickness:price && price.length!=0?price[0].thickness:thickness1,
           size:price && price.length!=0?price[0].size:size1,
           vid:price && price.length!=0?price[0].thicknes:thickness1,
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


        // const [arrayData, setArrayData] = useState([]);

        // const stringOfArray = localStorage.setItem(('spec'),JSON.stringify(product1.items));
        // console.log(stringOfArray)
        // const parsedData = JSON.parse(stringOfArray);
        // console.log(parsedData)
        // console.log(JSON.parse(parsedData))
        // const [specName, setSpecName]= useState()
        // useEffect(()=>{
        //     setSpecName(JSON.parse(product1.items))
        // },[specName])
        // const [specValue, setSpecValue] = useState()
        // useEffect(()=>{
        //     let specItem = JSON.parse(localStorage.getItem("specification"));
        //     if (specItem === null) {
        //      let spec = product1.items
        //       localStorage.setItem("specification", JSON.stringify(spec));     
        //   }
        // },[])

        // console.log(product1.items)
        // const spec = JSON.parse(product1.items)

        // const specs = JSON.parse(localStorage.getItem('specification'))

        const [uid , setUid] = useState(null)
  useEffect(()=>{
    setUid(localStorage.getItem('uid'))
  },[uid])

//   const [collection, setCollection] = useState([])
//   useEffect(()=>{
    
//     setCollection(JSON.parse(product1.image_collection))
//   },[collection])
//   console.log(collection)
  
      function createMarkup(c) {
          return { __html: c };
      }
  return (
    

<>

<header>
        <Link href='/' className='logo'>
            <Image src='https://www.calibreply.com/img/logo.1b48625e.webp' alt='' width={150} height={50}/>
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
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        {product1.name}
                    </li>
                </ul>
            </div>
    </section>
    <section className={`${styles.whites_bg} mt-5`}>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-5 col-xl-5'>
                    <div className={`${styles.border_3} row pd-20 flex-reverse`}>
                        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 flexslider '>
                            <div className='flex-viewport' style={{overflow:'hidden', position:'relative'}}>
                                <ul className='slides m-d-flex'> 
                                    <li className={styles.m_multi_img} style={{width:'80px', marginRight:'5px', marginBottom:'10px', float:'left', display:'block'}}>
                                        <Image onClick={()=>handletab(1)} priority src= {`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${product1.front_image}`} height={100} alt='Multiply MR IS 303 Grade Plywood.' width={500} className={styles.red_border} title='Multiply MR IS 303 Grade Plywood.'/>
                                    </li>
                                    <li className={styles.m_multi_img} style={{width:'80px', marginRight:'5px', marginBottom:'10px', float:'left', display:'block'}}>
                                        <Image onClick={()=>handletab(2)} priority src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/7b529a38827aa0a50056160928094a53.png`} height={100} alt='Multiply MR IS 303 Grade Plywood.' width={500} className={styles.red_border} title='Multiply MR IS 303 Grade Plywood.'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-8 col-xl-8 flexslider'>
                            <div className='flex-viewport' style={{position:'relative'}}>
                                <ul className='slides' style={{ transitionDuration:'0s', transform:'translate3d(0px , 0px, 0px)'}}>
                                    <li className={`${styles.flex_active_slide} ${styles.zomm_img_div}`}>
                                        <div className={`${styles.easyzoom} ${styles.easyzoom__adjacent} ${styles.is_ready}`}>
                                            <div>
                                                <div className={`${styles.zoom_on_hover} ${styles.img_responsive} w-65`}>
                        
                                                    
                                                    <Image priority src={showtab===2?'https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/7b529a38827aa0a50056160928094a53.png':`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${product1.front_image}`}  width={500} height={300} alt='' className={styles.normal}/>
                                                    <Image src={showtab===2?'https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/7b529a38827aa0a50056160928094a53.png':`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${product1.front_image}`} alt='' width={500} height={300} className={styles.zoom} style={{translate:'scale(2)', left:'-119.052px', top:'-257.442px'}}/>
                                                   
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
                        
                                {/* <div className={`${styles.right_border} ${styles.z_index_9} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                                <div>
                            <div className={styles.heading}>
                                {product1.category_name}
                            </div>
                            <div className={styles.sku_code}> {product1.name}</div>
                            <div className={`${styles.rating} ${styles.hide}`}>
                               {product1.rating}
                                <i></i>
                                Based on 22 ratings
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className={styles.d_price}>
                                        <i><FaRupeeSign/></i>
                                        {price? price[0].purchese_cost : 0}
                                        
                                        <br/>
                                        <span style={{fontSize:'12px', color:'black'}}>incl. GST</span>
                                        <div className={styles.cut_price} style={{fontSize:'14px'}}>
                                            <i><FaRupeeSign/></i>
                                            {price ? price[0].selling_cost : 0}
                                        </div>
                                            <br/>
                                    </div>
                                </div>
                                <div className='col-6'>
                                   
                                    <div className={styles.d_price}>
                                        <i><FaRupeeSign/></i>
                                        {product1.per_sq_ft}
                                        <br/>
                                        <span style={{fontSize:'12px', color:'black'}}>/ Sq.ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.size_thik} ${styles.font_18} my-3`}>
                            <p>
                                Select : Thickness
                              
                                <select id='thickness0' onChange={(e) => setThickness(e.target.value)} value={thickness}  name='thickness' className='thickness' tabIndex='-1'>
                                              <option>Select Thickness</option>
                                              {product1.thicknesslist && product1.thicknesslist.map((thick, i)=>
                                              <option key={i}  selected={thick.thickness}  value={thick.thickness}>{thick.thickness}</option>
                                              )}
                                          </select>
                            </p>
                            <p className='py-3'>
                                Select : Size
                                <select id='size0' onChange={(e) => setSize(e.target.value)} value={size}  name='size' className='size' tabIndex='-1'>
                                              <option>Select Size</option>
                                              {product1.sizelist && product1.sizelist.map((size,i)=>
                                              <option key={i} value={size.size}>{size.size}</option>
                                              )}
                                          </select>
                            </p>
                            <p className='py-2'>
                                Quantity:
                                <input type="number" className={styles.thick} style={{backgroundColor: 'rgb(202, 143, 101)'}} placeholder='1'/>
                            </p>
                        </div>
                        </div> */}
                            
                       
                    {/* <SingleProductDetails {...product1}/> */}
                  

                            <div className={`${styles.right_border} ${styles.z_index_9} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                            <div>
                            
                        <div className={styles.heading}>
                            {price && price.length>0?pricePerSquare.category_name: product1.category_name}
                        </div>
                        <div className={styles.sku_code}> {product1.name}</div>
                        <div className={`${styles.rating} ${styles.hide}`}>
                           {product1.rating}
                            <i></i>
                            Based on 22 ratings
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className={styles.d_price}>
                                <i><FaRupeeSign/></i>
                                    {price && price.length>0 ? price[0].selling_cost : product1.selling_cost}
                                    {/* {variantSingle.selling_cost} */}
                                    
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>incl. GST</span>
                                    <div className={styles.cut_price} style={{fontSize:'14px'}}>
                                        <i><FaRupeeSign/></i>
                                        {price  && price.length>0? price[0].purchese_cost : product1.purchese_cost}
                                    </div>
                                        <br/>
                                </div>
                            </div>
                            <div className='col-6'>
                               
                                <div className={styles.d_price}>
                                    <i><FaRupeeSign/></i>
                                    {price && price.length>0 ?pricePerSquare.per_sq_ft:product1.per_sq_ft}
                                    <br/>
                                    <span style={{fontSize:'12px', color:'black'}}>/ Sq.ft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.size_thik} ${styles.font_18} my-3`}>
                        <p>
                            Select : Thickness
                          
                            <select id='thickness0' onChange={(e) => setThickness(e.target.value)} value={price?thickness1:product1.thickness} name='thickness' tabIndex='-1' className='size'>
                                <option value="">Select Thickness</option>
                                {product1.thicknesslist && product1.thicknesslist.map((thick)=>
                                          <option key={thick.thickness}  value={thick.thickness}>{thick.thickness}</option>
                                          )}
                               
                            </select>
                           
                        </p>
                        <p className='py-3'>
                            Select : Size
                            <select className='size'  onChange={(e) => setSize(e.target.value)} value={price?size1:product1.size}  id='size0' name='size' tabIndex='-1'>
                            <option>Select Size</option>
                            {product1.sizelist && product1.sizelist.map((size)=>
                                          <option key={size.size} value={size.size}>{size.size}</option>
                                          )}
                            </select>
                        </p>
                        <p className='py-2'>
                            Quantity:
                            <input type="number" name='quantity' onChange={getInputData} className={styles.thick} style={{backgroundColor: 'rgb(202, 143, 101)'}} min={1} placeholder='1'/>
                        </p>
                    </div>
                    </div>
                    <div className={`${styles.add_cart_area} col-sm-6 col-md-6 col-lg-6 col-xl-6`}>
                        <h3 className={`${styles.d_price} ${styles.hide}`}>
                            <i><FaRupeeSign/></i>
                            {product1.stock}
                        </h3>
                        <p className={styles.delivery}>
                            Delivery:
                            <span> Pincode Checker</span>
                        </p>
                        <div className={styles.pincode}>
                            <div className='form-group'>
                                <input name='pincode' type='text' onChange={getData} placeholder='Enter Pincode' className={`${styles.inputForm} input-form`}/>
                                <button onClick={pinCheck} className={`${styles.theme_btn} ${styles.btn} ${styles.max_50}`}>Check</button>
                            </div>
                        </div>
                        {/* <div className={styles.status_pincode}>
                            Deliver Available
                        </div> */}
                        <span className={styles.stock}>{product1.stock > 0? "in stock" :<span style={{color:'red'}}>out of stock</span> }</span>
                        <div className={styles.cart_btn}>
                            <a onClick={()=>addCart(product1)} className={`${styles.btn} ${styles.buy_now_btn}`} style={{zoom_on_hover:'scale(3)'}}>Buy Now</a>
                            <a onClick={()=>addToCart(product1)} className={`${styles.btn} ${styles.add_to_cart}`}>Add To Cart</a>
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
                <Image height='200' width='200' alt='' src='http://calibreply.com/img/1.381472c7.jpg'/>
                <p>Lifetime Warranty On Premium Offerings </p>
            </div>
            <div className={`${styles.d_icons} col-lg-2 col-xl-2 col-md-6 col-sm-6`}>
                <Image height='200' width='200' alt='' src='http://calibreply.com/img/2.c4f100b8.jpg'/>
                <p>High Resistance to All Climatic Conditions </p>
            </div>
        </div>
    </div>

    <section className=' col-lg-12' style={{paddingTop:'0px'}}>
        <div className='container'>
            <div className={styles.product_tab}>
                <div className={styles.tab}>
                    <ul className="{styles.main_ul} col-sm-12">
                        <li onClick={()=>handletab(3)} className={showtab===3?`${styles.tab_active} ${styles.mb_10}`:''}>Description</li>
                        <li onClick={()=>handletab(4)} className={showtab===4?`${styles.tab_active} ${styles.mb_10}`:''}>Specifications</li>
                        <li onClick={()=>handletab(5)} className={showtab===5?`${styles.tab_active} ${styles.mb_10}`:''}>Reviews</li>
                    </ul>
                    <div className={showtab===3?`${styles.tab_container} ${styles.shadow}`:'myaccount-content-display'}>
                        {<div className={`${styles.contant} ${styles.s1} ${styles.fontchange} ${styles.txt_sty}`} dangerouslySetInnerHTML={createMarkup(product1.description)} style={{display:'block', padding:'3%'}}></div>}
                        {/* {product1.description} */}
                        
                    </div>
                    <div className={showtab===4?`${styles.tab_container} ${styles.shadow}`:'myaccount-content-display'}>
                        <div className={`${styles.contant} ${styles.s1} ${styles.fontchange} ${styles.txt_sty}`} style={{display:'block', padding:'3%'}}>
                        <table className={product1.name=='Multiply MR IS 303 Grade Plywood.'?`${styles.table}`:'myaccount-content-display'}>
                        <tr>
                            <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                            <td className={`${styles.value_td}`}>Ecogen Industries</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Use</td>
                            <td className={`${styles.value_td}`}>Ideal for Commercial and residential Interior works</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Brand</td>
                            <td className={`${styles.value_td}`}>CALIBRE</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Glue Used</td>
                            <td className={`${styles.value_td}`}>Synthetic Urea Formaldehyde (UF)</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Core Material</td>
                            <td className={`${styles.value_td}`}>100% Hardwood Make</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Key Feature</td>
                            <td className={`${styles.value_td}`}>Termite and Powder Proof</td>
                        </tr> 
                        </table>

                        {/* <table className={product1.name=='Multiply MR IS 303 Grade Plywood.'?`${styles.table}`:'myaccount-content-display'}>
                            {spec && spec.map((item, i)=>
                        <tr key={i}>
                            <td className={`${styles.name_td}`}>{item.name}</td>
                            <td className={`${styles.value_td}`}>{item.value}</td>
                        </tr>
                            )}
                       
                        </table> */}

                         <table className={product1.name===
"PRIME 100% NEEM PLYWOOD (M.R IS 303) ." ?`${styles.table}`:'myaccount-content-display'}>
                           
                                <tr>
                            <td className={`${styles.name_td}`}>Manufacturer Name</td>
                            <td className={`${styles.value_td}`}>Ecogen Industries</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Warranty</td>
                            <td className={`${styles.value_td}`}>10 years of Replacement Warranty</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Brand</td>
                            <td className={`${styles.value_td}`}>CALIBRE</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Glue Used</td>
                            <td className={`${styles.value_td}`}>Synthetic Melamine Urea Formaldehyde (MUF)</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Core Material</td>
                            <td className={`${styles.value_td}`}>100% Neem(Imported)</td>
                        </tr>
                        </table>

                         <table className={product1.name===
"PRIME BWR PLYWOOD (M.R IS 303)" ?`${styles.table}`:'myaccount-content-display'}>
                           
                                <tr>
                            <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                            <td className={`${styles.value_td}`}>Ecogen Industries</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Warranty</td>
                            <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Use</td>
                            <td className={`${styles.value_td}`}>Furnitures, wordropes, cabinets and others</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Brand</td>
                            <td className={`${styles.value_td}`}>CALIBRE</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Glue Used</td>
                            <td className={`${styles.value_td}`}>MUF</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Core Material</td>
                            <td className={`${styles.value_td}`}>Hardwood Core</td>
                        </tr>
                        </table>

                        <table className={product1.name==='SUPREME WATERPROOF MARINE PLYWOOD (BWP IS 710)'?`${styles.table}`:'myaccount-content-display'}>
                           
                                <tr>
                            <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                            <td className={`${styles.value_td}`}>Ecogen Industries</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Warranty</td>
                            <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Use</td>
                            <td className={`${styles.value_td}`}>Furnitures, wordropes, cabinets and others</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Brand</td>
                            <td className={`${styles.value_td}`}>CALIBRE</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Glue Used</td>
                            <td className={`${styles.value_td}`}>MUF</td>
                        </tr>
                        <tr>
                            <td className={`${styles.name_td}`}>Core Material</td>
                            <td className={`${styles.value_td}`}>Hardwood Core</td>
                        </tr>
                        </table>
                        
                        <table className={product1.name==='DVONNPLY 100% CALIBRATED PLYWOOD (M.R. IS 303)'?`${styles.table}`:'myaccount-content-display'}>
                           
                           <tr>
                       <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                       <td className={`${styles.value_td}`}>Ecogen Industries</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Warranty</td>
                       <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Use</td>
                       <td className={`${styles.value_td}`}>Furnitures, wordropes, cabinets and others</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Brand</td>
                       <td className={`${styles.value_td}`}>CALIBRE</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Glue Used</td>
                       <td className={`${styles.value_td}`}>MUF</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Core Material</td>
                       <td className={`${styles.value_td}`}>Hardwood Core</td>
                   </tr>
                   </table>

                   <table className={product1.name==='DVONNPLY 100% CALIBRATED MARINE PLYWOOD (BWP IS 710 WATERPROOF)'?`${styles.table}`:'myaccount-content-display'}>
                           
                           <tr>
                       <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                       <td className={`${styles.value_td}`}>Ecogen Industries</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Warranty</td>
                       <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Use</td>
                       <td className={`${styles.value_td}`}>Furnitures, wordropes, cabinets and others</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Brand</td>
                       <td className={`${styles.value_td}`}>CALIBRE</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Glue Used</td>
                       <td className={`${styles.value_td}`}>MUF</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Core Material</td>
                       <td className={`${styles.value_td}`}>Hardwood Core</td>
                   </tr>
                   </table>


<table className={product1.category_name==="Block Board"?`${styles.table}`:'myaccount-content-display'}>
                           
                           <tr>
                       <td className={`${styles.name_td}`}>Manufacturer NameManufacturer Name</td>
                       <td className={`${styles.value_td}`}>Ecogen Industries</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Warranty</td>
                       <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Use</td>
                       <td className={`${styles.value_td}`}>Furnitures, wordropes, cabinets and others</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Brand</td>
                       <td className={`${styles.value_td}`}>CALIBRE</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Glue Used</td>
                       <td className={`${styles.value_td}`}>MUF</td>
                   </tr>
                  
                   </table>

                   <table className={product1.category_name==="Shuttering Plywood"?`${styles.table}`:'myaccount-content-display'}>
                           
                           <tr>
                       <td className={`${styles.name_td}`}>Manufacturer Name</td>
                       <td className={`${styles.value_td}`}>Ecogen Industries</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Warranty</td>
                       <td className={`${styles.value_td}`}>5Yrs Replacement Warranty</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Use</td>
                       <td className={`${styles.value_td}`}>Ideal for Slab Works, Construction, Concrete works Etc.,</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Brand</td>
                       <td className={`${styles.value_td}`}>Dvonn</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Glue Used</td>
                       <td className={`${styles.value_td}`}>100% PF Resin</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Core Material</td>
                       <td className={`${styles.value_td}`}>100% Hardwood Make</td>
                   </tr>
                   <tr>
                       <td className={`${styles.name_td}`}>Key Features</td>
                       <td className={`${styles.value_td}`}>Densified plywood with smooth film coating</td>
                   </tr>
                   </table>
{/* <table>
    <tr>
        <td>subham</td>
        </tr>
</table> */}

                        </div>
                    </div>
                    <div className={showtab===5?`${styles.tab_container} ${styles.shadow}`:'myaccount-content-display'}>
                        <div className={`${styles.contant} ${styles.s1} ${styles.fontchange} ${styles.txt_sty}`} style={{display:'block', padding:'3%'}}>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <span className='rate_heading'>Rating: </span>
                                    <br/>
                                    <br/>
                                    <div>
                                    <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            
                                        />
                                    </div>
                                    <br/>
                                    <br/>
                                    <span>Review: </span>
                                    <br/>
                                    <br/>
                                    <textarea name='userReview' onChange={getReview} className='review_text_area'></textarea>
                                    <button className='theme-btn' onClick={()=>addReview(product1)} style={{width:'50%'}}>Submit</button>
                                </div>
                                <div className='col-md-8'>
                                <div className='comment_area'>
                                        {getRatings && getRatings.map((rating)=>
                                    <div key={rating.id} className='comment_box'>
                                        <h5 style={{marginTop:'20px'}}>{rating.username}</h5>
                                        <ReactStars
                                            value={rating.rating}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='comment_p'>{rating.comment}</p>
                                    </div>
                                        )}
                                </div>
                            </div>
                            </div>

                           
                        
                        </div>
                    </div>
                    <div>
                   
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}
export default Productdetails

// export async function getStaticPaths() {
//     const res = await fetch(`https://calibreply.jurysoftprojects.com/backend/api/api.php`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({type: 'getFeaturedProduct'})
//       })
//     const data = await res.json();
//     const paths = [data].map(feature=>{
//         return {
//             params: {
//                 pageno: `${feature.id}`,
//             },
//         };
//     });
//         console.log(typeof paths)
//     // console.log(paths)
//     return {
//       paths,
//       fallback: false, // can also be true or 'blocking'
//     };
//   };

//   export async function getStaticProps(context) {

//     const id = context.params.pageno;
//     // Fetch data from external API
//     const res = await fetch(`https://calibreply.jurysoftprojects.com/backend/api/api.php/${id}` )
  
  
//     const data = await res.json()
    
//     // console.log(data)
//     return { props: {data, } }
//   }