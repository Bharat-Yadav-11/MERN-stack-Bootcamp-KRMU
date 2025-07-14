import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCard from './CartCard'

const CartData = () => {
    const{cartProducts} = useContext(CartContext)
    console.log('cart data', cartProducts)
  return (

  <div>
      <div>CartData</div>

      {
        cartProducts.map((item,i)=>{
            return <CartCard {...item} key={i} index={i} />
        })
      }
  </div>
  )
}

export default CartData