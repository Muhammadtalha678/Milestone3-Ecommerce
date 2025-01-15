import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const saleObj = await request.json()
    const sales = await client.create(
        {
            _type: 'sales',
            ...saleObj
        }

    )
    // const response = await fetch("https://api.goshippo.com/shipments/", {
    //     method: "POST",
    //     headers: {
    //         Authorization: "Bearer TEST_TXBaPpehdbo3z06OuNjRdu34Ux8WApfJ5COyRwHPybg",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         address_from: "Saylani karachi",
    //         address_to: sales.deliveryAddress.addressLine1,
    //         parcels:sales.product_detail.length,
    //         async: false,
    //     },)

    // }) 
    // const shipment = await response.json();
    // console.log(shipment);

    // const fetchSale = await client.fetch()
    return NextResponse.json({
        error: false, data: sales
    })
}