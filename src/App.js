import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import {Login} from "./components/Login";
import AdminApproval from "./components/AdminApproval";
import TemplateForm from "./components/TemplateForm";
import TemplateTypeForm from "./components/TemplateTypeForm";
import AdvertisementJournal from './components/AdvertisementJournal';
import ArticleJournal from './components/ArticleJournal';
import ArticleNewspaper from './components/ArticleNewspaper';
import BookHistorical from './components/BookHistorical';
import BookTechnical from './components/BookTechnical';
import PhotographCommercial from './components/PhotographCommercial';
import AdvertiseNewspaper from './components/AdvertiseNewspaper';
import PhotographPersonal from './components/PhotographPersonal';
import SalesBrochure from './components/SalesBrochure';
import SalesRecord from './components/SalesRecord';
import './scss/style.scss'


const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
// const Home = React.lazy(() => import('./layout/AdminLayout'))

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" name="Home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/selectTemplateTypeForm" element={<TemplateTypeForm />} />
          <Route path="/selectLoginForm" element={<Login />} />
          <Route path="/selectAdminApprovalForm" element={<AdminApproval />} />
          <Route exact path="*" name="Admin Dashboard" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};
