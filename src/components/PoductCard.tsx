'use client'
import Image from "next/image";
import Link from "next/link";
import {CartContext} from '@/context/CartContext'
import { useContext } from "react";
const ProductCard = ({
  image,
  title,
  originalPrice,
  discountPrecentage,
  onAddToCart,
  badgeText = "Sale",
  id
}: {
  image:string,
title:string,
originalPrice:number,
discountPrecentage:number,
onAddToCart:()=>void,
    badgeText?: string,
id:number
  }) => {
  const cartContext = useContext(CartContext)
    const {cart} = cartContext
  // discountPrecentage = Math.round(discountPrecentage)
  
  let discountPrice = originalPrice * (discountPrecentage / 100)
  
  discountPrice  = parseInt((originalPrice - discountPrice).toFixed(0))

  return (
    <div className="relative max-w-xs sm:mx-0 mx-auto bg-white border rounded-lg shadow hover:shadow-lg w-full">
      {/* Badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        {badgeText}
      </div>

      {/* Product Image */}
      <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
        <Link href={`/products/${id}`}>
          <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true} // {false} | {true}
          // objectFit="contain"
          // width={300} height={300}
          className=" rounded-t-lg"
        />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        {/* Price Info */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-sm line-through text-gray-400">
              ${originalPrice}
            </span>
            <span className="text-lg font-bold text-green-600 ml-2">
              ${discountPrice}
            </span>
          </div>

          {/* Discount Percentage */}
          <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
            {discountPrecentage}% OFF
          </div>
        </div>

        {/* Add to Cart Button */}
        {
        
        cart.find((e) => e.id === id) ?
        <div
          className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center space-x-2"
        >
          <span>Added</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H6.4M7 13l-1.333 4H17M7 13L4.4 5M5.333 17a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0zm12.666 0a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0z"
            />
          </svg>
        </div>
        : <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 flex items-center justify-center space-x-2"
        >
          <span>Add to Cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H6.4M7 13l-1.333 4H17M7 13L4.4 5M5.333 17a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0zm12.666 0a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0z"
            />
          </svg>
        </button>
         
        }
      </div>
    </div>
  );
};

export default ProductCard;
