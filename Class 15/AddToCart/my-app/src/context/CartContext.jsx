import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({children}){
    let products = [{name:'iphone16'}, {name:'laptop'}, {name:'shirt'}, {name:'Burger'}]

    const [cartProducts, setCartProducts] = useState([])

    function addToCart(i){
    
        console.log('global data', i)
        setCartProducts((preItem)=>{
            return [...preItem, products[i]]
        })

    }

     

    let value = {
        cartProducts,
        addToCart     ,
        setCartProducts   
    }

    return(<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
}