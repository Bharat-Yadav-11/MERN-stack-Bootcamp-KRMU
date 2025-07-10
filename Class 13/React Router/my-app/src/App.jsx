import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(false);

  function loginFunction(){
    setLogin(true)
  }

  function logoutFunction(){
    setLogin(false)
  }


  return (
    <div>
      <div id="navList">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* ...... conditional rendring........ */}

        {login || <Link to="/login">Login</Link>}

        {login || <Link to="/signup">Signup</Link>}

        {login && <Link to="/dashboard">Dashboard</Link>}

        {login && <Link to="/logout">Logout</Link>}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login  loginFunction={loginFunction}/>} />
        <Route path="/signup" element={<Signup loginFunction={loginFunction} />} />
        <Route path="/logout" element={<Logout  logoutFunction={logoutFunction}/>} />
      </Routes>
    </div>
  );
};

export default App;
