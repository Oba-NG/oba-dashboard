import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Vite from "@/pages/Vite";
import Layout from "@/components/layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vite" element={<Vite />} />
      </Routes>
    </Layout>
  );
}
