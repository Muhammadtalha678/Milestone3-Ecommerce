import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const response = await request.json()
        const result = await client.create({
            _type: 'sales',
            ...response
        })
        
        return NextResponse.json({data:result})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error})
        
    }

}