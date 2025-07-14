 import React from 'react'
import Card from './Components/Card'
import CartData from './Components/CartData'
 
 const App = () => {
  let products = [{name:'iphone16'}, {name:'laptop'}, {name:'shirt'}, {name:'Burger'}]

   return (
    <div>
       <div>
        {
          products.map((item, i)=>{
            return <Card {...item} key={i} index={i}/>
          })
        }
    </div>

    <CartData/>
    </div>
   )
 }
 
 export default App