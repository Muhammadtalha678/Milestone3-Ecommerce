import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const saleObj = await request.json()
    const sales = await client.create(
                            {
                              _type:'sales',
                              ...saleObj
                            }
                            
    )
    return NextResponse.json({
        error:false,data:sales
    })
}