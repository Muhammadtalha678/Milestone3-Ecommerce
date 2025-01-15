'use client'
import { ProductDetail, SalesObj } from "@/interfaces/Sales";

const OrderDetailsTable = ({ orderDetails }: { orderDetails: SalesObj[] }) => {
  // const userId = JSON.parse(localStorage.getItem('userID')!)
  // if (userId) {
  //   const findUserOrders:SalesObj[] = orderDetails.filter((e) => e.customerId === userId)
  //   // console.log(findUserOrders);
    
  //   return (
  //     <div>
  //       {findUserOrders.map((order, orderIndex) => (
  //         <div key={orderIndex} className="mb-8 border-b border-gray-300 pb-4">
  //           <h2 className="text-xl font-semibold mb-2">Order #{orderIndex + 1}</h2>
  
  //           {/* Table for Product Details */}
  //           <table className="w-full border-collapse border border-gray-300 mb-4">
  //             <thead>
  //               <tr className="bg-gray-100">
  //                 <th className="border border-gray-300 px-4 py-2 text-left">Product ID</th>
  //                 <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
  //                 <th className="border border-gray-300 px-4 py-2 text-left">Item Price</th>
  //                 <th className="border border-gray-300 px-4 py-2 text-left">Total Price</th>
  //                 <th className="border border-gray-300 px-4 py-2 text-left">Order Created</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {order.product_detail.map((product:ProductDetail, productIndex: number) => (
  //                 <tr key={productIndex}>
  //                   <td className="border border-gray-300 px-4 py-2">{product.productId}</td>
  //                   <td className="border border-gray-300 px-4 py-2">{product.quantity_sold}</td>
                    
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  
  //           {/* Delivery Address */}
  //           <div className="mb-4">
  //             <h3 className="text-lg font-medium">Delivery Address</h3>
  //             <p>
  //               <strong>Name:</strong> {order.deliveryAddress.name}
  //             </p>
  //             <p>
  //               <strong>Address:</strong> {order.deliveryAddress.addressLine1}
  //             </p>
  //             <p>
  //               <strong>City:</strong> {order.deliveryAddress.city}
  //             </p>
  //             <p>
  //               <strong>Country:</strong> {order.deliveryAddress.country}
  //             </p>
  //           </div>
  
  //           {/* Payment and Total Price */}
  //           <div className="mb-4">
  //             <h3 className="text-lg font-medium">Payment Details</h3>
  //             <p>
  //               <strong>Payment Status:</strong> {order.paymentStatus}
  //             </p>
  //             <p>
  //               <strong>Total Price:</strong> ${order.sales_price}
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
    
  // }
  // else {
  //   return (
  //     <div>
  //       No Orders Found
  //     </div>
  //   )
  // }
  return (
    <div>
      {
        orderDetails.map((e) => (
          <h1>{e.sales_price}</h1>
        ))
      }
    </div>
  )
};

export default OrderDetailsTable;
