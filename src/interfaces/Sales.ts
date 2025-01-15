interface DeliveryAddress {
    name:string,
    addressLine1:string,
    city:string,
    country:string,
}

export interface ProductDetail {
    productId:string,
    productName:string,
    quantity_sold:string
}

export interface SalesObj  {
    customerId: string,
    product_detail: ProductDetail[]
    sales_price: string, // Total price
    paymentStatus: string,
    deliveryAddress: DeliveryAddress,
    _updatedAt:string
};

