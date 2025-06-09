import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "@/pages/auth";
import Home from "@/pages/Home";
import Vite from "@/pages/Vite";
import Layout from "@/components/layout";
import Products from "@/pages/products";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/vite" element={<Vite />} />
        <Route path="/market" element={<Products />} />
      </Routes>
    </Layout>
  );
}
