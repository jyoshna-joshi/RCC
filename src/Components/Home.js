import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
            {/* Button */}
      <p>
        <button onClick={() => navigate("/selectTemplateTypeForm")}>Upload file</button>
      </p>     
    </>
  );
};

export default Home;