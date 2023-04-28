import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import TemplateForm from "./Components/TemplateForm";
import TemplateTypeForm from "./Components/TemplateTypeForm";
import {Login} from "./Components/Login";
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
