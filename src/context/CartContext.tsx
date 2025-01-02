'use client'
import { Product } from "@/interfaces/Product";
import React, { createContext, useEffect, useState } from "react";
interface cartContextType {
    cart: Product[],
    addToCart : (item:Product) => void,
    removeFromCart : (id:number) => void,
    
}

export const CartContext = createContext<cartContextType>({cart:[],addToCart:() => {},removeFromCart:() => {}})

const CartContextProvider = ({children}:{children:React.ReactNode}) => {
    const [cart, setCart] = useState<Product[]>([])
    
    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])
    
    const addToCart = (item: Product) => {
        const productExists = cart.find((e) => e.id == item.id)
        console.log(productExists);
        
        if (!productExists) {
            
            setCart([...cart, {...item,minimumOrderQuantity:1}])
        }
        else {
        }
        
    };

    const removeFromCart = (id:number) => {
        const productEists = cart.find((e) => e.id === id)
        // console.log(productEists);
        
        if (productEists) {
            const filterProduct = cart.filter((e) => e.id !== id)
            // console.log(filterProduct);
            setCart(filterProduct)
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider