'use client'
import React, { createContext, useEffect, useState } from "react";
interface cartContextType {
    cart: object[],
    addToCart : (item:object) => void,
    removeFromCart : (id:number) => void,
    
}

export const CartContext = createContext<cartContextType>({cart:[],addToCart:() => {},removeFromCart:() => {}})

const CartContextProvider = ({children}:{children:React.ReactNode}) => {
    const [cart, setCart] = useState<object[]>([])
    
    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])
    
    const addToCart = (item: any) => {
        const productExists = cart.find((e: any) => e.id == item.id)
        console.log(productExists);
        
        if (!productExists) {
            
            setCart([...cart, item])
        }
        
    };

    const removeFromCart = (id:number) => {
        const productEists = cart.find((e: any) => e.id === id)
        // console.log(productEists);
        
        if (productEists) {
            const filterProduct = cart.filter((e: any) => e.id !== id)
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