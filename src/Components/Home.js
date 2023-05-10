import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
            {/* Button */}
      <p>
        <button onClick={() => navigate("/selectSaveTemplateContent")}>Upload file</button>
        <button onClick={() => navigate("/selectLoginForm")}>Admin Login</button>
        <button onClick={() => navigate("/selectAdminApprovalForm")}>Admin Approval</button>
      </p>     
    </>
  );
};

export default Home;