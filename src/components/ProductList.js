import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    
  return (
    props.productList.map((product)=>{
        return<Product product={product}/>
    })
  )
}

export default ProductList
