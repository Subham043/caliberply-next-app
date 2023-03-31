import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '@/styles/Category.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { FaSearch, FaRupeeSign , FaShoppingCart, FaHeart} from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from '../../axios';

function App() {
  const [products, setProducts] = useState([])
  console.log('render');
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      fetchData()
    }
  
    return () => { unmounted = true };
  }, [])

  const fetchData = useCallback(
    () => {
      fetch("https://calibreply.jurysoftprojects.com/backend/api/api.php", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({type: "getCategoryProduct", cid: "132"})
      })
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
    },
    [],
  )


  const CardComponent = ({name, category_name,selling_cost, purchese_cost, per_sq_ft, thicknesslist, id, sizelist, front_image, variants}) => {
    const [thickness, setThickness] = useState(thicknesslist.length > 0 ? thicknesslist[0].thickness: "")
    const [size, setSize] = useState(sizelist.length > 0 ? sizelist[0].size: "")
    const price = useMemo(
      () => {
        return variants.filter((item)=>{
          return item.size === size && item.thickness === thickness
        })
      },
      [thickness, size]
    );

    
    
    return (
    // <div className="card w-100">
    //   <img src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Product/${front_image}`} className="card-img-top"/>
    //   <div className="card-body">
    //     <h5 className="card-title">{name}</h5>
    //     <p className="card-text">Category : {category_name}</p>
    //     <div className="mb-3">
    //       <label htmlFor="selectThickness" className="form-label">Select ThickNess : </label>
    //       <select id="selectThickness" className="form-select" onChange={(e) => setThickness(e.target.value)} value={thickness}>
    //         {thicknesslist.map((item, i)=>{
    //           return <option value={item.thickness} key={i}>{item.thickness}</option>
    //         })}
    //       </select>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="selectSize" className="form-label">Select Size : </label>
    //       <select id="selectSize" className="form-select" onChange={(e) => setSize(e.target.value)} value={size}>
    //         {sizelist.map((item, i)=>{
    //           return <option value={item.size} key={i}>{item.size}</option>
    //         })}
    //       </select>
    //     </div>
    //     <p className="card-text">Price : Rs.{price.length > 0 ? price[0].selling_cost : 0}</p>
    //   </div>
    // </div>
  
               <>
                  
                          
                
                      
                     
                   
                           </>

      
         
    )
  }

  
  return (
   <>
                   
         
           
</>
  )
}

export default App
