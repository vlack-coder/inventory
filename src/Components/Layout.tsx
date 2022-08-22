import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
