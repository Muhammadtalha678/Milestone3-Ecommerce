export default {
    name: "sales", // Collection name in Sanity
    type: "document", // This tells Sanity it’s a main schema
    title: "Sales",
    fields: [
        {
            name: "orderId",
            type: "string",
            title: "Order ID",
        },
        {
            name: "customerId",
            type: "string",
            title: "Customer ID",
        },
        {
            name: "items",
            type: "array",
            title: "Order Items",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "itemId", type: "string", title: "Item ID" },
                        { name: "quantity", type: "number", title: "Quantity" },
                        { name: "price", type: "number", title: "Price" },
                    ],
                },
            ],
        },
        {
            name: "totalPrice",
            type: "number",
            title: "Total Price",
        },
        {
            name: "paymentStatus",
            type: "string",
            title: "Payment Status",
            options: {
                list: ["Paid", "Pending", "Failed"], // Dropdown options
            },
        },
        {
            name: "deliveryAddress",
            type: "object",
            title: "Delivery Address",
            fields: [
                { name: "name", type: "string", title: "Name" },
                { name: "addressLine1", type: "string", title: "Address Line 1" },
                { name: "city", type: "string", title: "City" },
                { name: "country", type: "string", title: "Country" },
            ],
        },
    ],
};
