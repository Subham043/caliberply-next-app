import React, { useEffect, useState } from 'react'
import styles from '@/styles/tools.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import axios from '../axios';


const Tools = () => {

    const [ply , setPly] = useState(0)
    console.log(ply)
    const[subCategory, setSubcategory]= useState(0)
    console.log(subCategory)
    const [category, setCategory] = useState(0)
    console.log(category)
    const [plyProd, setPlyProd]= useState(0)
    console.log(plyProd)

    const [variant, setVariant] = useState(0)
    console.log(variant)

    const [size, setSize] = useState(0)
    const sizeNum = Number(size[0] * size[2])
    // const sizeNum1 = Number(size[2])
    
  console.log(sizeNum)

    const [thick, setThick] = useState(0)
    const thickNum = Number(thick[0])
    console.log(thickNum)

    // const calculateCarpenter = 

    const [quantity, setQuantity] = useState(0)
    console.log(quantity)

const[showTab , setShowTab] = useState(0)
    const handletab =(e)=>{
        setShowTab(e);
    }

    const[showTab1 , setShowTab1] = useState(1)
    const handletab1 =(e)=>{
        setShowTab1(e);
    }

    const [plyCategory, setPlyCategory] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPlyCategory"
        })
        .then(res => {
         console.log(res.data)
        if(Array.isArray(res.data)){

            setPlyCategory(res.data)
        }
        })
        .catch(err => {
          console.log(err)
          })
    },[])

    const [plySubCategory , setSubPlyCategory] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPlySubCategory",
            cid:category
        })
        .then(res => {
         console.log(res.data)
        if(Array.isArray(res.data)){

            setSubPlyCategory(res.data)
        }
        })
        .catch(err => {
          console.log(err)
          })
    },[category])

    const [plyProduct , setPlyProduct] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPlyProduct",
            cid:category,
            sid:subCategory
        })
        .then(res => {
         console.log(res.data)
        if(Array.isArray(res.data)){

            setPlyProduct(res.data)
        }
        })
        .catch(err => {
          console.log(err)
          })
    },[subCategory])

    const [qtyPerPrice , setQtyPerPrice] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPerQtyPrice",
           pid:plyProd,
           size:'18/19MM'
        })
        .then(res => {
         console.log(res.data)
        

            setQtyPerPrice(res.data)
        
        })
        .catch(err => {
          console.log(err)
          })
    },[plyProd])

    const qty_per_price = Number(qtyPerPrice.per_sq_ft)

    const [qtyPerPrice1 , setQtyPerPrice1] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPerQtyPrice",
           pid:plyProd,
           size:'12MM'
        })
        .then(res => {
         console.log(res.data)
        

         setQtyPerPrice1(res.data)
        
        })
        .catch(err => {
          console.log(err)
          })
    },[plyProd])
    const qty_Per_Price1 = Number(qtyPerPrice1.per_sq_ft)

    const [qtyPerPrice2 , setQtyPerPrice2] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getPerQtyPrice",
           pid:plyProd,
           size:'6MM'
        })
        .then(res => {
         console.log(res.data)
        

         setQtyPerPrice2(res.data)
        
        })
        .catch(err => {
          console.log(err)
          })
    },[plyProd])

    const qty_per_price2 = Number(qtyPerPrice2.per_sq_ft)

    const [result , setResult] = useState([])
    useEffect(() => {
        axios.post('/',{
            type:"getResults",
           pid:plyProd,
           thick:thick,
           size:size
        })
        .then(res => {
         console.log(res.data)
        

         setResult(res.data)
        
        })
        .catch(err => {
          console.log(err)
          })
    },[plyProd])
  

  return (
    <>
    <section className={styles.about_us}>
        <div className={styles.auto_container}>
            <div className={`${styles.clearfix} row`}>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className={styles.inner_column}>
                        <div className={styles.sec_title}>
                            <h2>HOW MUCH PLYWOOD WOULD YOU NEED?</h2>
                        </div>
                        <div className={styles.about_years}>
                            <h3>Calculate on your own.</h3>
                        </div>
                        <div className={`${styles.mb_bottom_40} row`} >
                            <div className='col-md-6'>
                                <button onClick={()=>handletab1(1)} className={showTab1===1?`${styles.btn_mk} ${styles.btn_active}`:`${styles.btn_mk}`}>Standard Calculator</button>
                            </div>
                            <div className='col-md-6'>
                                <button onClick={()=>handletab1(2)} className={showTab1===2?`${styles.btn_mk} ${styles.btn_active}`:`${styles.btn_mk}`}>Carpenter Calculator</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* carpenter calculator */}
                <div className={`${styles.image_column} col-lg-6 col-md-12 col-sm-12`}>
                    <div className={showTab1===2?'':'hidePlyVariant'}>
                        <div className={styles.text_box}>
                            <div className={styles.request_form} style={{marginBottom:'20px'}}>
                                <h3>Carpenter Calculator</h3>
                                <div>
                                    <div className='row'>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Category*</label>
                                            <select value={category} onChange={(event) => setCategory(event.target.value)} type="text" name="category" placeholder="Name" required="required">
                                            <option>Select Category</option>
                                            {plyCategory && plyCategory.map((plycate)=>
                                            <option key={plycate.id} value={plycate.id}> {plycate.heading} </option>
                                            )}
                                            </select>
                                        </div>  
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Sub Category *</label>
                                            <select value={subCategory} onChange={(event) => setSubcategory(event.target.value)} type="text" name="subCategory" placeholder="Name" required="required">
                                            <option>Select Sub Category</option>
                                            {plySubCategory && plySubCategory.map((subCate)=>
                                            <option key={subCate.id} className={category== subCate.is_parent?'':'hidePlyVariant'} value={subCate.id}> {subCate.heading} </option>
                                            )}
                                            {/* <option value="139"> Water Resistant Plywood (BWR) </option>
                                            <option value="140"> Waterproof Plywood (BWP) </option> */}  
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Product*</label>
                                            <select value={plyProd} onChange={(event) => setPlyProd(event.target.value)} type="text" name="product" placeholder="Name" required="required">
                                            <option>Select Product</option>
                                            {plyProduct && plyProduct.map((plyProd)=>
                                            <option key={plyProd.id} className={category == plyProd.category?'':'hidePlyVariant'} value={plyProd.id}> {plyProd.name} </option>
                                            )}
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Thickness*</label>
                                            <select value={thick} onChange={(event) => setThick(event.target.value)} type="text" name="thickness" placeholder="Name" required="required">
                                            <option>Select Thickness</option>
                                            <option value='6MM'>6MM</option>
                                            <option value='8MM'>8MM</option>
                                            <option value='12MM'>12MM</option>
                                            <option value='18/19MM'>18/19MM</option>
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Size*</label>
                                            <select value={size} onChange={(event) => setSize(event.target.value)} type="text" name="size" placeholder="Name" required="required">
                                            <option>Select Size</option>
                                            <option value='7x4'>7x4</option>
                                            <option value='8x4'>8x4</option>
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Quantity*</label>
                                           <input type='number' name='quantity' value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                                        </div>

                                        <div className={`${styles.form_group} col-lg-4 offset-lg-4 col-md-6 col-sm-12 `}>
                                            <button onClick={()=>handletab(2)} className={`${styles.theme_btn} ${styles.btn_style_four}`}>
                                                <span className={styles.btn_title}>Calculate</span>
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
                    <div className={showTab1===1?'':'hidePlyVariant'}>
                        <div className={styles.text_box}>
                            <div className={styles.request_form} style={{marginBottom:'20px'}}>
                                <h3>Standard Calculator</h3>
                                <div>
                                    <div className='row'>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Furniture Type *</label>
                                            <select value={ply} onChange={(event) => setPly(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option value=''>Select Furniture*</option>
                                            <option value="1">TV CABINET</option>
                                            <option value="2">Wardrobes</option>
                                            <option value="3">Kitchen Cabinet Solution</option>
                                            <option value="4">Beds</option>
                                            <option value="5">Dressing Table</option>
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Furniture variant *</label>
                                            <select value={variant} onChange={(event) => setVariant(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option value="">Select Variant</option>
                                            <option className={ply==1?'':'hidePlyVariant'} value="1"> TV CABINET (243.84cm x 91.44cm) </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="2">  WARDROBE 8 FT HEIGHT X 4FT WIDTH (243.84cm x 121.92cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="3">  WARDROBE 8 FT HEIGHT X 8FT WIDTH (243.84cm x 243.84cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="4">  WARDROBE 10 FT HEIGHT X 4FT WIDTH (304.8cm x 121.92cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="5">  WARDROBE 10 FT HEIGHT X 8FT WIDTH (304.8 cm x 243.84 cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="6">  WARDROBE 10 FT HEIGHT X 12FT WIDTH (304.8cm x 365.76cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="7">  WARDROBE 12 FT HEIGHT X 4FT WIDTH (365.76 cm x 121.92 cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="8">  WARDROBE 12 FT HEIGHT X 8FT WIDTH (365.76cm x 243.84cm)  </option>
                                            <option className={ply==3?'':'hidePlyVariant'} value="9">  KITCHEN CABINET (2 of 8FTx3FT + 2 of 8FTx2FT + 1 of 3FTx3FT)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="10">  QUEEN SIZE BED 5ft WIDTH X 6ft LENGTH (152.4cm x 182.88cm)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="11">  KING SIZE BED 6FT WIDTH X 6.6FT LENGTH (182.88cm x 198.12cm)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="12">  SINGLE BED 2.5FT WIDTH X 6FT LENGTH (76.2cm x 182.88cm)  </option>
                                            <option className={ply==5?'':'hidePlyVariant'} value="13">  Dressing Table 10 FT WIDTH X 4 FT (304.8cm x 121.92cm)  </option>
                                            {/* <option className={ply==5?'':'hidePlyVariant'} value="14"> TV CABINET (243.84cm x 91.44cm) </option> */}
                                            </select>
                                           
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Category*</label>
                                            <select value={category} onChange={(event) => setCategory(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Category</option>
                                            {plyCategory && plyCategory.map((plycate)=>
                                            <option key={plycate.id} value={plycate.id}> {plycate.heading} </option>
                                            )}
                                            </select>
                                        </div>  
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Sub Category *</label>
                                            <select value={subCategory} onChange={(event) => setSubcategory(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Sub Category</option>
                                            {plySubCategory && plySubCategory.map((subCate)=>
                                            <option key={subCate.id} className={category== subCate.is_parent?'':'hidePlyVariant'} value={subCate.id}> {subCate.heading} </option>
                                            )}
                                            {/* <option value="139"> Water Resistant Plywood (BWR) </option>
                                            <option value="140"> Waterproof Plywood (BWP) </option> */}  
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Product*</label>
                                            <select value={plyProd} onChange={(event) => setPlyProd(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Product</option>
                                            {plyProduct && plyProduct.map((plyProd)=>
                                            <option key={plyProd.id} className={category == plyProd.category?'':'hidePlyVariant'} value={plyProd.id}> {plyProd.name} </option>
                                            )}
                                            {/* <option value="4"> PRIME 100% NEEM PLYWOOD (M.R IS 303) . </option>
                                            <option value="34"> SUPREME 100% TIMBER NEEM PLYWOOD (M.R. IS 303)  </option>
                                            <option value="42"> SUPREME 100% EUCALYPTUS PLYWOOD (M.R. IS 303)  </option>
                                            <option value="60"> DVONNPLY 100% CALIBRATED PLYWOOD (M.R. IS 303)  </option> */}
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-4 offset-lg-4 col-md-6 col-sm-12 `}>
                                            <button onClick={()=>handletab(1)} className={`${styles.theme_btn} ${styles.btn_style_four}`}>
                                                <span className={styles.btn_title}>Calculate</span>
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

                {/* standard Calculator */}
                {/* <div className={`${styles.image_column} col-lg-6 col-md-12 col-sm-12`}>
                    <div className={showTab===2?'':'hidePlyVariant'}>
                        <div className={styles.text_box}>
                            <div className={styles.request_form} style={{marginBottom:'20px'}}>
                                <h3>Standard Calculator</h3>
                                <div>
                                    <div className='row'>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Furniture Type *</label>
                                            <select value={ply} onChange={(event) => setPly(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option value=''>Select Furniture*</option>
                                            <option value="1">TV CABINET</option>
                                            <option value="2">Wardrobes</option>
                                            <option value="3">Kitchen Cabinet Solution</option>
                                            <option value="4">Beds</option>
                                            <option value="5">Dressing Table</option>
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Furniture variant *</label>
                                            <select value={variant} onChange={(event) => setVariant(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option value="">Select Variant</option>
                                            <option className={ply==1?'':'hidePlyVariant'} value="1"> TV CABINET (243.84cm x 91.44cm) </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="2">  WARDROBE 8 FT HEIGHT X 4FT WIDTH (243.84cm x 121.92cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="3">  WARDROBE 8 FT HEIGHT X 8FT WIDTH (243.84cm x 243.84cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="4">  WARDROBE 10 FT HEIGHT X 4FT WIDTH (304.8cm x 121.92cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="5">  WARDROBE 10 FT HEIGHT X 8FT WIDTH (304.8 cm x 243.84 cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="6">  WARDROBE 10 FT HEIGHT X 12FT WIDTH (304.8cm x 365.76cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="7">  WARDROBE 12 FT HEIGHT X 4FT WIDTH (365.76 cm x 121.92 cm)  </option>
                                            <option className={ply==2?'':'hidePlyVariant'} value="8">  WARDROBE 12 FT HEIGHT X 8FT WIDTH (365.76cm x 243.84cm)  </option>
                                            <option className={ply==3?'':'hidePlyVariant'} value="9">  KITCHEN CABINET (2 of 8FTx3FT + 2 of 8FTx2FT + 1 of 3FTx3FT)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="10">  QUEEN SIZE BED 5ft WIDTH X 6ft LENGTH (152.4cm x 182.88cm)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="11">  KING SIZE BED 6FT WIDTH X 6.6FT LENGTH (182.88cm x 198.12cm)  </option>
                                            <option className={ply==4?'':'hidePlyVariant'} value="12">  SINGLE BED 2.5FT WIDTH X 6FT LENGTH (76.2cm x 182.88cm)  </option>
                                            <option className={ply==5?'':'hidePlyVariant'} value="13">  Dressing Table 10 FT WIDTH X 4 FT (304.8cm x 121.92cm)  </option>
                                             <option className={ply==5?'':'hidePlyVariant'} value="14"> TV CABINET (243.84cm x 91.44cm) </option>
                                            </select>
                                           
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Category*</label>
                                            <select value={category} onChange={(event) => setCategory(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Category</option>
                                            {plyCategory && plyCategory.map((plycate)=>
                                            <option key={plycate.id} value={plycate.id}> {plycate.heading} </option>
                                            )}
                                            </select>
                                        </div>  
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Sub Category *</label>
                                            <select value={subCategory} onChange={(event) => setSubcategory(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Sub Category</option>
                                            {plySubCategory && plySubCategory.map((subCate)=>
                                            <option key={subCate.id} className={category== subCate.is_parent?'':'hidePlyVariant'} value={subCate.id}> {subCate.heading} </option>
                                            )}
                                            
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                                            <label style={{color:'rgb(255, 255, 255)'}}>Product*</label>
                                            <select value={plyProd} onChange={(event) => setPlyProd(event.target.value)} type="text" name="username" placeholder="Name" required="required">
                                            <option>Select Product</option>
                                            {plyProduct && plyProduct.map((plyProd)=>
                                            <option key={plyProd.id} className={category == plyProd.category?'':'hidePlyVariant'} value={plyProd.id}> {plyProd.name} </option>
                                            )}
                    
                                            </select>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-4 offset-lg-4 col-md-6 col-sm-12 `}>
                                            <button onClick={()=>handletab(1)} className={`${styles.theme_btn} ${styles.btn_style_four}`}>
                                                <span className={styles.btn_title}>Calculate</span>
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
                </div>  */}

<div className={showTab===2?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===2?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>TV CABINET 8FT HEIGHT X 3FT WIDTH (243.84cm x 91.44cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Dimension</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td data-label='Thickness'>{thick}</td>
                                    <td data-lable='Qty'>{quantity}</td>
                                    <td data-lable='length'>{size}</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(size[0]*size[2])*quantity*qtyPerPrice.per_sq_ft} </td>
                                </tr>
                                {/* <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='Length'>8ft * 3ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>6mm</td>
                                    <td data-lable='Qty'>1</td>
                                    <td data-lable='Length'>8ft * 3ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice2.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr> */}
                            </tbody>
                           
                        </table>
                        <br/>
                            {/* <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/tv.02c17370.jpg' width={500} height={500} alt=''/>
                            </div> */}
                    </div>
                </div>

                {/* Tv Cabinet */}
                <div className={variant==1?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>TV CABINET 8FT HEIGHT X 3FT WIDTH (243.84cm x 91.44cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='length'>8ft * 3ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*3)*2*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='Length'>8ft * 3ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*3)*3*qty_Per_Price1}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>6mm</td>
                                    <td data-lable='Qty'>1</td>
                                    <td data-lable='Length'>8ft * 3ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice2.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*3)*qty_per_price2}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/tv.02c17370.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                                            {/* wadrobe 8*4 */}
                <div className={variant==2?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 8 FT HEIGHT X 4FT WIDTH (243.84cm x 121.92cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*4)*3*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>1</td>
                                    <td data-lable='Length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*4)*1*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom%201.fc7820c3.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                {/*  wadrobe 8*8 */}
                <div className={variant==3?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 8 FT HEIGHT X 8FT WIDTH (243.84cm x 243.84cm)  </strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>6</td>
                                    <td data-lable='length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*4)*6*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*4)*2*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom2.55d0504e.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                {/*  wadrobe 10*4 */}
                <div className={variant==4?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 10 FT HEIGHT X 4FT WIDTH (304.8cm x 121.92cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>4</td>
                                    <td data-lable='length'>10ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*4)*4*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>10ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*4)*2*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom3.16284157.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>


                {/*  wadrobe 10*8 */}
                <div className={variant==5?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 10 FT HEIGHT X 8FT WIDTH (304.8 cm x 243.84 cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>8</td>
                                    <td data-lable='length'>10ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*8)*8*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='Length'>10ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*8)*3*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='	https://www.calibreply.com/img/wdroom4.5ba0fcba.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                {/*  wadrobe 10*12 */}
                <div className={variant==6?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 10 FT HEIGHT X 12FT WIDTH (304.8cm x 365.76cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>10</td>
                                    <td data-lable='length'>10ft * 12ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*12)*10*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>4</td>
                                    <td data-lable='Length'>10ft * 12ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(10*10)*4*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom5.4513feed.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                 {/*  wadrobe 12 *4 */}
                 <div className={variant==7?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 12 FT HEIGHT X 4FT WIDTH (365.76 cm x 121.92 cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>5</td>
                                    <td data-lable='length'>12ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(12*4)*5*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>12ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(12*4)*2*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom6.195d5c82.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                 {/*  wadrobe 12 *8 */}
                 <div className={variant==8?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>WARDROBE 12 FT HEIGHT X 8FT WIDTH (365.76cm x 243.84cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>9</td>
                                    <td data-lable='length'>12ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(12*8)*9*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='Length'>12ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(12*8)*3*qty_Per_Price1}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/wdroom7.9f6b48e5.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                 {/*  kitchen 12 *8 */}
                 <div className={variant==9?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>KITCHEN CABINET (2 of 8FTx3FT + 2 of 8FTx2FT + 1 of 3FTx3FT)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>13</td>
                                    <td data-lable='length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(8*4)*13*qty_per_price}</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>4</td>
                                    <td data-lable='Length'>8ft * 4ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ {Number(12*8)*9*qty_per_price}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/kitchen.d76272f6.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                {/*  bed 5 *6 */}
                <div className={variant==10?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>QUEEN SIZE BED 5ft WIDTH X 6ft LENGTH (152.4cm x 182.88cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>9</td>
                                    <td data-lable='length'>5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr> */}
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>8mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>6mm</td>
                                    <td data-lable='Qty'>5</td>
                                    <td data-lable='Length'>5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/queen.1adf14e5.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                 {/*  bed 6 *6.6 */}
                 <div className={variant==11?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>KING SIZE BED 6FT WIDTH X 6.6FT LENGTH (182.88cm x 198.12cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>6ft * 6.5ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>8mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>6ft * 6.5ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>6mm</td>
                                    <td data-lable='Qty'>5</td>
                                    <td data-lable='Length'>6ft * 6.5ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/king.6baf3b98.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                 {/*  bed 6 *6.6 */}
                 <div className={variant==12?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>SINGLE BED 2.5FT WIDTH X 6FT LENGTH (76.2cm x 182.88cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>9</td>
                                    <td data-lable='length'>2.5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr> */}
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>1</td>
                                    <td data-lable='Length'>2.5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>8mm</td>
                                    <td data-lable='Qty'>1</td>
                                    <td data-lable='Length'>2.5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>6mm</td>
                                    <td data-lable='Qty'>2</td>
                                    <td data-lable='Length'>2.5ft * 6ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/single.7f7969ec.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>

                {/*  dressing 6 *6.6 */}
                <div className={variant==13?'col-lg-6 col-md-12 col-sm-12':"hidePlyVariant"}>
                    <div className={showTab===1?'content shadow':"hidePlyVariant"}>
                        <p id='headtitle' className='head'>
                            <strong>Dressing Table 10 FT WIDTH X 4 FT (304.8cm x 121.92cm)</strong>
                        </p>
                        <table cellPadding='0' cellSpacing='0' width='100%' id='tabledata' className='table-result'>
                            <thead>
                                <tr>
                                    <th colSpan='5' className='master-heading'>Plywood</th>
                                </tr>
                                <tr className='hide-mobile'>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>Quantity</th>
                                    <th className='column-2'>Thickness</th>
                                    <th className='column-3'>per qty price</th>
                                    <th className='column-2'>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label='Thickness'>18/19mm</td>
                                    <td data-lable='Qty'>9</td>
                                    <td data-lable='length'>12ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                                <tr>
                                    <td data-lable='Thickness'>12mm</td>
                                    <td data-lable='Qty'>3</td>
                                    <td data-lable='Length'>12ft * 8ft</td>
                                    <td data-lable='length'>₹ {qtyPerPrice1.per_sq_ft}</td>
                                    <td data-lable='length'>₹ NaN</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Image src='https://www.calibreply.com/img/Dressing.eea1eb85.jpg' width={500} height={500} alt=''/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Tools