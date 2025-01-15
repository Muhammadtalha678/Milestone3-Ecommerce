// import OrderDetailsTable from '@/components/OrderDetailsTable'
import { SalesObj } from '@/interfaces/Sales'
import { client } from '@/sanity/lib/client'
import React from 'react'

const OrderDetails = async () => {
  try {
    const orderDetails:SalesObj[] = await client.fetch(
      `*[_type == 'sales'] | order(_createdAt asc){
       customerId,
    product_detail,
    sales_price, // Total price
    paymentStatus,
    deliveryAddress,
    _created_at
      }`
    )
    // const { product_detail, sales_price, paymentStatus, deliveryAddress } = orderDetails
    console.log(orderDetails);
    
   return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      {/* Table for Product Details */}
       {/* <OrderDetailsTable orderDetails={orderDetails}/> */}
    </div>
  ) 
  } catch (error) {
    throw error
  }
}

export default OrderDetails
