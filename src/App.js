import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import {Login} from "./components/Login";
import AdminApproval from "./components/AdminApproval";
import ViewAll from "./components/ViewAllContent";
import './scss/style.scss';
import SaveTempleteContent from './components/SaveTempleteContent';
import Test from './components/Test';
import ViewAllContent from './components/ViewAllContent';
import Navbar from './components/Navbar'
import Search from './components/Search';


const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
// const Home = React.lazy(() => import('./layout/AdminLayout'))

const App = () => {
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar />
          
          <Routes>
          {/* <Route exact path="/" name="Home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Test />} /> */}

          <Route path="/selectSaveTemplateContent" element={<SaveTempleteContent />} />
          <Route path="/selectLoginForm" element={<Login />} />
          <Route path="/selectLoginForm" element={<selectViewAllContent />} />
          <Route path="/selectViewAllContent" element={<Search />} />

          <Route path="/selectAdminApprovalForm" element={<AdminApproval />} />
          <Route exact path="*" name="Admin Dashboard" element={<AdminLayout />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


