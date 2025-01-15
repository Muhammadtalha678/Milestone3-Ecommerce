'use client';

import Image from 'next/image';
import React, {useContext, useState} from 'react';
import { CartContext } from '@/context/CartContext';
import PopupForm from '@/components/PopupForm'
import { client } from '@/sanity/lib/client';
import  User  from '@/interfaces/User';
import {useRouter} from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

const CartPage = () => {
  
  
  const router = useRouter()
  const [popUpOpen,setpopUpOpen] = useState<boolean>(false)
  const [checkoutLoder,setCheckoutLoder] = useState<boolean>(false)
  const { cart, removeFromCart,addToCart,decrementItem,clearCart} = useContext(CartContext);
 
  const checkOut = async () => {
    try {
     setCheckoutLoder(true)

     const getUser = localStorage.getItem('userId')!
    const users:User[] = await client.fetch(`*[_type == 'users']`) 
    const userExists = users.find((e) => e._id === JSON.parse(getUser))
    if (userExists) {
      const salesObj = {
        customerId : userExists._id,
        product_detail: cart.map((e) => (
          {
          _key:uuidv4(),
          productId: e.id,
          productName: e.title,
          quantity_sold:e.minimumOrderQuantity
        }
        
      )),
      sales_price :cart.reduce((total: number, item) => (total + parseInt((item.price - (item.price*(item.discountPercentage/100))).toFixed(0)) * item.minimumOrderQuantity) , 0) + 5,
                        
      paymentStatus: "Paid",
        deliveryAddress: {
         name: userExists.name, addressLine1: userExists.address,
         country: userExists.country, city: userExists.city
      },
       
     }
     await fetch("https://milestone3-ecommerce-rho.vercel.app/api/sales",
         {method:"POST",body:JSON.stringify(salesObj)}
       )

     clearCart()
     router.push('/order-details')
    } else {
      setpopUpOpen(true)
    }
   } catch (error) {
    console.log("error checkout", error);
    } finally {
      setCheckoutLoder(false)
   }
  }
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

                {
                  checkoutLoder ? 
                  ( (<button disabled type="button" className="text-white bg-indigo-500 focus:ring-4 focus:ring-blue-300 py-2 px-4 w-full mt-5 rounded">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Loading...
                  </button>
                  ))
                  
                  :(<button onClick={checkOut} className="bg-indigo-500 text-white py-2 px-4 w-full mt-5 rounded hover:bg-indigo-600">
                  Proceed to Checkout
                  </button>)
                }
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
        {
          popUpOpen && <PopupForm onclose={(closePopUp:boolean) => setpopUpOpen(closePopUp)}/>
        }
    </section>
  );
};

export default CartPage;
