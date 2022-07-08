import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/scss/main.scss";

import { Cart, Home } from "./pages";
import { Layout } from "./components/Layout";

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
