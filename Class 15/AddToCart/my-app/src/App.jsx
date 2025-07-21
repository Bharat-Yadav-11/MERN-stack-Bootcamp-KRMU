import React from "react";
import Card from "./Components/Card";
import CartData from "./Components/CartData";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {


  return (
    <div>
  
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addtocart" element={<CartData/>}/>
     </Routes>
  

    
    </div>
  );
};

export default App;
