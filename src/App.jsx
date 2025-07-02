import { Routes, Route } from "react-router-dom";

import Auth from "@/pages/auth";
import Home from "@/pages/Home";
import Vite from "@/pages/Vite";
import Layout from "@/components/layout";
import Products from "@/pages/products";
import { CartProvider } from "@/context/cart";
import { ProductProvider } from "@/context/product";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/vite" element={<Vite />} />
            <Route path="/market" element={<Products />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}
