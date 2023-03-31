import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ProductHome from './ProductHome'
import axios from '../axios'

const FeatureProduct = () => {

  const [features, setFeatures] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"getFeaturedProduct"
      })
      .then(res => {
      //  console.log(res.data.data)
       if(Array.isArray(res.data.data)){

           setFeatures(res.data.data)
       }
      })
      .catch(err => {
        console.log(err)
        })
  },[])


  
  return (
    <section>
    <div className='sec-heading'>
            <h1 className='h1'>
                <span>Feature</span> Products
                </h1>
        </div>
    <div>
      <div className="container">
        <div  className="row">
      {features.slice(0,3).map((items,i)=>
    
        <div  key={i} className="col-sm-4" style={{padding:'10px'}}>
        <ProductHome {...items}/>
        </div>
      )}
      </div>
      </div>
    </div>
    </section>
  )
}

export default FeatureProduct