import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({children}){
    
    let products = [{name:'iphone16'}, {name:'laptop'}, {name:'shirt'}, {name:'Burger'}]

    const [cartProducts, setCartProducts] = useState([])

    function addToCart(i){
        setCartProducts((preItem)=>{
        //    return [...preItem, products[i]]
        if(cartProducts.some((item)=>{
            return item.name === products[i].name
        })){
            return preItem
        }else {
            return [...preItem, products[i]]
        }
        })

    }

    function deleteHandler(i){
        setCartProducts((preItem)=>{
          return preItem.filter((item,index)=>{
            return i!=index
          })  
        })

    }

     

    let value = {
        cartProducts,
        addToCart,  
        deleteHandler
    }

    return(<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
}