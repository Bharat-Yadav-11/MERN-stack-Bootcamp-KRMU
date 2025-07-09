import React from 'react'
import './style.css'

const Card = ({id, email, name, phone}) => {

    // console.log(props.element)
    // let {id, email, name, phone} = props.element
   

  return (
    <div className='card'>
        <h2>{id}</h2>
        {/* <h1>{props.name}</h1>
        <h3>{props.email}</h3>
        <h3>{props.phone}</h3> */}
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
 
    </div>
  )
}

export default Card