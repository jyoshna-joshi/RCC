import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import TemplateForm from "./components/TemplateForm";
import TemplateTypeForm from "./components/TemplateTypeForm";
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
