'use client';

import { SalesObj } from "@/interfaces/Sales";

const OrderDetailsTable = ({ orderDetails }: { orderDetails: SalesObj }) => {
  return (
    <div className="container mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Order Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">{`Order #${orderDetails._id}`}</h1>

      {/* Order Info */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Order Summary</h2>
        <p className="text-base text-gray-600"><span className="font-medium">Customer ID:</span> {orderDetails.customerId}</p>
        <p className="text-base text-gray-600"><span className="font-medium">Order Date:</span> {new Date(orderDetails._createdAt).toLocaleString()}</p>
        <p className="text-base text-gray-600">
          <span className="font-medium">Payment Status:</span> 
          <span className="ml-2 px-2 py-1 rounded-lg text-white bg-green-500">{orderDetails.paymentStatus}</span>
        </p>
      </div>

      {/* Delivery Address */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Delivery Address</h2>
        <p className="text-base text-gray-600"><span className="font-medium">Name:</span> {orderDetails.deliveryAddress.name}</p>
        <p className="text-base text-gray-600">
          <span className="font-medium">Address:</span> {`${orderDetails.deliveryAddress.addressLine1}, ${orderDetails.deliveryAddress.city}, ${orderDetails.deliveryAddress.country}`}
        </p>
      </div>

      {/* Product Details Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Details</h2>
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Quantity Sold</th>
              <th className="border border-gray-300 px-4 py-2">Price per Unit</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.product_detail.map((product, index) => (
              <tr key={index} className="text-gray-600">
                <td className="border border-gray-300 px-4 py-2">{`P00${product.productId}`}</td>
                <td className="border border-gray-300 px-4 py-2">{product.quantity_sold}</td>
                <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
                <td className="border border-gray-300 px-4 py-2">${parseInt(product.productPrice) * parseInt(product.quantity_sold)}</td>
              </tr>
            ))}
            {/* Grand Total Row */}
            <tr className="bg-gray-100 font-bold text-gray-800">
              <td colSpan={3} className="border border-gray-300 px-4 py-2 text-right">Grand Total (incl. shipping):</td>
              <td className="border border-gray-300 px-4 py-2">${orderDetails.sales_price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
