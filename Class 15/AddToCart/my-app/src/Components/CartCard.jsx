import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartCard = ({name, index}) => {
  const {deleteHandler} = useContext(CartContext)
    console.log('data : ', name)
  return (
   <div>
    <p>{name}</p>
    <button onClick={()=>deleteHandler(index)}>Delete</button>
   </div>
  )
}

export default CartCard