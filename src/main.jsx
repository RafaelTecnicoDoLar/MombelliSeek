import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css'

import Home from "./components/Home.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Login from "./components/Login.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  </BrowserRouter>
);
