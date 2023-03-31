import axios from '../axios'
import React, { useEffect, useState } from 'react'

const Thickness = () => {

    const [product, setProduct] = useState([])

    // const router = useRouter()
    //   const id = router.query.pageno
  
      console.log(product.thicknesslist)
  
      useEffect(() => {
            axios.post('/',{
                type:"getProductDetail",
                // id:id
            })
            .then(res => {
             console.log(res.data)
             setProduct(res.data.product)
            })
            .catch(err => {
              console.log(err)
              })
            },[])


  return (
    <>
            <select id='thickness0' name='size' tabIndex='-1' className='size'>
            <option value="">Select Thickness </option>
            <option selected="selected" value='6MM'>6MM</option>
            <option value="8MM">8MM </option>
            <option value="12MM">12MM </option>
             <option value="18/19MM">18/19MM </option>
                               
             </select>
    </>
  )
}

export default Thickness