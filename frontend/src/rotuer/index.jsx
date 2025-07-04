// src/Router.js
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../pages/Index.jsx";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";

import SiteMap from "../pages/SiteMap.jsx";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import Signup from "../pages/Signup.jsx";

import UserProfile from "../pages/users/Profile.jsx";
import ChangePassword from "../pages/users/ChangePassword.jsx";


import NotFound from "../pages/NotFound";

//import ProtectedRoute from "../components/ProtectedRoute";
//<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/site-map" element={<SiteMap />} />
      <Route path="/users/profile" element={<UserProfile />} />
      <Route path="/users/change-password" element={<ChangePassword />} />
     
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
