import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
let products = [
    { name: "iphone16" },
    { name: "laptop" },
    { name: "shirt" },
    { name: "Burger" },
  ];
  return (
    <div>

    <Link to="/addtocart">Add to Cart</Link>
        <div>
            {products.map((item, i) => {
            return <Card {...item} key={i} index={i} />;
            })}
      </div>
    </div>
  )
}

export default Home