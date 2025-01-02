'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart,addToCart,decrementItem } = useContext(CartContext);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-5 text-center">Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Cart Items */}
            <div className="lg:w-2/3 w-full">
              {cart.map((item) => {
                let discountPrice = item.price * (item.discountPercentage / 100)
  
                 discountPrice  = parseInt((item.price - discountPrice).toFixed(0))

                return <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-5"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    <div>
                      <h2 className="text-lg font-medium">{item.title}</h2>
                      <p className="text-sm text-gray-500">
                        Price: ${discountPrice * item.minimumOrderQuantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {
                      item.minimumOrderQuantity > 1 ?
                        <button
                        onClick={() => {decrementItem(item)}}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                        </button> :
                        <div
                        
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </div>
                      }
                      <span>{item.minimumOrderQuantity}</span>
                      <button
                        onClick={() => {addToCart(item)}}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div> 
                
              })
              }
            </div>

            {/* Summary Section */}
            <div className="lg:w-1/3 w-full mt-10 lg:mt-0 lg:ml-10">
              <div className="bg-gray-100 p-5 rounded shadow">
                <h2 className="text-xl font-bold mb-5">Order Summary</h2>
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span>${cart.reduce((total: number, item) => (total + parseInt((item.price - (item.price*(item.discountPercentage/100))).toFixed(0)) * item.minimumOrderQuantity) , 0)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cart.reduce((total: number, item) => (total + parseInt((item.price - (item.price*(item.discountPercentage/100))).toFixed(0)) * item.minimumOrderQuantity) , 0) + 5}</span>
                </div>
                <button className="bg-indigo-500 text-white py-2 px-4 w-full mt-5 rounded hover:bg-indigo-600">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default CartPage;
