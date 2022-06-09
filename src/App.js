import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/scss/main.scss";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}
