import OrderList from '@/components/OrderList'
import { SalesObj } from '@/interfaces/Sales'

import { client } from '@/sanity/lib/client'
import React from 'react'
export const revalidate = 0;
const OrderDetails = async () => {
  try {
    const orderDetails:SalesObj[] = await client.fetch(
      `*[_type == 'sales'] | order(_createdAt asc){
          _id,
          customerId,
          product_detail,
          sales_price,
          paymentStatus,
          deliveryAddress,
          _createdAt,
          _updatedAt,
      }`
    )
    
    // const { product_detail, sales_price, paymentStatus, deliveryAddress } = orderDetails
    console.log(orderDetails);
    
   return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Order Details</h1>
       {/* Table for Product Details */}
       <OrderList orderDetails={orderDetails}/>
       
    </div>
  ) 
  } catch (error) {
    throw error
  }
}

export default OrderDetails
