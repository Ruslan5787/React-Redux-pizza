import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./home";

export function Layout() {
  return (
    <div className="main">
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
