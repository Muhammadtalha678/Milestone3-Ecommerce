  'use client'
import React, { useContext } from 'react'
import ProductCard from './PoductCard'

import {CartContext} from '@/context/CartContext'
import { Product } from '@/interfaces/Product'
const ProductList = ({ products }: { products: Product[] }) => {
    const cartContext = useContext(CartContext)
    const { addToCart } = cartContext
    
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 -m-4">
            {
                products.map((e) => (
                <ProductCard image={e.thumbnail} title={e.title} id={e.id} key={e.id}
                originalPrice={e.price} discountPrecentage={e.discountPercentage}
               onAddToCart={() => addToCart(e)}
                        />
                ))
          }
        </div>
  )
}

export default ProductList
