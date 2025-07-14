import React from 'react'

const CartCard = ({name}) => {
    console.log('data : ', name)
  return (
   <div>
    <p>{name}</p>
   </div>
  )
}

export default CartCard