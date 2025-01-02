import SingleProductDetail from '@/components/ProductDetail';
import React from 'react'

const ProductDetail = async({params}:{params: Promise<{id: string}>}) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${(await params).id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }
        const singleProduct = await response.json()
       
        
      return (
      <SingleProductDetail singleProduct={singleProduct}/>

  )      
    } catch (error) {
     throw error     
    }
  
}

export default ProductDetail