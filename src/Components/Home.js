import React from "react";
import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Hero from "./Hero";
import Find from "./Find";
import Driver from "./Driver";
import Luxury from "./Luxury";
import Footer from "./Footer";



const Home = (props) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  return (
    <>
 
          <Hero />
          <Find />
          <Driver />
          <Luxury />
          <Footer />    
    </>
  );
};

export default Home;