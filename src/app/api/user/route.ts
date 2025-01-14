import { NextRequest, NextResponse } from "next/server";
import joi from 'joi'
import { client } from "@/sanity/lib/client";

interface User {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    address: string,
    city: string,
    country: string,
    email: string,
    name: string
}
export async function POST(request: NextRequest) {
        const userValidate = joi.object({
        name:joi.string().min(3).max(255).required(),
        email: joi.string().email().required(),
         address: joi.string().min(6).required().messages({
                "string.min": `Address must be at least {#limit} characters long`,
                "any.required": `Address is required`,
        }),
        city: joi.string().default("Karachi"),
        country: joi.string().default("Pakistan"),
    })
    try {
        const response = await request.json()
        const { error, value } = userValidate.validate(response)
        
        if (error) return NextResponse.json({ error: true, message: error.message, data: null }) 
        
        const users:User[] = await client.fetch(`
            *[_type == 'users']
            `)
        const findUser = users.find((e) => (e.email === value.email))
        if (findUser) return NextResponse.json({ error: true, message: "User already exists", data: null })
        
        const sendUserToSanity = await client.create({
            _type: 'users',
            ...value
        })
        console.log(sendUserToSanity);
        
        return NextResponse.json({ error: false, message: "User registerd Successfully", data: sendUserToSanity })
        
    } catch (error: any) {
        
        return NextResponse.json({error:true,message:error.message,data:null})
    }
}