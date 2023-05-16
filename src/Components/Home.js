import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Find from "./Find";
import Driver from "./Driver";
import Luxury from "./Luxury";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import ShowContent from "./ShowContent";

const Home = (props) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  return (
    <>
      <Hero />
      <ShowContent />
      <Find />
      
      <Luxury />
      <Footer />
    </>
  );
};

export default Home;
