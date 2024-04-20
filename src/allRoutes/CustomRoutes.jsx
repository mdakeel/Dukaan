import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";


export const CustomRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
       
    </>
  );
};
