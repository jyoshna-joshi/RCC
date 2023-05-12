import React from "react";
import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Find from "./Find";
import Driver from "./Driver";
import Luxury from "./Luxury";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import ShowContent from "./ShowContent";



const Home = (props) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  return (
    <>
<<<<<<< HEAD
 
          <Hero />
          <ShowContent />
          <Find />
          <Driver />
          <Luxury />
          <Footer />
          
              
=======
      <h1>Home Page</h1>
            {/* Button */}
      <p>
        <button onClick={() => navigate("/selectSaveTemplateContent")}>Upload file</button>
        <button onClick={() => navigate("/selectLoginForm")}>Admin Login</button>
        <button onClick={() => navigate("/selectAdminApprovalForm")}>Admin Approval</button>
        <button onClick={() => navigate("/selectViewAllContent")}>View All</button>

      </p>     
>>>>>>> 6283f020cf89a872be1dc735a03e32808507426d
    </>
  );
};

export default Home;
