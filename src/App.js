import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import {Login} from "./components/Login";
import AdminApproval from "./components/AdminApproval";
import ViewAll from "./components/ViewAllContent";
import './scss/style.scss';
import SaveTempleteContent from './components/SaveTempleteContent';
import Test from './components/Test';
import Images from './components/Images';
import ViewDetails from './components/ViewDetails'
import ViewAllContent from './components/ViewAllContent';
import Navbar from './components/Navbar'
import Search from './components/Search';
import ApproveReject from './components/ApproveReject';

const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
// const Home = React.lazy(() => import('./layout/AdminLayout'))

const App = () => {
  const [page, setPage] = useState();
  
  useEffect(() => {
    var path = window.location.pathname;

    if (path.includes("admin")) {
      setPage("admin");
    }
    else if (path.includes("selectSaveTemplateContent")) {
      setPage("upload");
    }
    else if (path.includes("viewDetails")) {
      setPage("view");
    }
    else {
      setPage("home");
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        {page === 'admin' 
          ? <div></div>
          : <Navbar />
        }
        
        <Routes>
          {/* <Route exact path="/" name="Home" element={<Home />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<Images />} />

          <Route path="/selectSaveTemplateContent" element={<SaveTempleteContent />} />
          <Route path="/selectLoginForm" element={<Login />} />
          <Route path="/selectLoginForm" element={<selectViewAllContent />} />
          <Route path="/selectViewAllContent" element={<Search />} />
          <Route path="/selectApproveReject" element={<ApproveReject />} />   
          <Route path="/viewDetails" element={<ViewDetails />} />           
          <Route exact path="*" name="Admin Dashboard" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


