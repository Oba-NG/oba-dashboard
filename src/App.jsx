import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "@/pages/auth";
import Home from "@/pages/Home";
import Vite from "@/pages/Vite";
import Layout from "@/components/layout";
import Products from "@/pages/products";
import { AppContext } from "@/context/AppContext";

export default function App() {
  const [cartCount, setCartCount] = useState(4);

  return (
    <AppContext.Provider value={{ cartCount, setCartCount }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/vite" element={<Vite />} />
          <Route path="/market" element={<Products />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
}
