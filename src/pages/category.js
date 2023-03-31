import { Footer } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Product from 'components/Product'
import Head from 'next/head'
import React from 'react'

const Category = ({data}) => {
  return (
    <>
    <Head>
        <title>Category</title>
    </Head>
    <Navbar2/>
    <Product data={data}/>
    <Footer/>
    </>
  )
}

export default Category

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://calibreply.jurysoftprojects.com/backend/api/api.php` , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: 'getCategoryProduct'})
    })


  const data = await res.json()
  
  console.log(data)

  // Pass data to the page via props
  return { props: {data: data.data } }
}