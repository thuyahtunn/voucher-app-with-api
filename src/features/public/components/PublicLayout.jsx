import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PublicLayout;
