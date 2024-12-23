import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PublicLayout;
