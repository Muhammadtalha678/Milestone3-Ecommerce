'use client'

import { SalesObj } from "@/interfaces/Sales";
import { useEffect, useState } from "react";

const OrderDetailsTable = ({ orderDetails }: { orderDetails: SalesObj[] }) => {
  const [userId,setUserId] = useState('')
  const [filterOrders,setFilterOrders] = useState<SalesObj[]>([])
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userId')!)
    setUserId(user)
    console.log(user);
    if (userId) {
      
      const ordersAgainstID = orderDetails.filter((e) => e.customerId === userId)
      setFilterOrders(ordersAgainstID)
    }
  },[])
  
    return (
      <>
        {filterOrders.length > 0
          ?
          <div>
            {filterOrders.map((e,i) => (
              <h1 key={i}>{"customerId" + e.customerId} {e.deliveryAddress.addressLine1 }</h1>
            ))}
          </div>
          : <div>0 orders</div>
        }
      </>
    );
    
 
};

export default OrderDetailsTable;
