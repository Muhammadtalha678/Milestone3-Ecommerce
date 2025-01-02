'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import {CartContext} from '@/context/CartContext'
import { Product } from '@/interfaces/Product'
const SingleProductDetail = ({singleProduct}:{singleProduct:Product}) => {
    const cartContext = useContext(CartContext)
    const {cart,addToCart} = cartContext
    let discountPrice = singleProduct.price * (singleProduct.discountPercentage / 100)
        
       discountPrice  = parseInt((singleProduct.price - discountPrice).toFixed(0))
  return (
    <section className="text-gray-600 body-font overflow-hidden" key={singleProduct.id}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image 
              alt="ecommerce" 
              className="w-full max-w-sm h-64 object-cover object-center rounded" 
              src={singleProduct.thumbnail} 
              width={500} 
              height={500} 
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleProduct.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {
                    Array(5).fill(null).map((_,index)=>(
                        <svg key={index} 
                        fill={index < singleProduct.reviews.reduce((sum:number,review:{rating:number}) => ((Math.floor(sum+review.rating)/singleProduct.reviews.length)),0) ? "currentColor":'none'} style={{stroke:"currentColor", strokeLinecap:"round",strokeLinejoin:"round", strokeWidth:2}}
                        className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    ))
                }
                
                <span className="text-gray-600 ml-3">{singleProduct.reviews.length} Reviews</span>
              </span>
              
            </div>
            <p className="leading-relaxed">
             {singleProduct.description}    
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
             
              
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${discountPrice}</span>
              {
                cart.find((e) => e.id === singleProduct.id) ?
                <div className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none  rounded">Add to cart</div>
                :<button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={()=>addToCart(singleProduct)}>Add to cart</button>
              
              }
            </div>``
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProductDetail
