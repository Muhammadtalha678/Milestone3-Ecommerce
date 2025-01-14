'use client'
import { Product } from "@/interfaces/Product";
import React, { createContext, useEffect, useState } from "react";
interface cartContextType {
    cart: Product[],
    addToCart : (item:Product) => void,
    decrementItem : (item:Product) => void,
    removeFromCart: (id: number) => void,
    clearCart:() => void
}

export const CartContext = createContext<cartContextType>({cart:[],clearCart:() => {},addToCart:() => {},decrementItem:() => {},removeFromCart:() => {}})

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
    
    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    const addToCart = (item: Product) => {
        const productExists = cart.find((e) => e.id == item.id)
        console.log(productExists);
        
        if (!productExists) {
            
            setCart([...cart, {...item,minimumOrderQuantity:1}])
        }
        //for handle data already in cart to increae quantity
        else {
            console.log("already in cart");
            
            setCart(
                cart.map((e) => 
                e.id == item.id ? {...e,minimumOrderQuantity:e.minimumOrderQuantity + 1} : e
                )
            )
        }
        
    };

    const decrementItem = (item: Product) => {
        setCart(
            cart.map((e) =>
            e.id == item.id ? {...e,minimumOrderQuantity:e.minimumOrderQuantity - 1} : e
            )
        )
    }

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
        <CartContext.Provider value={{ cart, addToCart,decrementItem,removeFromCart,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider