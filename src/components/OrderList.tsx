'use client'
import { SalesObj } from '@/interfaces/Sales'
import React, { useEffect, useState } from 'react'
import OrderDetailsTable from './OrderDetailsTable'

const OrderList = ({ orderDetails }: { orderDetails: SalesObj[] }) => {
   const [filterData,setFilterData] = useState<SalesObj[]>([])
  
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userId')!)
        if (user) {
          setFilterData(
            orderDetails.filter((e) => {
              return e.customerId === user
          })
          )
        }
      },[])
    return (
    <div>
        {
        filterData.length > 0 ?
        filterData.map((e,i) => (
            <OrderDetailsTable orderDetails={e} key={i}/>
        ))
        : <h1 className="text-2xl font-bold mb-4">No Orders Found</h1>
        }    
    </div>
  )
}

export default OrderList
